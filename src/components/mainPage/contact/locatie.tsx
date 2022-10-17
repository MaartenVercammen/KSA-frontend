import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Locatie() {
  const key: string = process.env.GOOGLE_KEY === undefined ? '' : process.env.GOOGLE_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });
  return (
    <div className="locatie">
      <h3>Waar kan je ons vinden?</h3>
      <p>
        Adres:
        <a href="https://www.google.com/maps/place/Ksa+Aarschot/@50.985566,4.8416534,17z/data=!3m1!4b1!4m5!3m4!1s0x47c143501a3e8e41:0x3b8001192ca15fa1!8m2!3d50.9855579!4d4.8461356">
          Bekaflaan 65 3200 Aarschot
        </a>
      </p>

      {isLoaded && (
      <div className="map">
        <GoogleMap
          zoom={15}
          center={{ lat: 50.98597085607057, lng: 4.844754649000939 }}
          mapContainerClassName="map-container"
        >
          <Marker position={{ lat: 50.98597085607057, lng: 4.844754649000939 }} title="KSA aarschot BekafLaan 65 3200 Aarschot" />
        </GoogleMap>
      </div>
      )}
    </div>
  );
}

export default Locatie;
