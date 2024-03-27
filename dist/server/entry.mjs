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
    "file": "assets/static/home.2dc42a8c.css",
    "src": "\u0000virtual:vike:pageConfigValuesAll:client:/pages/home.css"
  },
  "_chunk-31284e69.js": {
    "file": "assets/chunks/chunk-31284e69.js",
    "imports": [
      "_chunk-4b375b17.js"
    ]
  },
  "_chunk-4b375b17.js": {
    "css": [
      "assets/static/onRenderClient.ff5f94e3.css"
    ],
    "file": "assets/chunks/chunk-4b375b17.js",
    "imports": [
      "_chunk-d6cd9d78.js"
    ]
  },
  "_chunk-9c84d6e4.js": {
    "file": "assets/chunks/chunk-9c84d6e4.js",
    "imports": [
      "_chunk-4b375b17.js"
    ]
  },
  "_chunk-adc80fa5.js": {
    "file": "assets/chunks/chunk-adc80fa5.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-9c84d6e4.js"
    ]
  },
  "_chunk-d6cd9d78.js": {
    "file": "assets/chunks/chunk-d6cd9d78.js"
  },
  "_chunk-f28e4689.js": {
    "file": "assets/chunks/chunk-f28e4689.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-9c84d6e4.js"
    ]
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
    "file": "assets/entries/entry-client-routing.11e3ee1e.js",
    "imports": [
      "_chunk-d6cd9d78.js"
    ],
    "isEntry": true,
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.e82bd7cf.js",
    "imports": [
      "_chunk-4b375b17.js",
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
      "assets/static/home.2dc42a8c.css"
    ],
    "file": "assets/entries/pages_home.2bb8276c.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-f28e4689.js",
      "_chunk-9c84d6e4.js",
      "_chunk-31284e69.js",
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
    "file": "assets/entries/pages_index.ce48cd21.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-adc80fa5.js",
      "_chunk-9c84d6e4.js",
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
    "file": "assets/entries/pages_profile.2e938a33.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-f28e4689.js",
      "_chunk-9c84d6e4.js",
      "_chunk-31284e69.js",
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
    "file": "assets/entries/pages_register.6ec45b2a.js",
    "imports": [
      "_chunk-4b375b17.js",
      "_chunk-31284e69.js",
      "_chunk-adc80fa5.js",
      "_chunk-9c84d6e4.js",
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
