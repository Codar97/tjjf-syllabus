import React from 'react';
import {Video} from "../../../src/components/video";
import headNotes from './head.md';
import bodyNotes from './body.md';
import backNotes from './back.md';

export default {
  title: 'Kata\'s | Dangerous Parts',
};
export const head = () => <Video url='y4AFqJYg508?start=11'/>;
head.story = {
  name: 'Head',
  parameters: {notes: headNotes}
};
export const body = () => <Video url='_TWYwLCF3zY?start=11'/>;
body.story = {
  name: 'Body',
  parameters: {notes: bodyNotes}
};
export const back = () => <Video url='1C8JxsuEX_U?start=9'/>;
back.story = {
  name: 'Back',
  parameters: {notes: backNotes}
};