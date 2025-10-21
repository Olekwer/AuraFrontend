export const cards = [
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <img
          src="/rituals/ico1.svg"
          alt="wave icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Rytuał Oczyszczenia Wodą',
    description:
      'Głębokie oczyszczenie emocjonalne przez połączenie z energią wody',
    time: '15',
    statusType: 'łatwy',
    dayPart: 'wschód słońca',
    isFavourite: true,
  },
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-slate-400 to-blue-400 p-3">
        <img
          src="/path/achievements/ico8.svg"
          alt="moon icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Rytuał Pełni Księżyca',
    description: 'Uniwersalny rytuał manifestacji podczas pełni księżyca',
    time: '30',
    statusType: 'średni',
    dayPart: 'pełnia księżyca',
  },
  {
    icon: (
      <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 flex-shrink-0 rounded-full p-3">
        <img
          src="/path/achievements/ico1.svg"
          alt="star icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Balansowanie Czakr',
    description: 'Kompleksowe oczyszczenie i wyrównanie wszystkich czakr',
    time: '35',
    statusType: 'trudny',
    dayPart: 'każda pora',
  },
];

export function Card({
  icon,
  title,
  description,
  time,
  statusType,
  dayPart,
  isFavourite,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  statusType: string;
  dayPart: string;
  isFavourite?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-700/40">
      <div className="mb-4 flex items-start space-x-4">
        {icon}
        <div className="flex-1">
          <div className="mb-2 flex items-center space-x-2">
            <h3 className="text-lg font-medium text-blue-100">{title}</h3>
            {isFavourite && (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-gold-900/30 bg-gold-900/20 px-2 py-0.5 text-xs font-medium text-gold-200 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                Dla Ciebie
              </span>
            )}
          </div>
          <p className="mb-3 text-sm text-blue-300/80 text-left">{description}</p>
          <div className="mb-4 flex items-center space-x-4">
            <span className="flex gap-1 items-center text-sm text-blue-300">
              <img
                src="/infusions/little-ico1.svg"
                alt="little time icon"
                className="h-[14px] w-[14px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              {time} min
            </span>
            {statusType === 'łatwy' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {statusType}
              </span>
            ) : statusType === 'średni' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-yellow-500/30 bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {statusType}
              </span>
            ) : (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-red-500/30 bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {statusType}
              </span>
            )}
            <span className="flex gap-1 items-center text-sm text-blue-400/60">
              {dayPart === 'wschód słońca' ? (
                <img
                  src="/infusions/little-ico4.svg"
                  alt="little sun icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                    opacity: 0.8,
                  }}
                />
              ) : (
                <img
                  src="/path/achievements/ico8.svg"
                  alt="little moon icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                    opacity: 0.8,
                  }}
                />
              )}
              {dayPart}
            </span>
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-white">
          Zobacz instrukcję
        </button>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/ico10.svg"
            alt="headphones icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Audio
        </button>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          Oznacz jako wykonane
        </button>
      </div>
    </div>
  );
}
