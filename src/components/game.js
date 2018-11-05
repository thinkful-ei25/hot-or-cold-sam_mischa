

import React from 'react';
import Header from './header';
import Guessing from './guessing';

export default function Game(props){
  return(
    <div>
      <Header />
      <Guessing />
    </div>
  );
}