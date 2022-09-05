import React from 'react'
import image  from '../../public/images/groepsfoto.jpg'
import logo from "../../public/images/logo.png"

const Header = () => {
  return (
    <header>
      <img src={image} className="headerImg" />
      <img src={logo} className="logo"/>
    </header>
  )
}

export default Header