import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Text, Divider, Avatar, Button } from "@chakra-ui/react";
import { LiaUser } from "react-icons/lia";
import { u as useAuth, r as redirect } from "./chunk-609b579e.js";
const webkitGradientBorderStyle = {
  bg: "#FFFFFFB2",
  border: "2px solid transparent",
  _hover: { border: "2px solid transparent" },
  _focus: { border: "2px solid transparent" },
  _selected: { border: "2px solid transparent" }
};
const webkitGradientTextStyle = {
  bgGradient: "linear(to right, #ff5757, #8c52ff)",
  bgClip: "text",
  cursor: "pointer",
  userSelect: "none"
};
var CategoryColors = /* @__PURE__ */ ((CategoryColors2) => {
  CategoryColors2["RED"] = "red.500";
  CategoryColors2["ORANGE"] = "orange.500";
  CategoryColors2["YELLOW"] = "yellow.500";
  CategoryColors2["GREEN"] = "green.500";
  CategoryColors2["BLUE"] = "blue.500";
  CategoryColors2["PURPLE"] = "purple.500";
  CategoryColors2["WHITE"] = "white";
  CategoryColors2["BLACK"] = "black";
  return CategoryColors2;
})(CategoryColors || {});
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
      bgColor: "#ffffff",
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
            ...webkitGradientTextStyle,
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
              /* @__PURE__ */ jsxs(
                Box,
                {
                  display: "flex",
                  flexDir: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  children: [
                    /* @__PURE__ */ jsx(
                      Avatar,
                      {
                        size: "sm",
                        bgGradient: "linear-gradient(to right, #ff5757, #8c52ff)",
                        icon: /* @__PURE__ */ jsx(LiaUser, { fontSize: "1.5rem" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Text,
                      {
                        fontSize: "lg",
                        fontWeight: "bold",
                        ...webkitGradientTextStyle,
                        textTransform: "capitalize",
                        children: ((_a = user == null ? void 0 : user.userProfile) == null ? void 0 : _a.name) || "Test user"
                      }
                    )
                  ]
                }
              ),
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
  CategoryColors as C,
  Header as H,
  webkitGradientBorderStyle as w
};
