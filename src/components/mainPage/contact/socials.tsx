import React from 'react';
import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';
const Socials = () => {
	return (
		<div>
			<h2>Volg ons op onze socials</h2>
			<p>
				<a href="https://www.facebook.com/KSA.Aarschot">
					<Facebook className="fa fa-facebook" />
				</a>
				<a href="https://www.instagram.com/ksa_aarschot/">
					<Instagram className="fa fa-instagram" />
				</a>
			</p>
		</div>
	);
};

export default Socials;
