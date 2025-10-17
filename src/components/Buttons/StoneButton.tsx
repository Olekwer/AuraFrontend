import { NavLink } from 'react-router-dom';

export function StoneButton() {
  return (
    <NavLink to="/stone">
      <button
        type="button"
        className={
          "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-3 inline-flex h-auto shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        }
      >
        Dowiedz się więcej
      </button>
    </NavLink>
  );
}
