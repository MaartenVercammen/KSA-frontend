import React from 'react';
import ContactInfo from './contactInfo';
import GeneralInfo from './generalInfo';
import './contact.css';
import Locatie from './locatie';

function Contact() {
	return (
		<div className="contact" id="contact">
			<h1>Contact</h1>
			<div className="contact-container">
				<ContactInfo />
				<GeneralInfo />
			</div>
			<div>
				<Locatie />
			</div>
		</div>
	);
}

export default Contact;
