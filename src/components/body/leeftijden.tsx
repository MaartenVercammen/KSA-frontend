import React from 'react'
import LeeftijdBox from './leeftijdBox'
import rubskesLogo from '../../public/images/rubskesLogo.png'
import leeuwkesLogo from '../../public/images/leeuwkesLogo.png'
import jongknapenLogo from '../../public/images/jongknapenLogo.png'
import KnapenLogo from '../../public/images/knapenLogo.png'
import jonghernieuwersLogo from '../../public/images/jonghernieuwersLogo.png'
import HernieuwersLogo from '../../public/images/hernieuwersLogo.png'




const Leeftijden = () => {
  return (
    <div className='leeftijden' id="leeftijden">
        <h1>Leeftijden</h1>
        <div className='leeftijden-container'>
          <LeeftijdBox name='Rubskes' img={rubskesLogo} startAge="3de kleuterklas" endAge="1ste leerjaar"/>
          <LeeftijdBox name='Leeuwkes' img={leeuwkesLogo} startAge="2de leerjaar" endAge="3de leerjaar"/>
          <LeeftijdBox name='Jonknapen' img={jongknapenLogo} startAge="4de leerjaar" endAge="6de leerjaar"/>
          <LeeftijdBox name='Knapen' img={KnapenLogo} startAge="1ste middelbaar" endAge="2de middelbaar"/>
          <LeeftijdBox name='Jonghernieuwers' img={jonghernieuwersLogo} startAge="3ste middelbaar" endAge="4de middelbaar"/>
          <LeeftijdBox name='Hernieuwers' img={HernieuwersLogo} startAge="5ste middelbaar" endAge="6de middelbaar"/>
        </div>
      </div>
  )
}

export default Leeftijden