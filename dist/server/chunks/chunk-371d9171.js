import { jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOMServer from "react-dom/server";
import { Flex, ChakraProvider } from "@chakra-ui/react";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useCookies, CookiesProvider } from "react-cookie";
import { navigate } from "vike/client/router";
const logoUrl = "/assets/static/logo.bebe2e90.svg";
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const PageShell$1 = "";
const URL = "http://apitinyexpense.ftefy.ch";
const ApiConfig = {
  login: `${URL}/account/login`,
  register: `${URL}/account/create`
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
  console.log("The URL changed but the new page hasn't rendered yet.");
  await navigationPromise;
  console.log("The new page has finished rendering.");
}
const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  useEffect(() => {
    const userData = cookies.userData;
    if (userData) {
      setUser(userData);
    }
  }, [cookies.userData]);
  const login = async (email, password) => {
    try {
      const userLoginData = `${email}:${password}`;
      const response = await fetch(ApiConfig.login, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(userLoginData)}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const userData = await response.json();
      setUser(userData);
      setCookie("userData", JSON.stringify(userData), {
        path: "/",
        secure: true
      });
      await redirect("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const logout = async () => {
    removeCookie("userData");
    setUser(null);
    await redirect("/");
  };
  const value = {
    user,
    login,
    logout
  };
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
};
function PageShell({
  children,
  pageContext
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(
    Flex,
    {
      w: "100%",
      h: "100%",
      display: "flex",
      flexDir: "column",
      align: "center",
      justify: "center",
      p: 4,
      bgGradient: " radial-gradient(gray.600, gray.800)",
      children: /* @__PURE__ */ jsx(Flex, { direction: "column", align: "center", justify: "center", children })
    }
  ) }) }) });
}
function getPageTitle(pageContext) {
  var _a;
  const title = (
    // Title defined dynamically by data()
    ((_a = pageContext.data) == null ? void 0 : _a.title) || // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.config.title || "Vike Demo"
  );
  return title;
}
const queryClient = new QueryClient();
const onRenderHtml = async (pageContext) => {
  const { Page } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(ChakraProvider, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(CookiesProvider, { children: /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, {}) }) }) }) })
  );
  const title = getPageTitle(pageContext);
  const { documentProps } = pageContext.exports;
  const desc = documentProps && documentProps.description || "App using Vite + Vike";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root" style='height:100vh'>${dangerouslySkipEscape(
    pageHtml
  )}</div>
      </body>
    </html>`;
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
  AuthContext as A,
  ApiConfig as a,
  usePageContext as b,
  import_0 as i,
  redirect as r,
  useAuth as u
};
