module.exports = {
  "*.{js,jsx,ts,tsx}": ['eslint "{**/*,*}.{js,ts,jsx,tsx}" --fix', "prettier . --write"],
  "*.{css,md,mdx,json}": ["prettier . --write"]
};
