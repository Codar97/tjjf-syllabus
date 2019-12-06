import {addParameters, configure} from '@storybook/react';
import style from './styling.js';

const order = [
  'Purple',
  'Light Blue',
  'Kansetsu',
  'Katame',
  'Kata\'s',
  'Nage no kata / Te waza',
  'Nage no kata / Koshi waza',
  'Nage no kata / Ashi waza',
  'Nage no kata / Ma sutemi waza',
  'Nage no kata / Yoko sutemi waza',
  'All'];

addParameters({
  options: {
    storySort: (a, b) => {
      let aIndex = 0;
      let bIndex = 0;
      for (let index in order) {
        if (a[1].kind.includes(order[index])) aIndex = index;
        if (b[1].kind.includes(order[index])) bIndex = index;
      }
      return aIndex === bIndex ? 0 : aIndex < bIndex ? -1 : 1
    },
    showPanel: false,
    theme: style,
  },
});
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);