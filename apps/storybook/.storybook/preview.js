import './assets/style.css';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  breakpoints: {
    breakpointNames: {
      "extra-small": "0",
      small: "481",
      medium: "769",
      large: "961",
      "extra-large": "1281",
    },
    debounceTimeout: 200,
  },
  viewport: {
    viewports: {
      xs: {
        name: "extra-small",
        styles: {
          width: "480px",
          height: "100%",
        },
      },
      s: {
        name: "small",
        styles: {
          width: "768px",
          height: "100%",
        },
      },
      m: {
        name: "medium",
        styles: {
          width: "960px",
          height: "100%",
        },
      },
      l: {
        name: "large",
        styles: {
          width: "1280px",
          height: "100%",
        },
      },
      xl: {
        name: "extra-large",
        styles: {
          width: "1600px",
          height: "100%",
        },
      },
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    list: [
      {
        name: "auto",
        color: "linear-gradient(to bottom right, lightgray 50%, black 50.1%)",
      },
      { name: "light", color: "lightgray", default: true },
      { name: "dark", color: "black" },
    ],
    onChange: (theme) => {
      const iframeDocument = document.querySelector("#storybook-preview-iframe")
        .contentDocument.documentElement;
      if (theme) {
        iframeDocument.dataset.theme = theme.name;
      } else {
        iframeDocument.dataset.theme = "light";
      }
    },
  },
  options: {
    storySort: {
      order: [
        'Layouts',
        'Navigation',
        'Typography',
        'Actions',
        'Dialogs',
        'Inputs',
        'Loading',
        'Widgets',
        'Core Styles',
        'Domain Components',
        'Examples'
      ]
    }
  },
  globalTypes: {
    theme: {
      name: `LPKit Vue Theme`,
      description: '',
      defaultValue: '',
      toolbar: {
        icon: '',
        items: [],
        showName: true,
        dynamicTitle: false,
      },
    },
  },
};

export default preview;
