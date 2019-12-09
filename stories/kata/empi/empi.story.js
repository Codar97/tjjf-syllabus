import React from 'react';
import empiNotes from './empi.md';

export const empi = () => <span>See Notes</span>;
empi.story = {
  name: 'Empi',
  parameters: {notes: empiNotes}
};