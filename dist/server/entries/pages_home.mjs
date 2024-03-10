import { A as AuthContext, i as import_0 } from "../chunks/chunk-ad4fb382.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Select, VStack, HStack, Input, IconButton, Divider, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useContext } from "react";
import { w as webkitGradientBorderStyle, r as randomItems, H as Header } from "../chunks/chunk-f1739fd0.js";
import DatePicker from "react-datepicker";
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
          placeholder: "Category",
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
const ChakraDatePicker$1 = "";
const ChakraDatePicker = ({ selectedDate, onChange }) => {
  const currentDate = /* @__PURE__ */ new Date();
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  return /* @__PURE__ */ jsx(
    Box,
    {
      p: "2px",
      borderRadius: "7px",
      w: { base: "75%", md: "50%" },
      bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
      children: /* @__PURE__ */ jsx(
        Box,
        {
          h: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          w: "100%",
          p: 2,
          ...webkitGradientBorderStyle,
          children: /* @__PURE__ */ jsx(
            DatePicker,
            {
              selected: selectedDate,
              onChange,
              dateFormat: "dd. MM. yyyy",
              popperPlacement: "bottom"
            }
          )
        }
      )
    }
  );
};
function Page() {
  const currentDate = /* @__PURE__ */ new Date();
  const [category, setCategory] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [itemList, setItemList] = useState(randomItems);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const context = useContext(AuthContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
  const handleRemoveItem = (e, index) => {
    console.log("e", e);
    e.preventDefault();
    setItemList((prevList) => prevList.filter((_, i) => i !== index));
  };
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
        /* @__PURE__ */ jsxs(
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
            children: [
              /* @__PURE__ */ jsxs(VStack, { spacing: 4, align: "flex-start", w: "100%", children: [
                /* @__PURE__ */ jsxs(
                  HStack,
                  {
                    spacing: 4,
                    w: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                      /* @__PURE__ */ jsx(
                        CategoryMenu,
                        {
                          currentValue: category,
                          onChange: (e) => setCategory(e)
                        }
                      ),
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
                              type: "number",
                              placeholder: "Amount",
                              value: amount,
                              maxW: "70px",
                              onChange: (e) => setAmount(Number(e.target.value))
                            }
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(HStack, { w: "100%", children: /* @__PURE__ */ jsx(
                  ChakraDatePicker,
                  {
                    selectedDate,
                    onChange: handleDateChange
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  HStack,
                  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    w: "100%",
                    children: [
                      /* @__PURE__ */ jsx(
                        Box,
                        {
                          p: "2px",
                          borderRadius: "7px",
                          bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                          w: { base: "75%", md: "50%" },
                          children: /* @__PURE__ */ jsx(
                            Input,
                            {
                              borderRadius: "5px",
                              ...webkitGradientBorderStyle,
                              color: "black",
                              _placeholder: { color: "black" },
                              placeholder: "Item description",
                              value: expenseDescription,
                              onChange: (e) => setExpenseDescription(e.target.value)
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Box,
                        {
                          p: "2px",
                          borderRadius: "7px",
                          bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                          children: /* @__PURE__ */ jsx(
                            IconButton,
                            {
                              bgColor: "#FFFFFFB2",
                              "aria-label": "Add Item",
                              onClick: handleAddItem,
                              children: /* @__PURE__ */ jsx(AddIcon, {})
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Box, { bgGradient: "linear(to-r, #ff5757, #8c52ff)", h: "2px", w: "100%", children: /* @__PURE__ */ jsx(Divider, { h: "1px" }) }),
              itemList.length === 0 ? /* @__PURE__ */ jsx(Text, { m: 0, fontSize: "md", children: "No items recorded." }) : /* @__PURE__ */ jsx(
                Accordion,
                {
                  overflowY: "auto",
                  w: "100%",
                  allowToggle: true,
                  border: "none",
                  display: "flex",
                  flexDir: "column",
                  gap: 2,
                  paddingRight: 4,
                  children: itemList.map((item, index) => /* @__PURE__ */ jsxs(
                    Box,
                    {
                      p: "2px",
                      borderRadius: "7px",
                      bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                      display: "flex",
                      children: [
                        /* @__PURE__ */ jsx(Box, { borderLeftRadius: "5px", flex: 1, bgColor: "black" }),
                        /* @__PURE__ */ jsxs(
                          AccordionItem,
                          {
                            flex: 10,
                            borderRightRadius: "5px",
                            ...webkitGradientBorderStyle,
                            children: [
                              /* @__PURE__ */ jsxs(AccordionButton, { paddingRight: 2, display: "flex", flex: "1", children: [
                                /* @__PURE__ */ jsxs(
                                  Box,
                                  {
                                    flex: "5",
                                    display: "flex",
                                    flexDir: "row",
                                    justifyContent: "space-between",
                                    children: [
                                      /* @__PURE__ */ jsx(Box, { children: item.expenseCategoryId }),
                                      /* @__PURE__ */ jsx(Box, { children: item.amount })
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxs(Box, { flex: "1", textAlign: "end", children: [
                                  /* @__PURE__ */ jsx(AccordionIcon, {}),
                                  /* @__PURE__ */ jsx(
                                    CloseIcon,
                                    {
                                      fontSize: "xs",
                                      onClick: (e) => handleRemoveItem(e, index)
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsx(AccordionPanel, { whiteSpace: "wrap", p: 2, pl: 4, children: /* @__PURE__ */ jsx(Text, { children: item.expenseDescription }) })
                            ]
                          }
                        )
                      ]
                    },
                    index
                  ))
                }
              )
            ]
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
