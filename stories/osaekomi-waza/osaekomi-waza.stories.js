import React from 'react';
import {ModelViewer} from "../../src/components/model-viewer";
import kesaGatameModel from './kesagatame.html';
import kesaGatameNotes from './kesa-gatame.md';

export const kesaGatame = () => <ModelViewer model={kesaGatameModel}/>;
kesaGatame.story = {
  name: 'Kesa gatame',
  parameters: { notes: kesaGatameNotes },
};

export default {
  title: 'Katame waza | Osaekomi waza',
};