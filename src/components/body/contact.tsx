import React from 'react'
import ContactFrom from './contactForm'
import ContactInfo from './contactInfo'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <ContactInfo/>
        <ContactFrom/>
    </div>
  )
}

export default Contact