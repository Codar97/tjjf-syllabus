import React from 'react';
import {Video} from "../../../src/components/video";
import kesaGatameNotes from './kesa-gatame.md';
import muneGatameNotes from './mune-gatame.md';
import yokoShihoGatameNotes from './yoko-shiho-gatame.md';
import tateShihoGatameNotes from './tate-shiho-gatame.md';
import kamiShihoGatameNotes from './kami-shiho-gatame.md';
import kataGatameNotes from './kata-gatame.md';
import ushiroYokoShihoGatameNotes from './ushiro-yoko-shiho-gatame.md';
import ushiroKezaGatameNotes from './ushiro-keza-gatame.md';
import jujiGatameNotes from './juji-gatame.md';
import udeGaramiNotes from './ude-garami.md';
import udeGatameNotes from './ude-gatame.md';
// import {ModelViewer} from "../../../src/components/model-viewer";
// import kesaGatameModel from './kesagatame.html';

export default {
  title: 'Katame waza | Osaekomi waza',
};

export const kesaGatame = () => <Video url={'yEi-qvGaWgk?start=2&end=13'}/>;
kesaGatame.story = {
  name: 'Kesa gatame',
  parameters: {notes: kesaGatameNotes},
};

export const muneGatame = () => <Video url={'yEi-qvGaWgk?start=15&end=25'}/>;
muneGatame.story = {
  name: 'Mune gatame',
  parameters: {notes: muneGatameNotes},
};

export const yokoShihoGatame = () => <Video url={'4-fKu06Jj0U?start=3&end=14'}/>;
yokoShihoGatame.story = {
  name: 'Yoko shiho gatame',
  parameters: {notes: yokoShihoGatameNotes},
};

export const tateShihoGatame = () => <Video url={'4-fKu06Jj0U?start=15&end=34'}/>;
tateShihoGatame.story = {
  name: 'Tate shiho gatame',
  parameters: {notes: tateShihoGatameNotes},
};

export const kamiShihoGatame = () => <Video url={'4-fKu06Jj0U?start=35&end=52'}/>;
kamiShihoGatame.story = {
  name: 'Kami shiho gatame',
  parameters: {notes: kamiShihoGatameNotes},
};

export const kataGatame = () => <Video url={'mq_60hnrgUQ?start=2&end=8'}/>;
kataGatame.story = {
  name: 'Kata gatame',
  parameters: {notes: kataGatameNotes},
};

export const ushiroYokoShihoGatame = () => <Video url={'mZ6HuMfe2Zw?start=6&end=12'}/>;
ushiroYokoShihoGatame.story = {
  name: 'Ushiro yoko shiho gatame',
  parameters: {notes: ushiroYokoShihoGatameNotes},
};

export const ushiroKezaGatame = () => <Video url={'UpxVBMiwuTY?start=2&end=12'}/>;
ushiroKezaGatame.story = {
  name: 'Ushiro keza gatame',
  parameters: {notes: ushiroKezaGatameNotes},
};

export const jujiGatame = () => <Video url={'WJReT5ND3s4?start=3&end=33'}/>;
jujiGatame.story = {
  name: 'Juji gatame',
  parameters: {notes: jujiGatameNotes},
};

export const udeGarami = () => <Video url={'3z67tCt3b00?start=3&end=30'}/>;
udeGarami.story = {
  name: 'Ude garami',
  parameters: {notes: udeGaramiNotes},
};

export const udeGatame = () => <Video url={'DNoXiXFtNjc?start=3&end=15'}/>;
udeGatame.story = {
  name: 'Ude gatame',
  parameters: {notes: udeGatameNotes},
};