import React from 'react';
import {Video} from '../../../src/components/video';
import groundImmobilisationNotes from './ground-immobilisations.md';

export default {
  title: 'Kansetsu waza | Ground immobilsations',
};
export const all = () => <Video url='n9E-Oklw_QU?start=5&end=42'/>;
all.story = {
  name: 'All',
  parameters: {notes: groundImmobilisationNotes}
};