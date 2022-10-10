import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import styles from './locatie.module.css';

const Locatie = () => {
	const key: string = process.env.GOOGLE_KEY === undefined ? '' : process.env.GOOGLE_KEY;
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: key
	});
	return (
		<div className={styles.locatie}>
			<h3>Waar kan je ons vinden?</h3>
			<p>
				<a href="https://www.google.com/maps/place/Ksa+Aarschot/@50.985566,4.8416534,17z/data=!3m1!4b1!4m5!3m4!1s0x47c143501a3e8e41:0x3b8001192ca15fa1!8m2!3d50.9855579!4d4.8461356">
					Bekaflaan 65 3200 Aarschot
				</a>
			</p>

			{isLoaded && (
				<div className={styles.map}>
					<GoogleMap
						zoom={15}
						center={{ lat: 50.985687650951384, lng: 4.84617028489699 }}
						mapContainerClassName={styles['map-container']}
					>
						<Marker position={{ lat: 50.985687650951384, lng: 4.84617028489699 }} />
					</GoogleMap>
				</div>
			)}
		</div>
	);
};

export default Locatie;
