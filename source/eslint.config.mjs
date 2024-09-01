import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "script",
        },
        rules: {
            // Правила для JavaScript-файлов
            "semi": ["error", "always"],
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "no-console": "off",
            "no-debugger": "off",
            "no-unused-vars": "off",
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": "off",
        },
    },
    pluginJs.configs.recommended,
];