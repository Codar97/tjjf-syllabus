import React from 'react';
import empiNotes from './empi.md';

export const empi = () => <div>Read notes</div>;
empi.story = {
  name: 'Empi',
  parameters: {notes: empiNotes}
};