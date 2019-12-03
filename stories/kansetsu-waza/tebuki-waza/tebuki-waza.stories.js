import React from 'react';
import {Video} from "../../../src/components/video/index";
import kujikiGatameNotes from './kujiki-gatame.md';
import kannukiGatameNotes from './kannuki-gatame.md';

export default {
  title: 'Kansetsu waza | Tebuki waza',
};
export const kujikiGatame = () => <Video url='Rk5pAlHFM0A'/>;
kujikiGatame.story = {
  name: 'Kujiki gatame',
  parameters: {notes: kujikiGatameNotes},
};
export const kannukiGatame = () => <Video url='4wKTdpoL9x8'/>;
kannukiGatame.story = {
  name: ' Kannuki gatame',
  parameters: {notes: kannukiGatameNotes},
};
export const karadaGatame = () => <Video url='5KvTPBDZIuk'/>;
karadaGatame.story = {
  name: 'Karada gatame',
  parameters: {notes: kujikiGatameNotes},
};
export const katsugiGatame = () => <Video url='g4vXQj0MuyM'/>;
katsugiGatame.story = {
  name: 'Katsugi gatame',
  parameters: {notes: kujikiGatameNotes},
};
export const jodanUdeGarami = () => <Video url='moabXZrCux8'/>;
jodanUdeGarami.story = {
  name: 'Jodan ude garami',
  parameters: {notes: kujikiGatameNotes},
};