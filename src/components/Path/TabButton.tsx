export function TabButton({
  children,
  isActive,
  onClick,
  activeClassName = 'bg-blue-600',
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  activeClassName?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
        isActive ? activeClassName + ' text-white' : 'text-blue-300 hover:bg-blue-700/40'
      }`}
    >
      {children}
    </button>
  );
}