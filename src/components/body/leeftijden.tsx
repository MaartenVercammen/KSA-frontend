import React from 'react'
import LeeftijdBox from './leeftijdBox'
import rubskesLogo from '../../public/images/rubskesLogo.png'
import leeuwkesLogo from '../../public/images/leeuwkesLogo.png'
import jongknapenLogo from '../../public/images/jongknapenLogo.png'
import KnapenLogo from '../../public/images/knapenLogo.png'
import jonghernieuwersLogo from '../../public/images/jonghernieuwersLogo.png'
import HernieuwersLogo from '../../public/images/HernieuwersLogo.png'




const Leeftijden = () => {
  return (
    <div className='leeftijden' id="leeftijden">
        <h2>Leeftijden</h2>
        <div className='leeftijden-container'>
          <LeeftijdBox name='Rubskes' img={rubskesLogo}/>
          <LeeftijdBox name='Leeuwkes' img={leeuwkesLogo}/>
          <LeeftijdBox name='Jonknapen' img={jongknapenLogo}/>
          <LeeftijdBox name='Knapen' img={KnapenLogo}/>
          <LeeftijdBox name='Jonghernieuwers' img={jonghernieuwersLogo}/>
          <LeeftijdBox name='Hernieuwers' img={HernieuwersLogo}/>
        </div>
      </div>
  )
}

export default Leeftijden