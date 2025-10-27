import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import markersData from '../../pages/Map/Map.json';
import { TabButton } from '../Common/TabButton';
import { recommendedCards, RecommendedCard } from './RecommendedCard';
//import { otherCards, OtherCard } from './OtherCard';
import { useAuthStore } from '../../store/auth';
import { cards, Card } from './Card';

type SimpleDashboardResponse = {
  user: {
    id: string;
    email: string;
    zodiacSign: string;
    element: string;
  };
  powerPlace: {
    name: string;
    distance: number;
  };
  powerStone: {
    name: string;
    description: string;
  };
  progress: {
    ritualsCompleted: number;
  };
};

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

const icons = [
  '/rituals/additionalRitualCard/ico2.svg',
  '/rituals/ico1.svg',
  '/path/achievements/ico1.svg',
  '/rituals/additionalRitualCard/ico1.svg',
  '/stone/ico1.svg',
];

const iconBgClasses = [
  'relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-brown-500 shadow-lg flex items-center justify-center',
  'relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center ring-2 ring-gold-400',
  'relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-brown-500 shadow-lg flex items-center justify-center',
  'relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg flex items-center justify-center',
  'relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center',
];

export function Info() {
  const [tab, setTab] = useState<'Mapa' | 'Lista'>('Mapa');

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<Record<string, mapboxgl.Marker>>({});
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const [markers] = useState<MarkerData[]>(
    markersData.map((m) => ({
      id: m.id,
      title: m.title,
      coords: [m.coords[1], m.coords[0]] as [number, number],
      color: m.color,
    })),
  );

  const [simpleDashboard, setSimpleDashboard] =
    useState<SimpleDashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [selectedPowerPlace, setSelectedPowerPlace] = useState<boolean>(false);

  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const token = useAuthStore((s) => s.token);

  const initMap = () => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: powerPlaceCenter,
      zoom: 12,
    });

    mapRef.current = map;

    popupRef.current = new mapboxgl.Popup({ offset: 25, closeOnMove: true });

    const onLoad = () => {
      map.resize();
      requestAnimationFrame(() => map.resize());
      renderMarkers();
    };

    map.on('load', onLoad);

    map.on('click', (e) => {
      console.log('Clicked coordinates:', e.lngLat.lng, e.lngLat.lat);
    });

    if (mapContainerRef.current) {
      const ro = new ResizeObserver(() => {
        map.resize();
      });
      ro.observe(mapContainerRef.current);
      resizeObserverRef.current = ro;
    }
  };

  const destroyMap = () => {
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};
    popupRef.current?.remove();
    popupRef.current = null;
    resizeObserverRef.current?.disconnect();
    resizeObserverRef.current = null;
    mapRef.current?.remove();
    mapRef.current = null;
  };

  const renderMarkers = () => {
    const map = mapRef.current;
    if (!map) return;

    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    markers.forEach(({ id, coords, title }, idx) => {
      const el = document.createElement('div');
      el.className = iconBgClasses[idx % iconBgClasses.length];

      el.style.cursor = 'pointer';

      const img = document.createElement('img');
      img.src = icons[idx % icons.length];
      img.alt = title;
      img.style.width = '14px';
      img.style.height = '14px';
      img.style.filter = 'invert(100%) brightness(100%)';
      img.style.borderRadius = '50%';

      el.appendChild(img);

      const marker = new mapboxgl.Marker(el, { anchor: 'center' })
        .setLngLat(coords)
        .addTo(map);

      el.addEventListener('click', (e) => {
        e.stopPropagation();

        if (id === '1') {
          if (selectedPowerPlace) {
            setSelectedPowerPlace(false);
            popupRef.current?.remove();
          } else {
            setSelectedPowerPlace(true);
            popupRef.current?.setLngLat(coords).setText(title).addTo(map);
          }
        } else {
          popupRef.current?.setLngLat(coords).setText(title).addTo(map);
        }
      });
      el.addEventListener('mouseenter', () => {
        popupRef.current?.setLngLat(coords).setText(title).addTo(map);
      });
      el.addEventListener('mouseleave', () => {
        if (!selectedPowerPlace || id !== '1') {
          popupRef.current?.remove();
        }
      });

      markersRef.current[id] = marker;
    });
  };

  useEffect(() => {
    if (tab === 'Mapa') {
      initMap();
    } else {
      destroyMap();
    }

    return () => {
      if (tab === 'Mapa') {
        destroyMap();
      }
    };
  }, [tab]);

  useEffect(() => {
    if (mapRef.current) {
      renderMarkers();
    }
  }, [markers, selectedPowerPlace]);

  useEffect(() => {
    if (!isAuthenticated || !token) {
      setSimpleDashboard(null);
      return;
    }

    const fetchDashboards = async () => {
      try {
        setError(null);
        const res1 = await fetch(
          'https://web-production-3964.up.railway.app/users/simple-dashboard',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          },
        );
        if (!res1.ok) {
          const errorData = await res1.json().catch(() => null);
          throw new Error(
            `Error ${res1.status}: ${errorData?.message ?? res1.statusText}`,
          );
        }
        const data1: SimpleDashboardResponse = await res1.json();
        setSimpleDashboard(data1);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
        setSimpleDashboard(null);
      }
    };

    fetchDashboards();
  }, [isAuthenticated, token]);

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
      {error && (
        <div className="mb-6 w-full rounded border border-red-600 bg-red-900/70 p-4 text-center text-red-300">
          Error: {error}
        </div>
      )}
      {tab === 'Mapa' && (
        <>
          <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8">
            <div ref={mapContainerRef} className="relative h-96 w-full">
              <div className="right-bottom-window space-y-2 rounded-lg bg-slate-900/80 p-3 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-[10.5px]">
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-gold-200">
                    <img
                      src="/path/achievements/ico1.svg"
                      alt="star icon"
                      className="h-[7px] w-[7px] filter"
                      style={{
                        filter: 'invert(100%) brightness(100%)',
                      }}
                    />
                  </div>
                  <span className="text-blue-200">Polecane dla Ciebie</span>
                </div>
                <div className="flex items-center space-x-2 text-[10.5px]">
                  <div className="h-3 w-3 rounded-full bg-green-400">
                    <div className="m-1 h-1 w-1 rounded-full bg-white"></div>
                  </div>
                  <span className="text-blue-200">Odwiedzone</span>
                </div>
              </div>
              <div className="left-top-window rounded-lg bg-slate-900/80 p-3 backdrop-blur-sm">
                <p className="flex items-center gap-1 text-[10.5px] text-blue-200">
                  <img
                    src="/map/ico2.svg"
                    alt="plane icon"
                    className="h-[10.5px] w-[10.5px] filter"
                    style={{
                      filter:
                        'invert(80%) sepia(15%) saturate(1200%) hue-rotate(180deg) brightness(100%) contrast(90%)',
                    }}
                  />
                  Kliknij na miejsce aby zobaczyć szczegóły
                </p>
              </div>
            </div>
          </div>
          {selectedPowerPlace && simpleDashboard && (
            <div className="mt-6">
              <Card
                title={simpleDashboard.powerPlace.name}
                length={simpleDashboard.powerPlace.distance.toString()}
                difficulty={cards[0].difficulty}
                element={cards[0].element}
                description={cards[0].description}
                icon={cards[0].icon}
                natureDescription={cards[0].natureDescription}
                spiritualSignificance={cards[0].spiritualSignificance}
                bestTime={cards[0].bestTime}
                ritual={cards[0].ritual}
              />
            </div>
          )}
        </>
      )}

      {tab === 'Lista' && (
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-medium text-blue-100">
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
              {simpleDashboard && (
                <RecommendedCard
                  title={simpleDashboard.powerPlace.name}
                  length={simpleDashboard.powerPlace.distance.toString()}
                  icon={recommendedCards[0].icon}
                  description={recommendedCards[0].description}
                  statusType={recommendedCards[0].statusType}
                />
              )}

              {/*
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
              */}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-left text-2xl font-medium text-blue-100">
              Inne miejsca mocy
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/*
              {otherCards.map(({ icon, title, length, description }, idx) => (
                <OtherCard
                  key={idx}
                  icon={icon}
                  title={title}
                  length={length}
                  description={description}
                />
              ))}
              */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
