import React from 'react';
import {Video} from "../../../src/components/video";

export default {
  title: 'Kata\'s | Nage no kata / Ashi waza ',

};

export const okuriashiHarai = () => <Video url='YOcVfmmMBLY?start=184&end=206'/>;
okuriashiHarai.story = {
  name: 'Okuriashi harai',
  // parameters: { notes: okuriashiHaraiNotes },
};
export const sasaeTsurikomiAshi = () => <Video url='YOcVfmmMBLY?start=208&end=232'/>;
sasaeTsurikomiAshi.story = {
  name: 'Sasae tsurikomi ashi',
  // parameters: { notes: sasaeTsurikomiAshiNotes },
};
export const uchiMata = () => <Video url='YOcVfmmMBLY?start=232&end=258'/>;
uchiMata.story = {
  name: 'Uchi mata',
  // parameters: { notes: uchiMataNotes },
};