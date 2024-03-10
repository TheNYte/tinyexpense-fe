import { u as useAuth, i as import_0 } from "../chunks/chunk-371d9171.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text } from "@chakra-ui/react";
import { v as validateEmail, a as validatePassword, V as VikeLink } from "../chunks/chunk-ab3267ba.js";
import { Formik, Form, Field } from "formik";
import "@tanstack/react-query";
import "react-dom/server";
import "vike/server";
import "react";
import "react-cookie";
import "vike/client/router";
const LoginForm = (props) => {
  const { login } = useAuth();
  const handleSubmit = async (formData) => {
    await login(formData.email, formData.password);
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Formik, { initialValues: { email: "", password: "" }, onSubmit: handleSubmit, children: () => /* @__PURE__ */ jsxs(Form, { children: [
      /* @__PURE__ */ jsx(Field, { name: "email", validate: validateEmail, children: ({ field, form }) => /* @__PURE__ */ jsxs(
        FormControl,
        {
          isInvalid: form.errors.email && form.touched.email,
          children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Email Address" }),
            /* @__PURE__ */ jsx(Input, { ...field, placeholder: "john.doe@example.com" }),
            /* @__PURE__ */ jsx(FormErrorMessage, { children: form.errors.email })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Field, { name: "password", validate: validatePassword, children: ({ field, form }) => /* @__PURE__ */ jsxs(
        FormControl,
        {
          isInvalid: form.errors.password && form.touched.password,
          children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Password" }),
            /* @__PURE__ */ jsx(Input, { type: "password", ...field, placeholder: "********" }),
            /* @__PURE__ */ jsx(FormErrorMessage, { children: form.errors.password })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { mt: 4, colorScheme: "teal", type: "submit", width: "full", children: "Login" })
    ] }) }),
    /* @__PURE__ */ jsx(Box, { mt: 2, textAlign: "center", children: /* @__PURE__ */ jsx(VikeLink, { href: "/register", children: /* @__PURE__ */ jsx(Text, { color: "teal.500", children: "Don't have an account? Register here." }) }) })
  ] });
};
function Page() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      p: 8,
      mx: "auto",
      w: "293px",
      bg: "white",
      rounded: "lg",
      shadow: "md",
      overflow: "hidden",
      children: [
        /* @__PURE__ */ jsx(Box, { textAlign: "center", children: /* @__PURE__ */ jsx("h1", { children: "Login" }) }),
        /* @__PURE__ */ jsx(LoginForm, {})
      ]
    }
  );
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/pages/index/+Page.tsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["someAsyncProps"]'
  },
  ["hooksTimeout"]: {
    definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "hooksTimeout"] },
    valueSerialized: '{"data":{"error":30000,"warning":10000}}'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
