import React, { lazy } from 'react';

const Braggel = lazy(() => import('./braggel/braggel'));
const Contact = lazy(() => import('./contact/contact'));
const Leeftijden = lazy(() => import('./leeftijden/leeftijden'));
const News = lazy(() => import('./news/news'));

function Body() {
  return (
    <main>
      <News />
      <Braggel />
      <Leeftijden />
      <Contact />
    </main>
  );
}

export default Body;
