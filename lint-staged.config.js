module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "git add ."],
  "*.{css,md,mdx,json}": ["prettier --write", "git add ."]
};
