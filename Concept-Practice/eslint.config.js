// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    rules: {
      // Turn off completely
      "no-unused-vars": "off",

      // OR better (recommended for TS projects)
      "@typescript-eslint/no-unused-vars": [
        "warn", // change to "off" if you want no warning
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]);