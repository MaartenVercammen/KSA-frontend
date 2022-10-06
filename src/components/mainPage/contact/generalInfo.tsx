import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import Facebook from '../../../icons/facebook.svg';
import Instagram from '../../../icons/instagram.svg';

function GeneralInfo() {
  const key: string = process.env.GOOGLE_KEY === undefined ? '' : process.env.GOOGLE_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  return (
    <div className="generalinfo">
      <div>
        <h2>KSA aarschot</h2>
        <p>
          Elke zaterdag vanaf 14.00u, voor jongens en meisjes vanaf de 3de
          kleuterklas.
        </p>
      </div>
      <div>
        <h2>Vragen? mail ons</h2>
        <p>
          <a href="mailto:bonds@ksa-aarschot.be">Bonds@ksa-aarschot.be</a>
        </p>
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
      </div>
      <div>
        <h3>Locatie:</h3>
        <p>
          <a href="https://www.google.com/maps/place/Ksa+Aarschot/@50.985566,4.8416534,17z/data=!3m1!4b1!4m5!3m4!1s0x47c143501a3e8e41:0x3b8001192ca15fa1!8m2!3d50.9855579!4d4.8461356">
            Bekaflaan 65 3200 Aarschot
          </a>
        </p>

        {isLoaded && (
          <div className="map">
            <GoogleMap
              zoom={15}
              center={{ lat: 50.985687650951384, lng: 4.84617028489699 }}
              mapContainerClassName="map-container"
            >
              <Marker
                position={{ lat: 50.985687650951384, lng: 4.84617028489699 }}
              />
            </GoogleMap>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;
