import { addons } from '@storybook/manager-api';
import lpkitvueTheme from './theme';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    ...lpkitvueTheme,
  },
  sidebar: {
    showRoots: true,
  },
});
