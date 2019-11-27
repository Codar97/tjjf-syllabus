import React from 'react';
import {Video} from "../../components/video";
import ochiGariNotes from './ouchi-gari.md';
import kochiGariNotes from './kouchi-gari.md';
import tsuriKomiGoshiNotes from './tsuri-komi-goshi.md';
import kotomoeSeoiNageNotes from './kotomoe-seoi-nage.md';
import haneGoshiNotes from './hane-goshi.md';
import ashiGurumaNotes from './ashi-guruma.md';
import ogurumaNotes from './o-guruma.md';
import osotoOtoshiNotes from './o-soto-otoshi.md';
import yokoOtoshiNotes from './yoko-otoshi.md';
import yamaArashiNotes from './yama-arashi.md';

export default {
  title: 'Purple | Nage Waza',
};
export const OuchiGari = () => <Video url='https://www.youtube.com/embed/UpwOqeG26o4'/>;
OuchiGari.story = {
  name: 'Ouchi gari',
  parameters: { notes: ochiGariNotes },
};
export const KochiGari = () => <Video url='https://www.youtube.com/embed/vLUHRV7jKNU'/>;
KochiGari.story = {
  name: 'Kouchi gari',
  parameters: { notes: kochiGariNotes },
};
export const TsuriKomiGoshi = () => <Video url='https://www.youtube.com/embed/Ms3PdW2COmY'/>;
TsuriKomiGoshi.story = {
  name: 'Tsuri komi goshi',
  parameters: { notes: tsuriKomiGoshiNotes },
};
export const KotomoeSeoiNage = () => <Video url='https://www.youtube.com/embed/Y4dsUnFkKMg'/>;
KotomoeSeoiNage.story = {
  name: 'Kotomoe seoi nage',
  parameters: { notes: kotomoeSeoiNageNotes },
};
export const HaneGoshi = () => <Video url='https://www.youtube.com/embed/IdglZccpYbA'/>;
HaneGoshi.story = {
  name: 'Hane goshi',
  parameters: { notes: haneGoshiNotes },
};
export const AshiGuruma = () => <Video url='https://www.youtube.com/embed/e9Z1P8WeyQw'/>;
AshiGuruma.story = {
  name: 'Ashi guruma',
  parameters: { notes: ashiGurumaNotes },
};
export const Oguruma = () => <Video url='https://www.youtube.com/embed/U_0df3eCJQU'/>;
Oguruma.story = {
  name: 'Oguruma',
  parameters: { notes: ogurumaNotes },
};
export const OsotoOtoshi = () => <Video url='https://www.youtube.com/embed/MkTTFz7fC10'/>;
OsotoOtoshi.story = {
  name: 'Osoto otoshi',
  parameters: { notes: osotoOtoshiNotes },
};
export const YokoOtoshi = () => <Video url='https://www.youtube.com/embed/0boVRcdkwUw'/>;
YokoOtoshi.story = {
  name: 'Yoko otoshi',
  parameters: { notes: yokoOtoshiNotes },
};
export const YamaArashi = () => <Video url='https://www.youtube.com/embed/o84fgOHlrXg'/>;
YamaArashi.story = {
  name: 'Yama arashi',
  parameters: { notes: yamaArashiNotes },
};