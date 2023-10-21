module.exports = {
  "*.{js,jsx,ts,tsx}": ['eslint "{**/*,*}.{js,ts,jsx,tsx}" --fix', "prettier . --write", "git add ."],
  "*.{css,md,mdx,json}": ["prettier . --write", "git add ."]
};
