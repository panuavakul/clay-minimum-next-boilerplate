module.exports = {
  parserOptions: { project: ["./tsconfig.json"] },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "parent",
          "sibling",
          "index",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@next/next/no-html-link-for-pages": ["error", "/src/pages/"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
  ignorePatterns: ["*.js"],
};
