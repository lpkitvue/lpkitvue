import { create } from '@storybook/theming';
import logo from './assets/logo.png';

export default create({
  base: 'light',
  brandTitle: 'LPKitVue',
  brandUrl: 'https://lpkitvue.github.io/lpkitvue',
  brandImage: logo,
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#3b3f5c', // Dark color
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#3b3f5c',
  barSelectedColor: '#4361ee',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e5e5e5',
  inputTextColor: '#3b3f5c',
  inputBorderRadius: 4,

  // Button colors
  buttonBg: '#4361ee',
  buttonBorder: '#4361ee',
  buttonTextColor: '#ffffff',

});
