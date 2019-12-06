import addons from '@storybook/addons'
import {STORY_RENDERED} from '@storybook/core-events'

addons.register('ChangeButtonAddon', api => {
  api.on(STORY_RENDERED, story => {
    document.getElementsByTagName('button').forEach(button => {
      if (button.innerText === "Canvas") button.innerText = "Demo";
      if (button.innerText === "Addons") button.style.display = "none";
    });
  });
});