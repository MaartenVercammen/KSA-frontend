import React from 'react';
import ContactInfo from './contactInfo';
import GeneralInfo from './generalInfo';
import Locatie from './locatie';

import styles from './contact.module.css';

function Contact() {
	return (
		<div id="contact">
			<h1>Contact</h1>
			<div className={styles['contact-container']}>
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
