import { useState } from 'react';

const goalsCards = [
  {
    icon: '/stone/appointment/ico1.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-600 to-black flex items-center justify-center mb-4',
    title: 'Ochrona',
    description: 'Kamienie chroniące przed negatywną energią',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
  {
    icon: '/stone/appointment/ico2.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center mb-4',
    title: 'Miłość',
    description: 'Kamienie przyciągające i wzmacniające miłość',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
  {
    icon: '/stone/appointment/ico3.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold-900 to-yellow-500 flex items-center justify-center mb-4',
    title: 'Sukces',
    description: 'Kamienie wspierające osiągnięcie celów',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
  {
    icon: '/stone/appointment/ico4.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center mb-4',
    title: 'Uzdrowienie',
    description: 'Kamienie wspierające proces uzdrowienia',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
  {
    icon: '/stone/appointment/ico5.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center mb-4',
    title: 'Intuicja',
    description: 'Kamienie otwierające trzecie oko',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
  {
    icon: '/stone/appointment/ico6.svg',
    iconClassName: 'w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-4',
    title: 'Energia',
    description: 'Kamienie zwiększające życiową energię',
    count: '3 kamieni',
    countClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
  },
];

function GoalsCard({
  icon,
  iconClassName,
  title,
  description,
  count,
  countClassName,
  isSelected,
  onClick,
}: {
  icon: string;
  iconClassName: string;
  title: string;
  description: string;
  count: string;
  countClassName: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
        isSelected
          ? 'scale-105 border-blue-400/50 bg-slate-700/60 shadow-lg'
          : 'shadow-none'
      }`}
      aria-pressed={isSelected}
    >
      <div className={iconClassName}>
      <img src={icon} alt={title} className="mx-auto" style={{ filter: 'invert(100%) brightness(100%)' }} />
      </div>
      <h3 className="mb-2 text-center text-xl font-medium text-blue-100">
        {title}
      </h3>
      <p className="mb-4 text-center text-sm text-blue-300/80">{description}</p>
      <div className="flex justify-center">
        <span
          className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] ${countClassName}`}
        >
          {count}
        </span>
      </div>
    </button>
  );
}

export function AppointmentTab() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="mb-6 text-left text-2xl font-medium text-blue-100">
        Kamienie według celów
      </h2>

      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {goalsCards.map(
          ({ icon, iconClassName, title, description, count, countClassName }, i) => (
            <GoalsCard
              key={title}
              icon={icon}
              iconClassName={iconClassName}
              title={title}
              description={description}
              count={count}
              countClassName={countClassName}
              isSelected={selectedIndex === i}
              onClick={() => handleToggle(i)}
            />
          ),
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="mx-auto max-w-7xl rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8 text-blue-100 transition-all"
          style={{ maxWidth: '1120px' }}
          aria-live="polite"
        >
          <h3 className="mb-4 text-left text-xl font-medium text-blue-100">
            Kamienie dla celu: {goalsCards[selectedIndex].title}
          </h3>
          <p className="mb-6 max-w-3xl text-left text-sm text-blue-300/80">
            Wybrane kamienie, które najlepiej wspierają ten cel duchowy.
          </p>
          <button
            type="button"
            className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-purple-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-purple-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
          >
            
            <img src='/stone/appointment/download-icon.svg' alt='download-icon' style={{ filter: 'invert(100%) brightness(100%)' }} />Pobierz przewodnik PDF
          </button>
        </div>
      )}
    </div>
  );
}
