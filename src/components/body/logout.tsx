import React, { useEffect } from 'react'
import { Navigate  } from 'react-router-dom'

const Logout = () => {

useEffect(() => {
  sessionStorage.removeItem('user')
}, [])


  return (
    <Navigate to={'/'}/>
  )
}

export default Logout