import React, { useEffect } from 'react'
import Body from './body/body'
import Footer from './footer/footer'
import Header from './header/header'
import NavBar from './header/navbar'
import UserService from '../service/userservice'
import { AxiosResponse } from 'axios'

const Index = () => {

  return (
    <div className='page'>
        <Header/>
        <NavBar/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Index