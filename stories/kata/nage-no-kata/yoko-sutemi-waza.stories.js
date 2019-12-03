import React from 'react';
import {Video} from "../../../src/components/video";

export default {
  title: 'Kata\'s | Nage no kata / Yoko sutemi waza ',
};

export const yokoGake = () => <Video url='YOcVfmmMBLY?start=355&end=381'/>;
yokoGake.story = {
  name: 'Yoko gake',
  // parameters: { notes: yokoGakeNotes },
};
export const yokoGuruma = () => <Video url='YOcVfmmMBLY?start=385&end=409'/>;
yokoGuruma.story = {
  name: 'Yoko guruma',
  // parameters: { notes: yokoGurumaNotes },
};
export const ukiWaza = () => <Video url='YOcVfmmMBLY?start=409&end=435'/>;
ukiWaza.story = {
  name: 'Uki waza',
  // parameters: { notes: ukiWazaNotes },
};
