module.exports = {
  "stories": [
    "../projects/web-storybook/src/**/*.stories.mdx",
    "../projects/web-storybook/src/**/*.stories.@(js|jsx|ts|tsx)",

    "../projects/web-components/src/**/*.stories.mdx",
    "../projects/web-components/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}