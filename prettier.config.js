/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  arrowParens: "avoid",
  printWidth: 110,
  tailwindFunctions: ["cn", "cva", "clsx"],
  importOrder: [
    "use client",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^@radix-ui/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^@/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    "prettier-plugin-tailwindcss"
  ]
};
