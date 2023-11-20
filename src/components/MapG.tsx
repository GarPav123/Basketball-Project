// Example.tsx
import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapG: React.FC = () => {
  useEffect(() => {
    // Initialize Google Maps API Loader
    const loader = new Loader({
      apiKey: 'AIzaSyAC5FuV9NpFtPZUF1Kqvk166v1Q54Y4ErM',
      version: 'weekly', // or specify the version you need
    });

    // Load the Google Maps API
    loader.load().then((google) => {
      // Now you can use the Google Maps API
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement, // Use type assertion here
        {
          center: { lat: 12.893252474927126, lng: 77.6163086962132 },
          zoom: 8,
        }
      );
    });
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default MapG;
