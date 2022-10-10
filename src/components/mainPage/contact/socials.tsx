import React from 'react';


import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';

import styles from './socials.module.css';

const Socials = () => {
	return (
		<div>
			<h2>Volg ons op onze socials</h2>
			<p>
        <a href="https://www.facebook.com/KSA.Aarschot">
          <Facebook className={`${styles.fa} ${styles['fa-facebook']}`} />
        </a>
        <a href="https://www.instagram.com/ksa_aarschot/">
          <Instagram className={`${styles.fa} ${styles['fa-instagram']}`} />
        </a>
			</p>
		</div>
	);
};

export default Socials;
