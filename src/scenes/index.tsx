import React, { lazy } from 'react';

const Body = lazy(() => import('./mainPage/body'));
const Header = lazy(() => import('../components/header/header'));
const NavBar = lazy(() => import('../components/header/navbar'));

function Index() {
  return (
    <>
      <Header />
      <NavBar />
      <Body />
    </>
  );
}

export default Index;
