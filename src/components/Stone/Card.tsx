export const cards = [
  {
    icon: (
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-200">
        <img alt="Kryształ górski" className="h-7 w-7" src="/stone/ico1.svg" style={{ filter: 'invert(100%) brightness(100%)' }} />
      </div>
    ),
    title: 'Kryształ górski',
    type: 'bardzo częsty',
    typeClassName: 'bg-gray-500/20 border border-gray-500/30 text-gray-300',
    description:
      'Uniwersalny wzmacniacz energii, oczyszcza i harmonizuje wszystkie czakry',
  },
  {
    icon: (
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-black">
        <img alt="Czarny turmalin" className="h-7 w-7" src="/stone/ico2.svg" style={{ filter: 'invert(100%) brightness(100%)' }} />
      </div>
    ),
    title: 'Czarny turmalin',
    type: 'częsty',
    typeClassName: 'bg-green-500/20 border border-green-500/30 text-green-300',
    description: 'Najpotężniejszy kamień ochronny, odpycha negatywną energię',
  },
  {
    icon: (
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-rose-400">
        <img alt="Różowy kwarc" className="h-7 w-7" src="/stone/ico3.svg" style={{ filter: 'invert(100%) brightness(100%)' }} />
      </div>
    ),
    title: 'Różowy kwarc',
    type: 'częsty',
    typeClassName: 'bg-green-500/20 border border-green-500/30 text-green-300',
    description:
      'Kamień bezwarunkowej miłości, otwiera serce na głębokie uzdrowienie',
  },
  {
    icon: (
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-600 to-blue-500">
        <img alt="Labradoryt" className="h-7 w-7" src="/stone/ico4.svg" style={{ filter: 'invert(100%) brightness(100%)' }} />
      </div>
    ),
    title: 'Labradoryt',
    type: 'rzadki',
    typeClassName: 'bg-blue-500/20 border border-blue-500/30 text-blue-300',
    description: 'Kamień magii i transformacji, wzmacnia zdolności psychiczne',
  },
];

export function Card({
  icon,
  title,
  type,
  typeClassName,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  type: string;
  typeClassName: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-center text-blue-100">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="mb-8 text-lg font-medium text-blue-100">{title}</h3>
      <div className="mb-10 flex justify-center">
        <span
          className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] ${typeClassName}`}
        >
          {type}
        </span>
      </div>
      <p className="mb-10 text-sm text-blue-300/60">{description}</p>
      <button
        type="button"
        className="focus-visible:border-ring focus-visible:ring-ring/50 mb-2 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 py-2 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Zobacz właściwości
      </button>
      <button
        type="button"
        className="dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <img alt="add-icon" className="h-[14px] w-[14px]" src="/add-icon.svg" style={{ filter: 'invert(100%) brightness(100%)' }} />Dodaj
      </button>
    </div>
  );
}
