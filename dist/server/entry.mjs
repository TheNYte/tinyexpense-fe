import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/home",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/home", "definedBy": "/pages/home/" },
    loadConfigValuesAll: () => import("./entries/pages_home.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/profile",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/profile", "definedBy": "/pages/profile/" },
    loadConfigValuesAll: () => import("./entries/pages_profile.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/register",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/register", "definedBy": "/pages/register/" },
    loadConfigValuesAll: () => import("./entries/pages_register.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "\u0000virtual:vike:pageConfigValuesAll:client:/pages/home.css": {
    "file": "assets/static/home.825391bd.css",
    "src": "\u0000virtual:vike:pageConfigValuesAll:client:/pages/home.css"
  },
  "_chunk-6121774a.js": {
    "file": "assets/chunks/chunk-6121774a.js",
    "imports": [
      "_chunk-b18ede8a.js",
      "_chunk-9d3c0ac7.js"
    ]
  },
  "_chunk-9d3c0ac7.js": {
    "css": [
      "assets/static/onRenderClient.ff5f94e3.css"
    ],
    "file": "assets/chunks/chunk-9d3c0ac7.js",
    "imports": [
      "_chunk-d6cd9d78.js"
    ]
  },
  "_chunk-b18ede8a.js": {
    "file": "assets/chunks/chunk-b18ede8a.js",
    "imports": [
      "_chunk-9d3c0ac7.js"
    ]
  },
  "_chunk-bc1d4f37.js": {
    "file": "assets/chunks/chunk-bc1d4f37.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-b18ede8a.js"
    ]
  },
  "_chunk-d6cd9d78.js": {
    "file": "assets/chunks/chunk-d6cd9d78.js"
  },
  "_onRenderClient.css": {
    "file": "assets/static/onRenderClient.ff5f94e3.css",
    "src": "_onRenderClient.css"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/home",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/profile",
      "virtual:vike:pageConfigValuesAll:client:/pages/register"
    ],
    "file": "assets/entries/entry-client-routing.1f2adf12.js",
    "imports": [
      "_chunk-d6cd9d78.js"
    ],
    "isEntry": true,
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.8b01fb96.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-d6cd9d78.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "assets": [
      "assets/static/logo.0ab59a12.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/home": {
    "css": [
      "assets/static/home.825391bd.css"
    ],
    "file": "assets/entries/pages_home.a1c0a406.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-bc1d4f37.js",
      "_chunk-b18ede8a.js",
      "_chunk-d6cd9d78.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/home",
    "assets": [
      "assets/static/logo.0ab59a12.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.71dafe0f.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-6121774a.js",
      "_chunk-b18ede8a.js",
      "_chunk-d6cd9d78.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "assets": [
      "assets/static/logo.0ab59a12.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/profile": {
    "file": "assets/entries/pages_profile.03970009.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-bc1d4f37.js",
      "_chunk-b18ede8a.js",
      "_chunk-d6cd9d78.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/profile",
    "assets": [
      "assets/static/logo.0ab59a12.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/register": {
    "file": "assets/entries/pages_register.b7b51674.js",
    "imports": [
      "_chunk-9d3c0ac7.js",
      "_chunk-6121774a.js",
      "_chunk-b18ede8a.js",
      "_chunk-d6cd9d78.js"
    ],
    "isDynamicEntry": true,
    "isEntry": true,
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/register",
    "assets": [
      "assets/static/logo.0ab59a12.svg"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.165",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
