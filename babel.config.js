/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".json"],
        alias: {
          "@": "./src",
        },
      },
    ],
    "inline-dotenv",
    "react-native-reanimated/plugin", // needs to be last
  ],
};
