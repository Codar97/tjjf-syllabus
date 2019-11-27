import { configure, addParameters } from '@storybook/react';
import style from './styling';
addParameters({
  options: {
    showPanel: false,
    theme: style,
  },
});
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);