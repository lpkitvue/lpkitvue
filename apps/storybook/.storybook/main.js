import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: [
    "../documentation/**/*.mdx",
    "../documentation/**/*.stories.@(js|jsx|ts|tsx|mjs|cjs)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-links"),
    'storybook-addon-themes', {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    }, {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {}
  },
  features: {
    interactionsDebugger: true, // Enables the interactions debugger
    storyStoreV7: true, // Use the new Story Store v7
    buildStoriesJson: true, // Build stories.json for better performance
  },
  docs: {
    docsPage: true,
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  staticDirs: ['./assets'], // Ensure static assets are properly served
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      resolve: {
        dedupe: ['vue', 'vue-i18n'],
      },
      optimizeDeps: {
        include: ['vue', 'vue-i18n'],
        exclude: [
          '@storybook/addon-docs',
          '@storybook/blocks',
        ],
      },
    });
  },
};

export default config;
