import { jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOMServer from "react-dom/server";
import { useToast, Spinner, Flex, ChakraProvider } from "@chakra-ui/react";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useCookies, CookiesProvider } from "react-cookie";
import { navigate } from "vike/client/router";
import axios from "axios";
const logoUrl = "/assets/static/logo.0ab59a12.svg";
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const PageShell$1 = "";
const URL = "https://apitinyexpense.ftefy.ch";
const ApiConfig = {
  login: `${URL}/account/login`,
  register: `${URL}/account/create`,
  status: `${URL}/health/status`,
  categories: `${URL}/categories`,
  expenses: `${URL}/expenses`,
  changePassword: `${URL}/account/change-password`
};
const AuthContext = createContext(
  void 0
);
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
async function redirect(url) {
  const navigationPromise = navigate(url);
  await navigationPromise;
}
const AuthProvider = (props) => {
  const { children, pageContext } = props;
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [loading, setLoading] = useState(true);
  const [loggedOut, setLoggedOut] = useState(false);
  const toast = useToast();
  const login = async (email, password) => {
    try {
      const userLoginData = `${email}:${password}`;
      const { data, status } = await axios.post(ApiConfig.login, null, {
        headers: {
          Authorization: `Basic ${btoa(userLoginData)}`
        }
      });
      if (status !== 200) {
        throw new Error("Failed to login");
      }
      const token = data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      setUser(data);
      setCookie("userData", JSON.stringify(data), {
        path: "/"
      });
      await redirect("/home");
      toast({
        title: "Login Successful",
        description: "You have been successfully logged in.",
        status: "success",
        // Set status to 'success' for green color
        duration: 5e3,
        // Duration in milliseconds
        isClosable: true
        // Allow closing the toast
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Invalid User",
        description: "Please check your password and email address.",
        status: "error",
        duration: 5e3,
        // Duration in milliseconds
        isClosable: false
      });
    }
  };
  const logout = async () => {
    removeCookie("userData", { path: "/" });
    setUser(null);
    setLoggedOut(true);
  };
  const value = {
    user,
    login,
    logout
  };
  useEffect(() => {
    const userData = cookies.userData;
    if (userData) {
      setUser(userData);
      axios.defaults.headers.common["Authorization"] = `Bearer ${userData == null ? void 0 : userData.token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    }
    setLoading(false);
    const checkIfLoggedIn = async () => {
      if (!loggedOut && user === null && pageContext.urlPathname !== "/" && pageContext.urlPathname !== "/register" && !loading) {
        await redirect("/");
        toast({
          title: "Invalid page request",
          description: "Please login to access this content.",
          status: "error",
          duration: 5e3,
          // Duration in milliseconds
          isClosable: false
        });
      } else if (loggedOut && user === null && pageContext.urlPathname !== "/" && pageContext.urlPathname !== "/register" && !loading) {
        await redirect("/");
        toast({
          title: "Logout Successful",
          description: "You have been successfully logged out.",
          status: "success",
          // Set status to 'success' for green color
          duration: 5e3,
          // Duration in milliseconds
          isClosable: true
          // Allow closing the toast
        });
      }
    };
    checkIfLoggedIn();
  }, [
    user,
    toast,
    pageContext.urlPathname,
    loading,
    loggedOut,
    cookies.userData
  ]);
  return loading ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
};
function PageShell({
  children,
  pageContext
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(AuthProvider, { pageContext, children: /* @__PURE__ */ jsx(
    Flex,
    {
      w: "100%",
      h: "100%",
      display: "flex",
      flexDir: "column",
      align: "center",
      justify: "flex-start",
      p: 4,
      bgGradient: " radial-gradient(gray.600, gray.800)",
      children: /* @__PURE__ */ jsx(Flex, { direction: "column", align: "center", justify: "center", children })
    }
  ) }) }) });
}
function getPageTitle(pageContext) {
  var _a2;
  const title = (
    // Title defined dynamically by data()
    ((_a2 = pageContext.data) == null ? void 0 : _a2.title) || // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.config.title || "Vike Demo"
  );
  return title;
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const queryClient = new QueryClient();
const onRenderHtml = async (pageContext) => {
  const { Page } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(CookiesProvider, { children: /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, {}) }) }) }) })
  );
  const title = getPageTitle(pageContext);
  const { documentProps } = pageContext.exports;
  const desc = documentProps && documentProps.description || "App using Vite + Vike";
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <base href=".">\n        <meta charset="UTF-8" />\n        <link rel="icon" href="', '" />\n        <link rel="manifest" href="/manifest.webmanifest">\n        <script src="registerSW.js"><\/script>\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <meta name="description" content="', '" />\n        <title>', `</title>
      </head>
      <body>
        <div id="react-root" style='height:100vh'>`, "</div>\n      </body>\n    </html>"])), logoUrl, desc, title, dangerouslySkipEscape(
    pageHtml
  ));
  return {
    documentHtml,
    // See https://vike.dev/streaming#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42
      };
    }
  };
};
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  ApiConfig as A,
  AuthContext as a,
  usePageContext as b,
  import_0 as i,
  redirect as r,
  useAuth as u
};
