import React from 'react';
import {Video} from "../../../src/components/video";
import deAshiBaraiNotes from './de-ashi-barai.md';
import yokoGurumaNotes from './yoko-guruma.md';
import kataHizaSeoiNageNotes from './kata-hiza-seoi-nage.md';
import morotoeSeoiNageNotes from './morotoe-seoi-nage.md';
import koTsuriKomiGoshiNotes from './ko-tsuri-komi-goshi.md';
import koteGaeshiNotes from './kote-gaeshi.md';
import ukiOtoshiNotes from './uki-otoshi.md';
import uchiMataNotes from './uchi-mata.md';

export default {
  title: 'Light Blue | Nage waza',
};
export const DeAshiBarai = () => <Video url='5GVtmQOL3Co'/>;
DeAshiBarai.story = {
  name: 'De ashi barai',
  parameters: {notes: deAshiBaraiNotes},
};
export const YokoGuruma = () => <Video url='FXLmJ3tHlak'/>;
YokoGuruma.story = {
  name: 'Yoko guruma',
  parameters: {notes: yokoGurumaNotes},
};
export const KataHizaSeoiNage = () => <Video url='v0w9Wu3wgNM'/>;
KataHizaSeoiNage.story = {
  name: 'Kata hiza seoi nage',
  parameters: {notes: kataHizaSeoiNageNotes},
};
export const MorotoeSeoiNage = () => <Video url='4YgkqYfeALo'/>;
MorotoeSeoiNage.story = {
  name: 'Morotoe seoi nage',
  parameters: {notes: morotoeSeoiNageNotes},
};
export const KoTsuriKomiGoshi = () => <Video url='ySmHARWUqo8'/>;
KoTsuriKomiGoshi.story = {
  name: 'Ko tsuri komi goshi',
  parameters: {notes: koTsuriKomiGoshiNotes},
};
export const KoteGaeshi = () => <Video url='Jizzxz5jN2Y'/>;
KoteGaeshi.story = {
  name: 'Kote gaeshi',
  parameters: {notes: koteGaeshiNotes},
};
export const UkiOtoshi = () => <Video url='CbssUUmU26c'/>;
UkiOtoshi.story = {
  name: 'Uki otoshi',
  parameters: {notes: ukiOtoshiNotes},
};
export const UchiMata = () => <Video url='L5YQZhNg1Bc'/>;
UchiMata.story = {
  name: 'Uchi mata',
  parameters: {notes: uchiMataNotes},
};