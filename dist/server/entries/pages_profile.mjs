import { A as AuthContext, i as import_0 } from "../chunks/chunk-ad4fb382.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Select, Text, Input, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { w as webkitGradientBorderStyle, H as Header } from "../chunks/chunk-f1739fd0.js";
import "@tanstack/react-query";
import "react-dom/server";
import "vike/server";
import "react-cookie";
import "vike/client/router";
const CurrencyMenu = ({
  onChange,
  currentValue
}) => {
  const currencies = [
    { name: "Euro (EUR)", code: "EUR" },
    { name: "US Dollar (USD)", code: "USD" },
    { name: "British Pound (GBP)", code: "GBP" },
    { name: "Swiss Franc (CHF)", code: "CHF" }
    // Add more currencies as needed
  ];
  return /* @__PURE__ */ jsx(
    Box,
    {
      p: "2px",
      borderRadius: "7px",
      bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
      children: /* @__PURE__ */ jsx(
        Select,
        {
          borderRadius: "5px",
          ...webkitGradientBorderStyle,
          placeholder: "Currency",
          value: currentValue,
          onChange: (event) => {
            var _a;
            onChange((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.value);
          },
          children: currencies.map((currency, index) => /* @__PURE__ */ jsx("option", { value: currency.code, children: currency.name }, index))
        }
      )
    }
  );
};
function Page() {
  const context = useContext(AuthContext);
  const [currency, setCurrency] = useState("");
  const [password, setPassword] = useState("");
  return (context == null ? void 0 : context.user) === null ? null : /* @__PURE__ */ jsxs(
    Box,
    {
      w: "100%",
      h: "100%",
      display: "flex",
      flexDir: "column",
      alignItems: "space-between",
      gap: 4,
      children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx(
          Box,
          {
            p: 4,
            mx: "auto",
            minW: { base: "350px", sm: "500px" },
            maxW: { base: "350px", sm: "500px" },
            bg: "#FFFFFFB2",
            rounded: "lg",
            shadow: "md",
            overflow: "hidden",
            display: "flex",
            flexDir: "column",
            gap: 4,
            maxHeight: "calc(100vh - 150px)",
            children: /* @__PURE__ */ jsxs(Box, { w: "100%", h: "100%", display: "flex", gap: 2, flexDir: "column", children: [
              /* @__PURE__ */ jsxs(Box, { display: "flex", flexDir: "column", gap: 1, children: [
                /* @__PURE__ */ jsx(Text, { children: "Change Password:" }),
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    p: "2px",
                    borderRadius: "7px",
                    bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                    children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        borderRadius: "5px",
                        ...webkitGradientBorderStyle,
                        type: "password",
                        placeholder: "Password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value)
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(Box, { display: "flex", flexDir: "column", gap: 1, children: [
                /* @__PURE__ */ jsx(Text, { children: "Change currency:" }),
                /* @__PURE__ */ jsx(
                  CurrencyMenu,
                  {
                    currentValue: currency,
                    onChange: (e) => setCurrency(e)
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Box, { display: "flex", justifyContent: "flex-end", children: /* @__PURE__ */ jsx(
                Box,
                {
                  p: "2px",
                  borderRadius: "7px",
                  bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                  children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      bgColor: "#FFFFFFB2",
                      "aria-label": "Add Item",
                      onClick: () => null,
                      children: "Save changes"
                    }
                  )
                }
              ) })
            ] })
          }
        )
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
    importPath: "/pages/profile/+Page.tsx",
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
