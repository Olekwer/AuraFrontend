import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import markersData from '../../pages/Map/Map.json';

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN ||
  'pk.eyJ1IjoicGlsNzE3MTcxIiwiYSI6ImNtZzUyZTB3czAwNXgybW9qaXZ4a3M2eTAifQ.pPo01RxIbNK_k8qTT7ls4Q';

interface MarkerData {
  id: string;
  title: string;
  coords: [number, number];
  color: string;
}

const powerPlaceCenter: [number, number] = [31.1342, 29.9792];

export function Info() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markerObjects = useRef<Record<string, mapboxgl.Marker>>({});

  const [markers] = useState<MarkerData[]>(
    markersData.map((m) => ({
      id: m.id,
      title: m.title,
      coords: [m.coords[1], m.coords[0]] as [number, number],
      color: m.color,
    })),
  );

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: powerPlaceCenter,
      zoom: 12,
    });

    map.current.on('load', () => {
      map.current?.resize();
    });

    map.current.on('click', (e) => {
      console.log('Clicked coordinates:', e.lngLat.lng, e.lngLat.lat);
    });

    return () => {
      Object.values(markerObjects.current).forEach((m) => m.remove());
      markerObjects.current = {};
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    Object.values(markerObjects.current).forEach((m) => m.remove());
    markerObjects.current = {};

    markers.forEach(({ id, coords, color, title }) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundColor = color;
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
      el.style.cursor = 'pointer';

      const popup = new mapboxgl.Popup({ offset: 25 }).setText(title);

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.setLngLat(coords).addTo(map.current!);
      });

      el.addEventListener('mouseenter', () => {
        popup.setLngLat(coords).addTo(map.current!);
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
      });

      const marker = new mapboxgl.Marker(el, { anchor: 'center' })
        .setLngLat(coords)
        .addTo(map.current!);

      markerObjects.current[id] = marker;
    });
  }, [markers]);

  useEffect(() => {
    if (!mapContainer.current || !map.current) return;

    const resizeObserver = new ResizeObserver(() => {
      map.current?.resize();
    });
    resizeObserver.observe(mapContainer.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={mapContainer} className="h-screen" />;
}
