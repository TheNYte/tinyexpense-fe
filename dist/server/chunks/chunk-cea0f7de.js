import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Text, Divider, Button } from "@chakra-ui/react";
import { u as useAuth, r as redirect } from "./chunk-090b40f5.js";
const webkitGradientBorderStyle = {
  bg: "#FFFFFFB2",
  border: "2px solid transparent",
  _hover: { border: "2px solid transparent" },
  _focus: { border: "2px solid transparent" },
  _selected: { border: "2px solid transparent" }
};
const randomItems = [
  {
    expenseDescription: "Item 1",
    expenseCategoryId: 1,
    amount: 53,
    currency: "EUR",
    timestamp: "2023-04-17",
    categoryColor: "black"
  },
  {
    expenseDescription: "This is some bullshit ass text description. This is some bullshit ass text description.  This is some bullshit ass text description. ",
    expenseCategoryId: 1,
    amount: 53,
    currency: "EUR",
    timestamp: "2023-04-17",
    categoryColor: "black"
  },
  {
    expenseDescription: "Item 3",
    expenseCategoryId: 1,
    amount: 53,
    currency: "EUR",
    timestamp: "2023-04-17",
    categoryColor: "black"
  }
  // Add more items as needed
];
const Header = () => {
  var _a;
  const { user, logout } = useAuth();
  const handleOnProfileClick = async () => {
    await redirect("/profile");
  };
  const handleOnLogoClick = async () => {
    await redirect("/home");
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      bgColor: "#FFFFFFB2",
      borderRadius: 6,
      display: "flex",
      flexDir: "column",
      justifyContent: "center",
      alignItems: "center",
      p: 4,
      w: "100%",
      gap: 2,
      children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            onClick: handleOnLogoClick,
            fontSize: "md",
            fontWeight: "bold",
            textTransform: "capitalize",
            children: "Tinyexpense."
          }
        ),
        /* @__PURE__ */ jsx(Box, { bgGradient: "linear(to-r, #ff5757, #8c52ff)", h: "2px", w: "100%", children: /* @__PURE__ */ jsx(Divider, { h: "1px" }) }),
        /* @__PURE__ */ jsxs(
          Box,
          {
            display: "flex",
            flexDir: "row",
            w: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            onClick: handleOnProfileClick,
            children: [
              /* @__PURE__ */ jsx(Text, { size: "md", textTransform: "capitalize", children: ((_a = user == null ? void 0 : user.account) == null ? void 0 : _a.name) || "Test user" }),
              /* @__PURE__ */ jsx(
                Box,
                {
                  p: "2px",
                  borderRadius: "7px",
                  bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                  children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      bgColor: "#FFFFFFB2",
                      color: "black",
                      onClick: logout,
                      colorScheme: "teal",
                      size: "sm",
                      width: "auto",
                      children: "Logout"
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
};
export {
  Header as H,
  randomItems as r,
  webkitGradientBorderStyle as w
};
