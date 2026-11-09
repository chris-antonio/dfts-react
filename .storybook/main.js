/** Storybook config. Stories import the built package from ../lib (run `npm run build` first; `npm run storybook` does it for you). */
export default {
  stories: ["../stories/**/*.stories.jsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/react-vite",
};
