import React from 'react'
import { leidingNummer } from '../../types/index'
import Footer from '../footer/footer';
import NavBar from '../header/navbar';

type Props = {
    nummers: Array<leidingNummer>
    groep: string;
}

const LeidingNummes = ({nummers, groep}: Props) => {
  return (
    <>
    <div className='leidingnummers'>
      <div className='groep-container'>
        <h1 className='groep'>{groep}</h1>
        <img src={'/images/'+groep.toLocaleLowerCase()+"Logo.png"}/>
      </div>
      <NavBar/>
      <div className='groep-data'>
          <ul>
              {nummers && nummers.map((value: leidingNummer, index: number) => (
                <div className="card">
                  <img src={value.img} alt="Avatar"/>
                  <div className="card-container">
                    <h3><b>{value.naam}</b></h3>
                    <p>tel:<a href={'tel:' + value.number}>{value.number}</a></p>
                  </div>
               </div>
              ))}
              
          </ul>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default LeidingNummes