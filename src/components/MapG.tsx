// MapG.tsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapG: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current) {
        const map = L.map('map').setView([12.894150115187488, 77.61643614602767], 13);
        mapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" class="text-blue-500">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Use a custom image as a marker
        const customIcon = L.icon({
          iconUrl: 'https://img.icons8.com/fluency/48/000000/marker.png',
          iconSize: [48, 48],
          iconAnchor: [24, 48],
          popupAnchor: [0, -48],
        });

        L.marker([12.894150115187488, 77.61643614602767], { icon: customIcon })
          .addTo(map)
          .bindPopup('ChiSquareX Technologies')
          .openPopup();
      }
    };

    // Ensure Leaflet is loaded before initializing the map
    if (!L) {
      import('leaflet').then(() => initializeMap());
    } else {
      initializeMap();
    }

    // Handle window resize
    const handleResize = () => {
      mapRef.current?.invalidateSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="map" className="w-full h-96" style={{ zIndex: 0 }} />;
};

export default MapG;
