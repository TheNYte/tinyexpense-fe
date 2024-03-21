import { i as import_0 } from "../chunks/chunk-d49fde7d.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "@tanstack/react-query";
import "react-dom/server";
import "@chakra-ui/react";
import "vike/server";
import "react";
import "react-cookie";
import "vike/client/router";
import "axios";
function Page({ is404 }) {
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." })
    ] });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "500 Internal Error" }),
      /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
    ] });
  }
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
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
    importPath: "/pages/_error/+Page.tsx",
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
