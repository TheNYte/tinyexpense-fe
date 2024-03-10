import { a as ApiConfig, r as redirect, i as import_0 } from "../chunks/chunk-58a6c006.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { v as validateEmail, b as validateName, a as validatePassword, V as VikeLink } from "../chunks/chunk-7c41b569.js";
import "react-dom/server";
import "vike/server";
import "react";
import "react-cookie";
import "vike/client/router";
function Page() {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch(ApiConfig.register, {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        method: "POST"
      });
    },
    onSuccess: async () => {
      await redirect("/");
    }
  });
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
        /* @__PURE__ */ jsx(
          Formik,
          {
            initialValues: { email: "", name: "", password: "" },
            onSubmit: (values, actions) => {
              mutation.mutate(values, {
                onSuccess: (data) => {
                  console.log("Data from server:", data);
                },
                onError: (error) => {
                  console.error("Error from server:", error);
                }
              });
            },
            children: () => /* @__PURE__ */ jsxs(Form, { children: [
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
              /* @__PURE__ */ jsx(Field, { name: "name", validate: validateName, children: ({ field, form }) => /* @__PURE__ */ jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Username" }),
                /* @__PURE__ */ jsx(Input, { ...field, placeholder: "TvojTatkoRecords" }),
                /* @__PURE__ */ jsx(FormErrorMessage, { children: form.errors.name })
              ] }) }),
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
              /* @__PURE__ */ jsx(Button, { mt: 4, colorScheme: "teal", type: "submit", width: "full", children: "Register" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Box, { mt: 2, textAlign: "center", children: /* @__PURE__ */ jsx(VikeLink, { href: "/", children: /* @__PURE__ */ jsx(Text, { color: "teal.500", children: "Already registered? Log in here." }) }) })
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
    importPath: "/pages/register/+Page.tsx",
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
