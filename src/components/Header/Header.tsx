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
  const activeClass = 'px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap flex items-center space-x-2 text-blue-300 bg-blue-600 text-white';

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-blue-800/30 px-4 py-3 flex items-center">
      <div className="flex-1" />

      <div className="flex gap-2 justify-center flex-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Strefa Mocy
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Mapa Miejsc Mocy
        </NavLink>
        <NavLink
          to="/rituals"
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Rytuały i Dźwięki
        </NavLink>
        <NavLink
          to="/napary"
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Napary i Maści
        </NavLink>
        <NavLink
          to="/stone"
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Kamienie
        </NavLink>
        <NavLink
          to="/path"
          className={({ isActive }) =>
            isActive ? activeClass : baseClass
          }
        >
          Moja Ścieżka
        </NavLink>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <NavLink
          to="/profile"
          className="grid grid-cols-2 gap-x-4 cursor-pointer text-blue-400/60 text-xs"
        >
          <div>{firstName || '-'}</div>
          <div>{lastName || '-'}</div>
          <div>{zodiacSign || '-'}</div>
          <div>{element || '-'}</div>
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 has-[>svg]:px-3 bg-slate-800/50 border-blue-700/30 text-blue-200 hover:bg-slate-700/50 text-sm px-3 py-2 h-auto"
          aria-label="Nowy quiz"
          onClick={() => alert('Nowy quiz')}
        >
          Nowy quiz
        </button>
      </div>
    </header>
  );
}
