import { useAuthStore } from '../../store/auth';
import { NavLink } from 'react-router-dom';

export function Header() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const firstName = useAuthStore((s) => s.firstName ?? '');
  const lastName = useAuthStore((s) => s.lastName ?? '');
  const zodiacSign = useAuthStore((s) => s.zodiacSign ?? '');
  const element = useAuthStore((s) => s.element ?? '');

  if (!isAuthenticated) return null;

  const baseClass =
    'px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex items-center space-x-2 text-blue-300 hover:bg-blue-800/30 hover:text-blue-200';
  const activeClass =
    'px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex items-center space-x-2 text-blue-300 bg-blue-600 text-white';

  return (
    <header className="sticky top-0 z-50 flex items-center border-b border-blue-800/30 bg-slate-900/80 px-4 py-3 backdrop-blur-lg">
      <div className="flex-1" />

      <div className="flex flex-1 justify-center gap-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/stone/appointment/ico4.svg"
              alt="header star shine icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Strefa Mocy
          </div>
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico3.svg"
              alt="header map icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Mapa Miejsc Mocy
          </div>
        </NavLink>
        <NavLink
          to="/rituals"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/review/ico1.svg"
              alt="header music icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Rytuały i Dźwięki
          </div>
        </NavLink>
        <NavLink
          to="/infusions"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico5.svg"
              alt="header leaf icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Napary i Maści
          </div>
        </NavLink>
        <NavLink
          to="/stone"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico5.svg"
              alt="header stone icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Kamienie
          </div>
        </NavLink>
        <NavLink
          to="/path"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico6.svg"
              alt="header book icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Moja Ścieżka
          </div>
        </NavLink>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        <NavLink
          to="/profile"
          className="grid cursor-pointer grid-cols-2 gap-x-4 text-xs text-blue-400/60"
        >
          <div>{firstName || '-'}</div>
          <div>{lastName || '-'}</div>
          <div>{zodiacSign || '-'}</div>
          <div>{element || '-'}</div>
        </NavLink>

        <button
          type="button"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex h-auto shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-800/50 px-3 py-2 text-sm font-medium text-blue-200 outline-none transition-all hover:bg-slate-700/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          aria-label="Nowy quiz"
          onClick={() => alert('Nowy quiz')}
        >
          Nowy quiz
        </button>
      </div>
    </header>
  );
}
