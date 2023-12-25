module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2022: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // typed linting을 위한 설정
        project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
            node: true,
        },
        react: {
            version: "detect",
        },
    },
    plugins: [
        "@typescript-eslint",
        "import",
        "unused-imports",
        "simple-import-sort",
        "react-refresh",
    ],
    rules: {
        "import/no-unresolved": "error",
        "import/default": "off",
        "import/first": "error",
        "import/namespace": "off",
        "import/newline-after-import": "error", // 최종 import와 본문 사이의 공백 추가
        "unused-imports/no-unused-imports": "error", // 미사용 import 자동 제거
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "import/no-unresolved": [
            "error",
            {
                // 이미지 파일을 /public에 있는 걸 /로 로딩하면 unresolved 오류 발생
                ignore: ["\\.svg$", "\\.png$", "\\.jpg$", "\\.gif$"],
            },
        ],
        "react/prop-types": "off",
    },
    ignorePatterns: [
        "**/vite*",
        "yarn.lock",
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/*.md",
        "**/*.js",
        "**/*.cjs",
        "**/*.mjs",
        "**/*.css",
        "**/*.html",
    ],
};
