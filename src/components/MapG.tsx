"use client"
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const MapG: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current) {
        const map = L.map('map').setView([12.894150115187488, 77.61643614602767], 13);
        mapRef.current = map;

        
        
        const handleResize = () => {
          mapRef.current?.invalidateSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    };

    // Ensure Leaflet is loaded before initializing the map
    import('leaflet').then((L) => {
      initializeMap();
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="map" className="w-full h-96" style={{ zIndex: 0 }} />;
};

export default MapG;
