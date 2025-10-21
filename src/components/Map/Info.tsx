import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import markersData from '../../pages/Map/Map.json';
import { TabButton } from '../Common/TabButton';
import { recommendedCards, RecommendedCard } from './RecommendedCard';

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
  const [tab, setTab] = useState<'Mapa' | 'Lista'>('Mapa');

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerObjects = useRef<Record<string, mapboxgl.Marker>>({});
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const [markers] = useState<MarkerData[]>(
    markersData.map((m) => ({
      id: m.id,
      title: m.title,
      coords: [m.coords[1], m.coords[0]] as [number, number],
      color: m.color,
    })),
  );

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: powerPlaceCenter,
      zoom: 12,
    });
    mapRef.current = map;

    map.on('load', () => {
      map.resize();
    });

    map.on('click', (e) => {
      console.log('Clicked coordinates:', e.lngLat.lng, e.lngLat.lat);
    });

    popupRef.current = new mapboxgl.Popup({ offset: 25, closeOnMove: true });

    return () => {
      Object.values(markerObjects.current).forEach((m) => m.remove());
      markerObjects.current = {};
      popupRef.current?.remove();
      popupRef.current = null;
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

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

      const marker = new mapboxgl.Marker(el, { anchor: 'center' })
        .setLngLat(coords)
        .addTo(map);

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        popupRef.current?.setLngLat(coords).setText(title).addTo(map);
      });
      el.addEventListener('mouseenter', () => {
        popupRef.current?.setLngLat(coords).setText(title).addTo(map);
      });
      el.addEventListener('mouseleave', () => {
        popupRef.current?.remove();
      });

      markerObjects.current[id] = marker;
    });
  }, [markers]);

  useEffect(() => {
    const container = mapContainer.current;
    const map = mapRef.current;
    if (!container || !map) return;

    const ro = new ResizeObserver(() => {
      map.resize();
    });
    ro.observe(container);

    return () => {
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (tab !== 'Mapa') return;
    const map = mapRef.current;
    if (!map) return;

    const id = requestAnimationFrame(() => {
      map.resize();
    });
    return () => cancelAnimationFrame(id);
  }, [tab]);

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <TabButton
          isActive={tab === 'Mapa'}
          onClick={() => setTab('Mapa')}
          activeClassName="bg-blue-600"
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico3.svg"
              alt="map point icon"
              className="h-[14px] w-[14px] filter"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Mapa
          </div>
        </TabButton>
        <TabButton
          isActive={tab === 'Lista'}
          onClick={() => setTab('Lista')}
          activeClassName="bg-blue-600"
        >
          <div className="flex items-center gap-4">
            <img
              src="/map/ico1.svg"
              alt="info icon"
              className="h-[14px] w-[14px] filter"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Lista
          </div>
        </TabButton>
      </div>
      <div
        className={
          tab === 'Mapa'
            ? 'relative block'
            : 'pointer-events-none relative block opacity-0 [visibility:hidden]'
        }
      >
        <div ref={mapContainer} className="h-screen w-full" />
      </div>

      {tab === 'Lista' && (
        <div>
          <h2 className="mb-4 flex gap-2 items-center text-2xl font-medium text-blue-100">
            <img
              src="path/achievements/ico1.svg"
              alt="little star icon"
              className="h-[21px] w-[21px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Polecane dla Twojego żywiołu (water)
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {recommendedCards.map(
              ({ icon, title, description, length, statusType }, idx) => (
                <RecommendedCard
                  key={idx}
                  icon={icon}
                  title={title}
                  description={description}
                  length={length}
                  statusType={statusType}
                />
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
