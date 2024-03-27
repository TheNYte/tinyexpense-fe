import { a as AuthContext, u as useAuth, A as ApiConfig, i as import_0 } from "../chunks/chunk-08368d39.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Select, useToast, Text, Input, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { w as webkitGradientBorderStyle, H as Header } from "../chunks/chunk-17fdba1f.js";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import "react-dom/server";
import "vike/server";
import "react-cookie";
import "vike/client/router";
import "react-icons/lia";
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
  var _a;
  const toast = useToast();
  const context = useContext(AuthContext);
  const [currency, setCurrency] = useState(
    (_a = context == null ? void 0 : context.user) == null ? void 0 : _a.userProfile.currency
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const mutateData = {
    oldPassword,
    newPassword: newPassword1
  };
  const { logout } = useAuth();
  const mutatePassword = useMutation({
    mutationFn: (data) => {
      return axios.post(ApiConfig.changePassword, JSON.stringify(data));
    },
    onSuccess: async () => {
      toast({
        title: "Password change was successful",
        description: "You have successfully changed your password.",
        status: "success",
        // Set status to 'success' for green color
        duration: 5e3,
        // Duration in milliseconds
        isClosable: true
        // Allow closing the toast
      });
      setOldPassword("");
      setNewPassword1("");
      setNewPassword2("");
      logout();
    },
    onError: async () => {
      toast({
        title: "Something went wrong",
        description: "Your old password was wrong.",
        status: "error",
        // Set status to 'success' for green color
        duration: 5e3,
        // Duration in milliseconds
        isClosable: true
        // Allow closing the toast
      });
    }
  });
  const onProfileChangePasswordChange = () => {
    if (newPassword1 === newPassword2) {
      mutatePassword.mutate(mutateData);
    }
  };
  let bgColor = "linear-gradient(to right, #ff5757, #8c52ff)";
  if (newPassword1 !== newPassword2 && newPassword1 !== "" && newPassword2 !== "") {
    bgColor = "linear-gradient(to right, red, red)";
  } else if (newPassword1 === newPassword2 && newPassword1 !== "" && newPassword2 !== "") {
    bgColor = "linear-gradient(to right, green, green)";
  }
  return (context == null ? void 0 : context.user) === null ? /* @__PURE__ */ jsx(Box, {}) : /* @__PURE__ */ jsxs(
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
            bg: "#FFFFFF",
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
                        placeholder: "Old Password",
                        value: oldPassword,
                        onChange: (e) => setOldPassword(e.target.value)
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(Box, { p: "2px", borderRadius: "7px", bgGradient: bgColor, children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    borderRadius: "5px",
                    ...webkitGradientBorderStyle,
                    type: "password",
                    placeholder: "New Password",
                    value: newPassword1,
                    onChange: (e) => setNewPassword1(e.target.value)
                  }
                ) }),
                /* @__PURE__ */ jsx(Box, { p: "2px", borderRadius: "7px", bgGradient: bgColor, children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    borderRadius: "5px",
                    ...webkitGradientBorderStyle,
                    type: "password",
                    placeholder: "New Password again",
                    value: newPassword2,
                    onChange: (e) => setNewPassword2(e.target.value)
                  }
                ) })
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
                      onClick: onProfileChangePasswordChange,
                      children: "Change password"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsxs(Box, { display: "flex", flexDir: "column", gap: 1, children: [
                /* @__PURE__ */ jsx(Text, { children: "Change currency:" }),
                /* @__PURE__ */ jsx(
                  CurrencyMenu,
                  {
                    currentValue: currency,
                    onChange: (e) => setCurrency(e)
                  }
                )
              ] })
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
const title = "Tinyexpense | Profile";
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title
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
  },
  {
    configName: "title",
    importPath: "/pages/profile/+title.ts",
    isValueFile: true,
    exportValues: import_2
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
