import React from 'react'
import LeeftijdBox from './leeftijdBox'

const Leeftijden = () => {
  return (
    <div className='leeftijden'>
        <h2>Leeftijden</h2>
        <ul>
            <li><LeeftijdBox name='Rubskes'/></li>
            <li><LeeftijdBox name='Leeuwkes'/></li>
            <li><LeeftijdBox name='Jonknapen'/></li>
            <li><LeeftijdBox name='Knapen'/></li>
            <li><LeeftijdBox name='Jonghernieuwers'/></li>
            <li><LeeftijdBox name='Hernieuwers'/></li>
        </ul>
    </div>
  )
}

export default Leeftijden