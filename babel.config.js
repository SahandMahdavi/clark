const plugins = [
  [
    "module-resolver",

    {
      root: ["."],
      alias: {
        "@app": "./app",
      },
    },
  ],
  [
    "module:react-native-dotenv",

    {
      envName: "APP_ENV",
      moduleName: "@env",
      path: ".env",
      blocklist: null,
      allowlist: null,
      safe: false,
      allowUndefined: false,
      verbose: false,
    },
  ],
  "react-native-reanimated/plugin", // NOTE: this must be last in the plugins
];

const vanillaConfig = {
  presets: [
    "module:metro-react-native-babel-preset",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  env: {
    production: {},
    staging: {},
  },
  plugins,
};

const babelConfig = vanillaConfig;

module.exports = babelConfig;
