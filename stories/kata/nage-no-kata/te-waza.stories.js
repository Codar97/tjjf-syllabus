import React from 'react';
import {Video} from "../../../src/components/video";

export default {
  title: 'Kata\'s | Nage no kata / Te waza ',
};

export const ukiOtoshi = () => <Video url='YOcVfmmMBLY?start=27&end=50'/>;
ukiOtoshi.story = {
  name: 'Uki otoshi',
  // parameters: { notes: ukiOtoshiNotes },
};
export const seioNage = () => <Video url='YOcVfmmMBLY?start=50&end=70'/>;
seioNage.story = {
  name: 'Seio nage',
  // parameters: { notes: seioNageNotes },
};
export const kataGuruma = () => <Video url='YOcVfmmMBLY?start=70&end=95'/>;
kataGuruma.story = {
  name: 'Kata guruma',
  // parameters: { notes: kataGurumaNotes },
};