import React from 'react';
import {Video} from "../../../src/components/video";

export default {
  title: 'Kata\'s | Nage no kata / Koshi waza ',
};

export const ukiGoshi = () => <Video url='YOcVfmmMBLY?start=108&end=126'/>;
ukiGoshi.story = {
  name: 'Uki goshi',
  // parameters: { notes: ukiGoshiNotes },
};
export const haraiGoshi = () => <Video url='YOcVfmmMBLY?start=126&end=148'/>;
haraiGoshi.story = {
  name: 'Harai goshi',
  // parameters: { notes: haraiGoshiNotes },
};
export const tsurikomiGoshi = () => <Video url='YOcVfmmMBLY?start=146&end=169'/>;
tsurikomiGoshi.story = {
  name: 'Tsurikomi goshi',
  // parameters: { notes: tsurikomiGoshiNotes },
};