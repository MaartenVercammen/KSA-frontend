import React from 'react'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <nav>
      <HashLink smooth to="#top">KSA Aarschot</HashLink>
      <ul>
          <li><HashLink smooth to="#news" scroll={scrollWithOffset}>News</HashLink></li>
          <li><HashLink smooth to="#braggel" scroll={scrollWithOffset}>Braggel</HashLink></li>
          <li><HashLink smooth to="#leeftijden" scroll={scrollWithOffset}>Leeftijden</HashLink></li>
          <li><HashLink smooth to="#contact" scroll={scrollWithOffset}>Contact</HashLink></li>
          <li><HashLink smooth to="#contact" scroll={scrollWithOffset}>Contact</HashLink></li>
      </ul>
    </nav>
  )
}

export default NavBar