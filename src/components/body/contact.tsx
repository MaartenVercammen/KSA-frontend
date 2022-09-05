import React from 'react'
import ContactFrom from './contactForm'
import ContactInfo from './contactInfo'

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Contact</h2>
        <ContactInfo/>
        <ContactFrom/>
    </div>
  )
}

export default Contact