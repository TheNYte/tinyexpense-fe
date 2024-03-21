import { A as ApiConfig, a as AuthContext, i as import_0 } from "../chunks/chunk-d49fde7d.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Box, IconButton, Select, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, Center, PopoverBody, SimpleGrid, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Stack, Text, ModalFooter, useDisclosure, VStack, HStack, InputGroup, InputRightAddon, Divider, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { AddIcon, CalendarIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useCallback, useMemo, useContext } from "react";
import { w as webkitGradientBorderStyle, C as CategoryColors, H as Header } from "../chunks/chunk-fa339d0d.js";
import DatePicker from "react-datepicker";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import "react-dom/server";
import "vike/server";
import "react-cookie";
import "vike/client/router";
const CategoryMenu = ({
  onChange,
  currentValue,
  onNewCategoryClick,
  categories
}) => {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      p: "2px",
      borderRadius: "7px",
      bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
      display: "flex",
      flexDir: "row",
      justifyContent: "center",
      alignItems: "center",
      children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            borderRightRadius: 0,
            bgColor: "#FFFFFFB2",
            "aria-label": "Add Item",
            onClick: onNewCategoryClick,
            children: /* @__PURE__ */ jsx(AddIcon, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            borderRadius: "5px",
            borderLeftRadius: 0,
            ...webkitGradientBorderStyle,
            placeholder: "Select category",
            value: currentValue,
            outlineColor: "transparent",
            onChange: (event) => {
              var _a;
              onChange((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.value);
            },
            children: categories == null ? void 0 : categories.map((category, index) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.name }, index))
          }
        )
      ]
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
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    Box,
    {
      p: "2px",
      borderRadius: "7px",
      bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
      children: /* @__PURE__ */ jsxs(
        Box,
        {
          h: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "5px",
          w: "100%",
          p: 2,
          ...webkitGradientBorderStyle,
          children: [
            /* @__PURE__ */ jsx(CalendarIcon, { onClick: () => setIsOpen(!isOpen) }),
            /* @__PURE__ */ jsx(
              DatePicker,
              {
                selected: selectedDate,
                open: isOpen,
                onChange,
                dateFormat: "dd. MM. yyyy",
                popperPlacement: "left"
              }
            )
          ]
        }
      )
    }
  );
};
const ColorPicker = (props) => {
  const { currentColor, onColorChange, onButtonClick } = props;
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Popover, { variant: "picker", children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
      Button,
      {
        "aria-label": CategoryColors[currentColor],
        background: CategoryColors[currentColor],
        height: "40px",
        width: "40px",
        padding: 0,
        minWidth: "unset",
        borderRadius: 3
      }
    ) }),
    /* @__PURE__ */ jsxs(PopoverContent, { bg: "#FFFFFFB2", width: "170px", children: [
      /* @__PURE__ */ jsx(PopoverArrow, { bg: CategoryColors[currentColor] }),
      /* @__PURE__ */ jsx(PopoverCloseButton, { color: "#FFFFFFB2" }),
      /* @__PURE__ */ jsx(
        PopoverHeader,
        {
          height: "100px",
          backgroundColor: CategoryColors[currentColor],
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          color: "#FFFFFFB2",
          children: /* @__PURE__ */ jsx(Center, { height: "100%", children: CategoryColors[currentColor] })
        }
      ),
      /* @__PURE__ */ jsxs(PopoverBody, { bg: "#FFFFFFB2", height: "120px", children: [
        /* @__PURE__ */ jsx(SimpleGrid, { columns: 5, spacing: 2, children: Object.keys(CategoryColors).map((c) => /* @__PURE__ */ jsx(
          Button,
          {
            "aria-label": c,
            background: CategoryColors[c],
            height: "22px",
            width: "22px",
            padding: 0,
            minWidth: "unset",
            borderRadius: 3,
            _hover: { background: CategoryColors[c] },
            onClick: () => onButtonClick(`${c}`)
          },
          c
        )) }),
        /* @__PURE__ */ jsx(
          Input,
          {
            borderRadius: 3,
            marginTop: 3,
            placeholder: "red.100",
            size: "sm",
            value: CategoryColors[currentColor],
            onChange: onColorChange
          }
        )
      ] })
    ] })
  ] }) });
};
const useAxiosQuery = (apiUrl, options) => {
  const axiosFunction = useCallback(async () => {
    const response = await axios.get(apiUrl, options);
    return response.data;
  }, [apiUrl, options]);
  return useQuery({ queryKey: [apiUrl], queryFn: axiosFunction });
};
const CustomModal = (props) => {
  const { isOpen, onClose } = props;
  const [newCategoryName, setNewCategoryNameName] = useState("");
  const [newColor, setNewColor] = useState("GREEN");
  const { data, refetch } = useAxiosQuery(ApiConfig.categories);
  const mutateAddCategory = useMutation({
    mutationFn: (data2) => {
      return axios.post(ApiConfig.categories, JSON.stringify(data2));
    },
    onSuccess: async () => {
      await refetch();
    }
  });
  const mutateRemoveCategory = useMutation({
    mutationFn: (id) => {
      return axios.delete(`${ApiConfig.categories}/${id}`);
    },
    onSuccess: async () => {
      await refetch();
    }
  });
  const mutationData = useMemo(
    () => ({
      categoryName: newCategoryName,
      color: newColor
    }),
    [newCategoryName, newColor]
  );
  const handleAddCategory = () => {
    console.log("mutate", mutationData);
    mutateAddCategory.mutate(mutationData);
  };
  const handleOnColorInputChange = (e) => {
  };
  const handleRemoveItem = (id) => {
    mutateRemoveCategory.mutate(id);
  };
  return /* @__PURE__ */ jsxs(Modal, { isOpen, onClose, children: [
    /* @__PURE__ */ jsx(ModalOverlay, {}),
    /* @__PURE__ */ jsxs(
      ModalContent,
      {
        borderRadius: "25px",
        bgGradient: " radial-gradient(gray.600, gray.800)",
        children: [
          /* @__PURE__ */ jsx(ModalHeader, { borderTopRadius: "25px", bgColor: "#FFFFFFCC", children: "Categories" }),
          /* @__PURE__ */ jsx(ModalBody, { bgColor: "#FFFFFFCC", children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, children: [
            data == null ? void 0 : data.map((category, index) => /* @__PURE__ */ jsx(
              Box,
              {
                p: "2px",
                borderRadius: "7px",
                display: "flex",
                bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                children: /* @__PURE__ */ jsxs(
                  Box,
                  {
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    borderRadius: "5px",
                    bg: "#FFFFFFB2",
                    w: "100%",
                    overflow: "hidden",
                    children: [
                      /* @__PURE__ */ jsx(
                        Box,
                        {
                          height: "100%",
                          w: "30px",
                          backgroundColor: CategoryColors[category.color]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Box,
                        {
                          display: "flex",
                          w: "100%",
                          flexDir: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          p: 2,
                          children: [
                            /* @__PURE__ */ jsx(Text, { pl: 2, color: "black", children: category.name }),
                            /* @__PURE__ */ jsx(
                              CloseIcon,
                              {
                                fontSize: "xs",
                                onClick: (e) => handleRemoveItem(category.id)
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              },
              category.id
            )),
            /* @__PURE__ */ jsxs(Box, { display: "flex", flexDir: "row", alignItems: "center", gap: 4, children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "New category",
                  value: newCategoryName,
                  onChange: (e) => setNewCategoryNameName(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                ColorPicker,
                {
                  currentColor: newColor,
                  onColorChange: handleOnColorInputChange,
                  onButtonClick: setNewColor
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(ModalFooter, { bgColor: "#FFFFFFCC", borderBottomRadius: "25px", children: [
            /* @__PURE__ */ jsx(Button, { colorScheme: "blue", mr: 3, onClick: handleAddCategory, children: "Add Category" }),
            /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Close" })
          ] })
        ]
      }
    )
  ] });
};
const getCategorizedDate = (date) => {
  const parsedDate = new Date(date).getTime();
  const today = (/* @__PURE__ */ new Date()).getTime();
  const diffTime = Math.abs(today - parsedDate);
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays <= 7) {
    return "Last Week";
  } else if (diffDays <= 30) {
    return "Last Month";
  } else if (diffDays <= 365) {
    return "Last Year";
  } else {
    return "Earlier";
  }
};
function Page() {
  const currentDate = /* @__PURE__ */ new Date();
  const [categoryId, setCategoryId] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const context = useContext(AuthContext);
  const handleDateChange = (date) => {
    const parsedDate = new Date(date).toISOString();
    setSelectedDate(parsedDate);
  };
  const { data: expensesData, refetch } = useAxiosQuery(
    ApiConfig.expenses
  );
  const { data: categoriesData, isLoading } = useAxiosQuery(
    ApiConfig.categories
  );
  const sortedData = expensesData == null ? void 0 : expensesData.sort((a, b) => {
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);
    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  });
  const mutateAddExpense = useMutation({
    mutationFn: (expenseData) => {
      return axios.post(ApiConfig.expenses, JSON.stringify(expenseData));
    },
    onSuccess: async () => {
      await refetch();
    }
  });
  const handleAddItem = () => {
    if (categoryId !== "" && amount > 0) {
      const categoryItem = categoriesData == null ? void 0 : categoriesData.find(
        (categoryItem2) => categoryItem2.id === parseInt(categoryId, 10)
      );
      const expenseData = {
        categoryId,
        expenseDescription,
        amount,
        currency: "EUR",
        dateTime: selectedDate,
        color: categoryItem.color
      };
      mutateAddExpense.mutate(expenseData);
      setCategoryId("");
      setExpenseDescription("");
      setAmount(0);
    }
  };
  const mutateRemoveExpense = useMutation({
    mutationFn: (id) => {
      return axios.delete(`${ApiConfig.expenses}/${id}`);
    },
    onSuccess: async () => {
      await refetch();
    }
  });
  const handleRemoveItem = (id, e) => {
    e.stopPropagation();
    mutateRemoveExpense.mutate(id);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAddNewCategory = () => {
    onOpen();
  };
  useDisclosure();
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
              /* @__PURE__ */ jsx(CustomModal, { isOpen, onClose }),
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
                          currentValue: categoryId,
                          onChange: (e) => setCategoryId(e),
                          onNewCategoryClick: handleAddNewCategory,
                          categories: categoriesData
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ChakraDatePicker,
                        {
                          selectedDate,
                          onChange: handleDateChange
                        }
                      )
                    ]
                  }
                ),
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
                          children: /* @__PURE__ */ jsxs(InputGroup, { children: [
                            /* @__PURE__ */ jsx(
                              Input,
                              {
                                ...webkitGradientBorderStyle,
                                type: "number",
                                placeholder: "Amount",
                                value: amount,
                                maxW: "70px",
                                px: "2px",
                                onChange: (e) => setAmount(Number(e.target.value))
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              InputRightAddon,
                              {
                                ...webkitGradientBorderStyle,
                                px: "2px",
                                paddingLeft: 0,
                                children: context == null ? void 0 : context.user.userProfile.currency
                              }
                            )
                          ] })
                        }
                      ),
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
              (sortedData == null ? void 0 : sortedData.length) === 0 ? /* @__PURE__ */ jsx(Text, { m: 0, fontSize: "md", children: "No items recorded." }) : /* @__PURE__ */ jsx(
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
                  children: expensesData == null ? void 0 : expensesData.map((item) => {
                    var _a;
                    const date = new Date(item.dateTime);
                    getCategorizedDate(item.dateTime);
                    const formattedDate = date.toLocaleDateString();
                    const formattedTime = date.toLocaleTimeString();
                    return /* @__PURE__ */ jsxs(
                      Box,
                      {
                        p: "2px",
                        borderRadius: "7px",
                        bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                        display: "flex",
                        children: [
                          /* @__PURE__ */ jsx(
                            Box,
                            {
                              borderLeftRadius: "5px",
                              flex: 1,
                              bgColor: CategoryColors[item.color]
                            }
                          ),
                          /* @__PURE__ */ jsxs(
                            AccordionItem,
                            {
                              flex: 10,
                              borderRightRadius: "5px",
                              ...webkitGradientBorderStyle,
                              children: [
                                /* @__PURE__ */ jsxs(
                                  AccordionButton,
                                  {
                                    paddingRight: 2,
                                    display: "flex",
                                    flex: "1",
                                    children: [
                                      /* @__PURE__ */ jsxs(
                                        Box,
                                        {
                                          flex: "5",
                                          display: "flex",
                                          flexDir: "row",
                                          justifyContent: "space-between",
                                          children: [
                                            /* @__PURE__ */ jsx(Box, { children: item.categoryName }),
                                            /* @__PURE__ */ jsx(Box, { children: `${item.amount} ${(_a = context == null ? void 0 : context.user) == null ? void 0 : _a.userProfile.currency}` })
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ jsxs(
                                        Box,
                                        {
                                          flex: "1",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          gap: 4,
                                          textAlign: "end",
                                          children: [
                                            /* @__PURE__ */ jsx(AccordionIcon, {}),
                                            /* @__PURE__ */ jsx(
                                              CloseIcon,
                                              {
                                                fontSize: "xs",
                                                onClick: (e) => handleRemoveItem(item.id, e)
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxs(AccordionPanel, { whiteSpace: "wrap", p: 2, gap: "1px", pl: 4, children: [
                                  /* @__PURE__ */ jsx(
                                    Text,
                                    {
                                      fontSize: "xs",
                                      children: `${formattedDate} - ${formattedTime}`
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(Text, { children: item.expenseDescription })
                                ] })
                              ]
                            }
                          )
                        ]
                      },
                      item.id
                    );
                  })
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
