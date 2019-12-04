import React from 'react';
import kuzushiKataNotes from './kuzushi-kata.md';
import KuzushiKata from './kuzushi-kata.svg';

export const kuzushiKata = () => <img src={KuzushiKata} style={{width: 'calc(100vw - 16px)', height: 'calc(100vh - 24px)'}}/>;
kuzushiKata.story = {
  name: 'Kuzushi kata',
  parameters: {notes: kuzushiKataNotes}
};