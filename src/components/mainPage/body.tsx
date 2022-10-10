import React from 'react';
import Braggel from './braggel/braggel';
import Contact from './contact/contact';
import Leeftijden from './leeftijden/leeftijden';
import News from './news/news';

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
