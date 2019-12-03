import React from 'react';
import {Video} from "../../../src/components/video";

export default {
  title: 'Kata\'s | Nage no kata / Ma sutemi waza ',
};

export const tomeNage = () => <Video url='YOcVfmmMBLY?start=273&end=295'/>;
tomeNage.story = {
  name: 'Tomoe nage',
  // parameters: { notes: tomeNageNotes },
};
export const uraNage = () => <Video url='YOcVfmmMBLY?start=295&end=315'/>;
uraNage.story = {
  name: 'Ura nage',
  // parameters: { notes: uraNageNotes },
};
export const sumiGaeshi = () => <Video url='YOcVfmmMBLY?start=316&end=338'/>;
sumiGaeshi.story = {
  name: 'Sumi gaeshi',
  // parameters: { notes: sumiGaeshiNotes },
};