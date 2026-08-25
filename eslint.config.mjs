import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const patchedNextVitals = nextVitals.map((cfg) => {
  if (cfg.rules) {
    const newRules = { ...cfg.rules };
    if (cfg.plugins?.react) {
      newRules["react/no-unescaped-entities"] = "off";
    }
    if (cfg.plugins?.["react-hooks"]) {
      newRules["react-hooks/set-state-in-effect"] = "warn";
      newRules["react-hooks/refs"] = "warn";
      newRules["react-hooks/purity"] = "warn";
    }
    return {
      ...cfg,
      rules: newRules,
    };
  }
  return cfg;
});

const eslintConfig = defineConfig([
  ...patchedNextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "tests/**",
    "test-connection.js",
    "playwright.config.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

export default eslintConfig;
