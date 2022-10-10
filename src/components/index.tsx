import React from 'react';
import Body from './mainPage/body';
import Header from './header/header';
import NavBar from './header/navbar';

function Index() {
  return (
    <div className="page">
      <Header />
      <NavBar />
      <Body />
    </div>
  );
}

export default Index;
