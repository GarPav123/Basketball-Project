// components/MapG.tsx
import { useEffect, useRef } from 'react';

interface MapGProps {
  apiKey: string;
}

const MapG: React.FC<MapGProps> = ({ apiKey }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Load the Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the map
      const map = new window.google.maps.Map(mapContainerRef.current!, {
        center: { lat: 12.894150115187488, lng: 77.61643614602767 },
        zoom: 13,
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: 12.894150115187488, lng: 77.61643614602767 },
        map,
        title: 'ChiSquareX Technologies',
      });
    };

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return <div ref={mapContainerRef} className="w-full h-96" />;
};

export default MapG;
