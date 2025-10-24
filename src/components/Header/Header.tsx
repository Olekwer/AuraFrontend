import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

export function Header() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const firstName = useAuthStore((s) => s.firstName ?? '');
  const lastName = useAuthStore((s) => s.lastName ?? '');
  const zodiacSign = useAuthStore((s) => s.zodiacSign ?? '');
  const element = useAuthStore((s) => s.element ?? '');
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  if (!isAuthenticated) return null;

  const baseClass =
    'inline-flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap gap-2 text-blue-300 hover:bg-blue-800/30 hover:text-blue-200 z-20';
  const activeClass =
    'inline-flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap gap-2 text-blue-100 bg-blue-600 z-20';

  const handleLogout = () => {
    try {
      logout();
    } catch (err) {
      console.error('Logout failed', err);
    }
    navigate('/auth', { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 box-border w-full overflow-hidden border-b border-blue-800/30 bg-slate-900/80 px-3 py-2.5 backdrop-blur-lg [padding-top:env(safe-area-inset-top)] sm:px-4 sm:py-3">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-2 sm:gap-4">
        <div className="w-[12px] min-w-0 flex-none sm:w-[32px] md:w-[220px] lg:w-[320px] xl:w-[200px]" />

        <nav className="min-w-0 flex-1 sm:flex sm:justify-center">
          <div className="no-scrollbar flex max-w-full gap-1 overflow-x-auto scroll-smooth px-1 sm:gap-2 lg:overflow-x-auto lg:px-1 xl:inline-flex xl:gap-2 xl:overflow-visible xl:px-0">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/stone/appointment/ico4.svg"
                  alt="header star shine icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Strefa Mocy</span>
              </div>
            </NavLink>

            <NavLink
              to="/map"
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/path/achievements/ico3.svg"
                  alt="header map point icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Mapa Miejsc Mocy</span>
              </div>
            </NavLink>

            <NavLink
              to="/rituals"
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/path/review/ico1.svg"
                  alt="header music icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Rytuały i Dźwięki</span>
              </div>
            </NavLink>

            <NavLink
              to="/infusions"
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/path/achievements/ico5.svg"
                  alt="header leaf icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Napary i Maści</span>
              </div>
            </NavLink>

            <NavLink
              to="/stone"
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/path/achievements/ico4.svg"
                  alt="header stone icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Kamienie</span>
              </div>
            </NavLink>

            <NavLink
              to="/path"
              className={({ isActive }) =>
                `${isActive ? activeClass : baseClass} snap-start`
              }
            >
              <div className="flex w-full items-center gap-3">
                <img
                  src="/path/achievements/ico6.svg"
                  alt="header book icon"
                  className="h-[14px] w-[14px] flex-shrink-0 filter"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                <span className="truncate">Moja Ścieżka</span>
              </div>
            </NavLink>
          </div>
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4">
          <NavLink
            to="/profile"
            className="grid max-w-[50%] cursor-pointer grid-cols-2 gap-x-3 truncate text-[10px] leading-4 text-blue-400/70 sm:max-w-none sm:text-xs"
            title={`${firstName || '-'} ${lastName || '-'} ${zodiacSign || '-'} ${element || '-'}`}
          >
            <div className="truncate">{firstName || '-'}</div>
            <div className="truncate">{lastName || '-'}</div>
            <div className="truncate">{zodiacSign || '-'}</div>
            <div className="truncate">{element || '-'}</div>
          </NavLink>

          <button
            type="button"
            className="focus-visible:ring-ring/50 focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-auto max-w-[55%] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-800/50 px-2.5 py-1.5 text-xs font-medium text-blue-200 outline-none transition-all hover:bg-slate-700/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:max-w-none sm:px-3 sm:py-2 sm:text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            aria-label="Nowy quiz"
            onClick={handleLogout}
          >
            <img
              src="header/ico1.svg"
              alt="header user icon"
              className="h-[14px] w-[14px] filter"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Nowy quiz
          </button>
        </div>
      </div>
    </header>
  );
}
