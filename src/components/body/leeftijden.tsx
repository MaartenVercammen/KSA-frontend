import React from 'react'
import LeeftijdBox from './leeftijdBox'

const Leeftijden = () => {
  return (
    <div className='leeftijden' id="leeftijden">
        <h1>Leeftijden</h1>
        <div className='leeftijden-container'>
          <LeeftijdBox name='Rubskes' img="/public/images/rubskesLogo.png" startAge="3de kleuterklas" endAge="1ste leerjaar"/>
          <LeeftijdBox name='Leeuwkes' img='/public/images/leeuwkesLogo.png' startAge="2de leerjaar" endAge="3de leerjaar"/>
          <LeeftijdBox name='Jonknapen' img='/public/images/jongknapenLogo.png' startAge="4de leerjaar" endAge="6de leerjaar"/>
          <LeeftijdBox name='Knapen' img='/public/images/knapenLogo.png' startAge="1ste middelbaar" endAge="2de middelbaar"/>
          <LeeftijdBox name='Jonghernieuwers' img='/public/images/jonghernieuwersLogo.png' startAge="3ste middelbaar" endAge="4de middelbaar"/>
          <LeeftijdBox name='Hernieuwers' img='/public/images/hernieuwersLogo.png' startAge="5ste middelbaar" endAge="6de middelbaar"/>
        </div>
      </div>
  )
}

export default Leeftijden