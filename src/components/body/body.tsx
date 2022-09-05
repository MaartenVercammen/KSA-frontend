import React from 'react'
import Braggel from './braggel'
import Contact from './contact'
import Info from './info'
import Leeftijden from './leeftijden'
import News from './news'

const Body = () => {
  return (
    <main>
      <Info/>
      <News/>
      <Braggel/>
      <Leeftijden/>
      <Contact/>
    </main>
  )
}

export default Body