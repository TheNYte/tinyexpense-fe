import React, {createContext, useContext, useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {navigate} from 'vike/client/router';
import {ApiConfig} from '#root/common/api_config';
import {Spinner, useToast} from '@chakra-ui/react';
import {PageContext} from 'vike/types';
import axios from 'axios';

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
  pageContext: PageContext;
}

type Props = OwnProps;

export async function redirect(url: string) {
  const navigationPromise = navigate(url);
  console.log("The URL changed but the new page hasn't rendered yet.");
  await navigationPromise;
  console.log('The new page has finished rendering.');
}

export const AuthProvider: React.FC<Props> = (props) => {
  const {children, pageContext} = props;
  const [user, setUser] = useState<UserData | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(['userData']);
  const [loading, setLoading] = useState(true); // Add loading state
  const [loggedOut, setLoggedOut] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const userData = cookies.userData;
    if (userData) {
      // If the 'userData' cookie exists, set the user in the state
      setUser(userData);
    }
    setLoading(false); // Set loading to false after checking for user data
  }, [cookies.userData]);

  const login = async (email: string, password: string) => {
    try {
      const userLoginData = `${email}:${password}`;
      const {data, status} = await axios.get(ApiConfig.login, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(userLoginData)}`,
        },
      });

      if (status !== 200) {
        throw new Error('Failed to login');
      }

      setUser(data);
      // Set the 'userData' cookie after successful login
      setCookie('userData', JSON.stringify(data), {
        path: '/',
        secure: true,
      });
      await redirect('/home');
      toast({
        title: 'Login Successful',
        description: 'You have been successfully logged in.',
        status: 'success', // Set status to 'success' for green color
        duration: 5000, // Duration in milliseconds
        isClosable: true, // Allow closing the toast
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Invalid User',
        description: 'Please check your password and email address.',
        status: 'error',
        duration: 5000, // Duration in milliseconds
        isClosable: false,
      });
    }
  };

  const logout = async () => {
    // Remove the 'userData' cookie on logout
    removeCookie('userData', {path: '/'});
    setUser(null);
    setLoggedOut(true);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
  };

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      if (
        !loggedOut &&
        user === null &&
        pageContext.urlPathname !== '/' &&
        pageContext.urlPathname !== '/register' &&
        !loading
      ) {
        await redirect('/');
        toast({
          title: 'Invalid page request',
          description: 'Please login to access this content.',
          status: 'error',
          duration: 5000, // Duration in milliseconds
          isClosable: false,
        });
      } else if (
        loggedOut &&
        user === null &&
        pageContext.urlPathname !== '/' &&
        pageContext.urlPathname !== '/register' &&
        !loading
      ) {
        await redirect('/');
        toast({
          title: 'Logout Successful',
          description: 'You have been successfully logged out.',
          status: 'success', // Set status to 'success' for green color
          duration: 5000, // Duration in milliseconds
          isClosable: true, // Allow closing the toast
        });
      }
    };

    checkIfLoggedIn();
  }, [user, toast, pageContext.urlPathname, loading, loggedOut]);

  // Render children only when user context is available
  return loading ? (
    <Spinner />
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
