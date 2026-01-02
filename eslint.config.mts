import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js }, extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
   ignores: ["dist/", ".git/", "node_modules/"],
   rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-implicit-globals": "error",

   }

},
  tseslint.configs.recommended,
  globalIgnores( [
        "node_modules",
        "dist",
        "eslint.config.mts",
        "tsconfig.json"
    ])


]);
