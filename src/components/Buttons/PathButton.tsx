import { NavLink } from 'react-router-dom';

export function PathButton() {
  return (
    <NavLink to="/path">
      <button
        type="button"
        className={
          'mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-pink-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-pink-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 disabled:pointer-events-none disabled:opacity-50 sm:w-auto'
        }
      >
        Moja ścieżka
      </button>
    </NavLink>
  );
}
