

import React from 'react';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';
import Feedback from './feedback';

export default function Guessing(props){
  return(
    <div>
      <Feedback />
      <GuessForm />
      <GuessCount />
      <GuessHistory />
    </div>
  );
}