import React, {createContext, useContext, useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {navigate} from 'vike/client/router';
import {ApiConfig} from '#root/common/api_config';

interface Account {
  id: string;
  name: string;
  email: string;
}

interface UserData {
  account: Account;
  token: string;
}

interface AuthContextType {
  user: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;

export async function redirect(url: string) {
  const navigationPromise = navigate(url);
  console.log("The URL changed but the new page hasn't rendered yet.");
  await navigationPromise;
  console.log('The new page has finished rendering.');
}

export const AuthProvider: React.FC<Props> = (props) => {
  const {children} = props;
  const [user, setUser] = useState<UserData | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(['userData']);

  useEffect(() => {
    const userData = cookies.userData;
    if (userData) {
      // If the 'userData' cookie exists, set the user in the state
      setUser(userData);
    }
  }, [cookies.userData]);

  const login = async (email: string, password: string) => {
    try {
      const userLoginData = `${email}:${password}`;
      const response = await fetch(ApiConfig.login, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(userLoginData)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const userData = await response.json();
      setUser(userData);
      // Set the 'userData' cookie after successful login
      setCookie('userData', JSON.stringify(userData), {
        path: '/',
        secure: true,
      });
      await redirect('/home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    // Remove the 'userData' cookie on logout
    removeCookie('userData');
    setUser(null);
    await redirect('/');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
