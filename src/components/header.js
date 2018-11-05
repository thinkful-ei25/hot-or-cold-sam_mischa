

import React from 'react';
import TopNav from './top-nav';
import Info from './info'

export default function Header(props){
  return(
    <header>
      <TopNav />
      <h1>Hot or Cold</h1>
      <Info />
    </header>
  );
}