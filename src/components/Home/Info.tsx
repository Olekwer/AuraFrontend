import { useRef, useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { MapButton } from '../Buttons/MapButton';
import { StoneButton } from '../Buttons/StoneButton';
import { PathButton } from '../Buttons/PathButton';

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

type EnergyDashboardResponse = {
  date: {
    dayOfWeek: string;
    fullDate: string;
  };
  energy: {
    level: number;
    percentage: number;
    message: string;
  };
  moon: {
    phase: string;
    description: string;
    message: string;
  };
  ritual: {
    name: string;
    message: string;
  };
  weeklyInsight: {
    text: string;
  };
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(90deg, ${color1}, ${color2})`;
}

export function Info() {
  const [rippling, setRippling] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const [simpleDashboard, setSimpleDashboard] =
    useState<SimpleDashboardResponse | null>(null);
  const [energyDashboard, setEnergyDashboard] =
    useState<EnergyDashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gradients, setGradients] = useState<string[]>([]);
  const ANIM_MS = 600;

  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  // const email = useAuthStore((s) => s.email);
  // const firstName = useAuthStore((s) => s.firstName ?? '');
  // const lastName = useAuthStore((s) => s.lastName ?? '');
  const zodiacSign = useAuthStore((s) => s.zodiacSign ?? '');
  const element = useAuthStore((s) => s.element ?? '');
  const isPremium = useAuthStore((s) => s.isPremium ?? false);
  const token = useAuthStore((s) => s.token);

  // const userName = useMemo(() => email?.split('@')[0] ?? 'user', [email]);

  const handleClick = () => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = Math.max(centerX, window.innerWidth - centerX);
    const dy = Math.max(centerY, window.innerHeight - centerY);
    const maxRadius = Math.sqrt(dx * dx + dy * dy);

    btn.style.setProperty('--ripple-radius', `${Math.ceil(maxRadius)}px`);
    btn.style.setProperty('--ripple-window-x', `${centerX}px`);
    btn.style.setProperty('--ripple-window-y', `${centerY}px`);

    setRippling(true);

    setTimeout(() => {
      navigate('/auth');
    }, ANIM_MS);
  };

  const handleAnimationEnd = () => {
    setRippling(false);
    const btn = btnRef.current;
    if (btn) {
      btn.style.removeProperty('--ripple-radius');
      btn.style.removeProperty('--ripple-window-x');
      btn.style.removeProperty('--ripple-window-y');
    }
  };

  useEffect(() => {
    const count = 8;
    const generated = Array(count)
      .fill(0)
      .map(() => getRandomGradient());
    setGradients(generated);
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !token) {
      setSimpleDashboard(null);
      setEnergyDashboard(null);
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

        const res2 = await fetch(
          'https://web-production-3964.up.railway.app/users/energy-dashboard',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          },
        );
        if (!res2.ok) {
          const errorData = await res2.json().catch(() => null);
          throw new Error(
            `Error ${res2.status}: ${errorData?.message ?? res2.statusText}`,
          );
        }
        const data2: EnergyDashboardResponse = await res2.json();
        setEnergyDashboard(data2);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
        setSimpleDashboard(null);
        setEnergyDashboard(null);
      }
    };

    fetchDashboards();
  }, [isAuthenticated, token]);

  if (!isAuthenticated) {
    return (
      <div className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center px-4">
        <h1 className="mb-4 text-2xl font-bold text-blue-100">Home Page</h1>
        <p className="mb-6 text-blue-200">Welcome to the Home page!</p>

        <button
          ref={btnRef}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
          className={
            'home-button relative h-auto overflow-visible rounded-xl border border-blue-700/30 bg-slate-800/50 px-3 py-2 text-sm text-blue-200 hover:bg-slate-700/50 hover:underline ' +
            (rippling ? 'is-rippling' : '')
          }
          type="button"
          aria-label="Start"
        >
          Start
        </button>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-6xl p-4">
      <h1 className="mb-[14px] w-full text-center text-4xl font-medium text-blue-100">
        Witamy w Twojej Strefie Mocy
      </h1>
      <p className="mb-7 text-xl text-blue-300/80">
        Twoja energia ma swoje miejsce. Wejdź na ścieżkę uzdrowienia.
      </p>

      {error && (
        <div className="mb-6 w-full rounded border border-red-600 bg-red-900/70 p-4 text-center text-red-300">
          Error: {error}
        </div>
      )}

      {simpleDashboard && (
        <>
          <div className="mb-6 grid w-full grid-cols-1 gap-6 md:grid-cols-4">
            <NavLink
              to="/profile"
              className="flex min-h-[120px] cursor-pointer flex-col items-start justify-center rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6"
            >
              <div className="flex items-center justify-start space-x-2 mb-2">
                <img
                  src="/path/achievements/ico1.svg"
                  alt="star icon"
                  className="h-[21px] w-[21px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                <h2 className="text-lg font-medium text-blue-100">
                  Twój znak
                </h2>
              </div>
              <div className="text-xl text-blue-300 mb-4">{zodiacSign}</div>
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden bg-gold-900/20 text-gold-200 border-gold-900/30">{element}</span>
            </NavLink>
            <div
              className="gradient-border rounded-xl bg-slate-800/60 from-purple-600 to-pink-600 p-6 text-blue-200"
              style={
                { '--gradient-colors': gradients[0] } as React.CSSProperties & {
                  [key: string]: string;
                }
              }
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-start space-x-2 mb-2">
                  <img
                    src="/ico1.svg"
                    alt="map point icon"
                    className="h-[21px] w-[21px] filter"
                    style={{
                      filter:
                        'invert(30%) sepia(90%) saturate(1200%) hue-rotate(310deg) brightness(110%) contrast(110%)',
                    }}
                  />
                  <h2 className="text-lg font-medium text-blue-100">
                    Punkt mocy
                  </h2>
                </div>

                <div className="text-left text-blue-300">
                  {simpleDashboard.powerPlace.name},{' '}
                  {simpleDashboard.powerPlace.distance} km
                </div>
                <div>
                  <MapButton />
                </div>
              </div>
            </div>

            <div
              className="gradient-border rounded-xl bg-slate-800/60 from-pink-600 to-purple-600 p-6"
              style={
                { '--gradient-colors': gradients[1] } as React.CSSProperties & {
                  [key: string]: string;
                }
              }
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-start space-x-2 mb-2">
                  <img
                    src="/path/achievements/ico4.svg"
                    alt="stone icon"
                    className="h-[21px] w-[21px] filter"
                    style={{
                      filter: 'invert(100%) brightness(100%)',
                    }}
                  />
                  <h2 className="text-lg font-medium text-blue-100">Kamień mocy</h2>
                </div>
                <div className="text-left text-blue-300">
                  {simpleDashboard.powerStone.name} -{' '}
                  {simpleDashboard.powerStone.description}
                </div>
                <div>
                  <StoneButton />
                </div>
              </div>
            </div>

            <div
              className="gradient-border mb-8 flex w-full flex-col justify-center whitespace-pre-line rounded-xl bg-slate-800/60 from-purple-700 via-pink-700 to-purple-700 px-6 py-6"
              style={
                { '--gradient-colors': gradients[2] } as React.CSSProperties & {
                  [key: string]: string;
                }
              }
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-start space-x-2 mb-2">
                  <img
                    src="/stone/ico3.svg"
                    alt="heart icon"
                    className="h-[21px] w-[21px] filter"
                    style={{
                      filter: 'invert(100%) brightness(100%)',
                    }}
                  />
                  <h2 className="text-lg font-medium text-blue-100">Postęp</h2>
                </div>
                <div className="text-blue-300">
                  {simpleDashboard.progress.ritualsCompleted} rytuałów
                  wykonanych
                </div>
                <div>
                  <PathButton />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {energyDashboard && (
        <div className="w-full max-w-6xl">
          <div className="flex min-h-[160px] flex-col justify-center rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="mb-2 text-left text-2xl font-medium text-blue-100">
                  Twoja energia dziś
                </h3>
                <p className="text-blue-300/80">
                  {energyDashboard.date.fullDate}
                </p>
              </div>
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                <img
                  src="/ico5.svg"
                  alt="moon icon"
                  className="h-7 w-7 filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-200">Poziom energii</span>
                  <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-none border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 px-2 py-0.5 text-xs font-medium text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                    {energyDashboard.energy.percentage}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-700/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: `${energyDashboard.energy.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-blue-300/80">
                  {energyDashboard.energy.message}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <img
                    src="/ico5.svg"
                    alt="little moon icon"
                    className="h-[14px] w-[14px] filter"
                    style={{
                      filter: 'invert(100%) brightness(90%)',
                    }}
                  />
                  <span className="text-sm text-blue-200">Faza księżyca</span>
                </div>
                <p className="font-medium text-blue-100">
                  {energyDashboard.moon.phase}
                </p>
                <p className="text-sm text-blue-300/80">
                  {energyDashboard.moon.message}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <img
                    src="/ico6.svg"
                    alt="little star shine icon"
                    className="h-[14px] w-[14px] filter"
                    style={{
                      filter: 'invert(100%) brightness(90%)',
                    }}
                  />
                  <span className="text-sm text-blue-200">Rytuał dnia</span>
                </div>
                <p className="font-medium text-blue-100">
                  {energyDashboard.ritual.name}
                </p>
                <p className="text-sm text-blue-300/80">
                  {energyDashboard.ritual.message}
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-blue-700/30 bg-blue-900/30 p-4 text-left">
              <p className="mb-2 text-left text-sm text-blue-200">
                Tygodniowy wgląd:
              </p>
              <p className="italic text-blue-100">
                "{energyDashboard.weeklyInsight.text}"
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
        <div>
          <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8">
            <div className="mb-6 flex items-center space-x-4">
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                <img
                  src="/path/review/ico1.svg"
                  alt="Icon"
                  className="h-[21px] w-[21px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-100">
                  Twój rytuał
                </h3>
                <p className="text-blue-300/80">Rytuał Oczyszczenia Wodą</p>
              </div>
            </div>
            <div className="mb-6 rounded-lg bg-blue-900/30 p-4">
              <p className="mb-2 text-sm text-blue-200">Następny krok:</p>
              <p className="text-blue-100">
                Przygotuj miejsce, zapal świecę, włącz audio i rozpocznij
                transformację
              </p>
            </div>
            <div className="flex space-x-3 text-white">
              <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                <img
                  src="/ico10.svg"
                  alt="headphones icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                Rozpocznij rytuał
              </button>
              <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                <img
                  src="/ico1.svg"
                  alt="location icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                Lokalizacja
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8">
            <div className="mb-6 flex items-center space-x-4">
              <div className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 p-3">
                <img
                  src="/path/statistics/activities/ico4.svg"
                  alt="big leaf icon"
                  className="h-[21px] w-[21px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-100">
                  Napar uzdrawiający
                </h3>
                <p className="text-blue-300/80">Napar z melisy i lawendy</p>
              </div>
            </div>
            <div className="mb-6 rounded-lg bg-green-900/30 p-4">
              <p className="mb-2 text-sm text-green-200">Przepis:</p>
              <p className="text-green-100">
                Parzyć wieczorem, pić rano przez 7 dni. Najlepszy efekt w
                połączeniu z rytuałem.
              </p>
            </div>
            <div className="flex space-x-3 text-white">
              <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-green-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                <img
                  src="/path/statistics/activities/ico4.svg"
                  alt="little leaf icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                Zobacz przepis
              </button>
              <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                <img
                  src="/path/statistics/activities/ico3.svg"
                  alt="little stone icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                Kamienie
              </button>
            </div>
          </div>
        </div>
      </div>

      {!isPremium && (
        <div>
          <div className="mt-8 flex flex-col gap-6 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8">
            <div className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                <img
                  src="/ico6.svg"
                  alt="big star shine icon"
                  className="h-7 w-7 filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-blue-100">
                Odblokuj Ścieżkę Astrologiczną
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-blue-300/80">
                Pogłęb swoją praktykę o spersonalizowane rytuały astrologiczne,
                przepowiednie lunarne i zaawansowane techniki manifestacji.
              </p>
              <div className="flex justify-center space-x-4 text-white">
                <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-2 text-sm font-medium outline-none transition-all hover:from-purple-700 hover:to-pink-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                  <img
                    src="path/achievements/ico1.svg"
                    alt="little star icon"
                    className="h-[14px] w-[14px] filter"
                    style={{
                      filter: 'invert(100%) brightness(100%)',
                    }}
                  />
                  Ścieżka Astrologiczna +9,99 zł
                </button>
                <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-purple-500/30 px-4 py-2 text-sm font-medium text-purple-300 outline-none transition-all hover:bg-purple-500/10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
                  <img
                    src="/stone/appointment/download-icon.svg"
                    alt="little download icon"
                    className="h-[14px] w-[14px] filter"
                    style={{
                      filter: 'invert(100%) brightness(100%)',
                    }}
                  />
                  Rytuał zdjęcia klątwy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-4 mt-8 text-center">
        <p className="mx-auto text-lg italic text-blue-400/80">
          "Każdy dzień to nowa możliwość połączenia się z energią Ziemi. Twoje
          miejsce mocy czeka."
        </p>
      </div>
    </div>
  );
}
