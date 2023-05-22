import React, { useRef, useEffect } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY as string;

type MapProps = {
 lat: number;
 lng: number;
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
 const mapContainerRef = useRef<HTMLDivElement>(null);
 const mapRef = useRef<MapboxMap | null>(null);
 const markerRef = useRef<mapboxgl.Marker | null>(null);

 useEffect(() => {
  mapRef.current = new mapboxgl.Map({
   container: mapContainerRef.current!,
   style: 'mapbox://styles/mapbox/streets-v12',
   center: [lng, lat],
   zoom: 12,
  });

  mapRef.current.on('load', () => {
   // Create a marker and add it to the map
   markerRef.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(mapRef.current!);
  });

  return () => {
   mapRef.current?.remove();
  };
 }, []);

 return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
}

export default Map;