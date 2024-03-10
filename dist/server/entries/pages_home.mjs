import { A as AuthContext, u as useAuth, i as import_0 } from "../chunks/chunk-58a6c006.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Box, Select, Text, Button, VStack, HStack, Input, IconButton, CloseButton } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { AddIcon } from "@chakra-ui/icons";
import "@tanstack/react-query";
import "react-dom/server";
import "vike/server";
import "react-cookie";
import "vike/client/router";
const CategoryMenu = ({ onChange, currentValue }) => {
  const currencies = [
    { name: "Test Category 1", code: "1" },
    { name: "Test Category 1", code: "2" },
    { name: "Test Category 1", code: "3" },
    { name: "Test Category 1", code: "4" }
    // Add more currencies as needed
  ];
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
    Select,
    {
      placeholder: "Category",
      value: currentValue,
      onChange: (event) => {
        var _a;
        onChange((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.value);
      },
      children: currencies.map((currency, index) => /* @__PURE__ */ jsx("option", { value: currency.code, children: currency.name }, index))
    }
  ) });
};
function Page() {
  var _a;
  const [category, setCategory] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [itemList, setItemList] = useState([]);
  useContext(AuthContext);
  const handleAddItem = () => {
    if (category.trim() !== "" && expenseDescription.trim() !== "" && amount > 0) {
      setItemList((prevList) => [
        { category, expenseDescription, amount },
        ...prevList
      ]);
      setCategory("");
      setExpenseDescription("");
      setAmount(0);
    }
  };
  const handleRemoveItem = (index) => {
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };
  const { user, logout } = useAuth();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        position: "absolute",
        top: 5,
        bgColor: "white",
        borderRadius: 6,
        display: "flex",
        flexDir: "row",
        justifyContent: "space-between",
        alignItems: "center",
        h: 12,
        p: 4,
        minW: { base: "300px", sm: "500px" },
        children: [
          /* @__PURE__ */ jsx(Text, { children: ((_a = user == null ? void 0 : user.account) == null ? void 0 : _a.name) || "Test user" }),
          /* @__PURE__ */ jsx(Button, { onClick: logout, colorScheme: "teal", size: "sm", width: "auto", children: "Logout" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Box,
      {
        p: 4,
        mx: "auto",
        minH: "100px",
        minW: { base: "300px", sm: "500px" },
        bg: "white",
        rounded: "lg",
        shadow: "md",
        overflow: "hidden",
        children: [
          /* @__PURE__ */ jsxs(VStack, { spacing: 4, align: "flex-start", w: "100%", children: [
            /* @__PURE__ */ jsxs(HStack, { spacing: 4, w: "100%", children: [
              /* @__PURE__ */ jsx(
                CategoryMenu,
                {
                  currentValue: category,
                  onChange: (e) => setCategory(e)
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  placeholder: "Amount",
                  value: amount,
                  maxW: "70px",
                  onChange: (e) => setAmount(Number(e.target.value))
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(HStack, { w: "100%", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Item Name",
                  value: expenseDescription,
                  onChange: (e) => setExpenseDescription(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  isRound: true,
                  colorScheme: "teal",
                  "aria-label": "Add Item",
                  onClick: handleAddItem,
                  children: /* @__PURE__ */ jsx(AddIcon, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(VStack, { mt: 2, spacing: 2, align: "flex-start", w: "100%", children: [
            itemList.length === 0 && /* @__PURE__ */ jsx(Text, { fontSize: "md", color: "red.500", children: "No items recorded." }),
            itemList.map((item, index) => {
              console.log("item", item);
              return /* @__PURE__ */ jsxs(
                HStack,
                {
                  border: "2px solid black",
                  borderRadius: "5px",
                  w: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 2,
                  children: [
                    /* @__PURE__ */ jsx(Text, { fontWeight: "bold", children: item.expenseDescription }),
                    /* @__PURE__ */ jsx(Text, { children: item.category }),
                    /* @__PURE__ */ jsxs(Text, { children: [
                      item.amount,
                      " ",
                      item.currency
                    ] }),
                    /* @__PURE__ */ jsx(CloseButton, { onClick: () => handleRemoveItem(index) })
                  ]
                },
                index
              );
            })
          ] })
        ]
      }
    )
  ] });
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
    importPath: "/pages/home/+Page.tsx",
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
