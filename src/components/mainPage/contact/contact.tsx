import React from 'react';
import ContactInfo from './contactInfo';
import GeneralInfo from './generalInfo';
import './contact.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <ContactInfo />
        <GeneralInfo />
      </div>
    </div>
  );
}

export default Contact;
