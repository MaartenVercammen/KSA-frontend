import React, { useEffect } from 'react'
import Body from './body/body'
import Footer from './footer/footer'
import Header from './header/header'
import NavBar from './header/navbar'
import service from '../service/userservice'
import { AxiosResponse } from 'axios'

const Index = () => {

  useEffect(() => {
    getUsers()
  
  }, [])

  const getUsers =async () => {
    const res: AxiosResponse = await service.getUsers()
    console.log(res.data)
  }
  

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