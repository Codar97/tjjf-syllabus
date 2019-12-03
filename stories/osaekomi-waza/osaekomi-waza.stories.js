import React from 'react';
import {ModelViewer} from "../../src/components/model-viewer";
import kesaGatameModel from './kesagatame.html';

export const kesaGatame = () => <ModelViewer model={kesaGatameModel}/>;
kesaGatame.story = {
  name: 'Kesa gatame',
  // parameters: { notes: kesaGatameNotes },
};

export default {
  title: 'All | Osaekomi waza',
};