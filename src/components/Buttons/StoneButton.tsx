import { NavLink } from 'react-router-dom';

export function StoneButton() {
  return (
    <NavLink to="/stone">
      <button
        type="button"
        className={
          'mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-purple-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 disabled:pointer-events-none disabled:opacity-50 sm:w-auto'
        }
      >
        Dowiedz się więcej
      </button>
    </NavLink>
  );
}
