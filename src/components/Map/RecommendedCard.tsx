export const recommendedCards = [
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <img
          src="/rituals/ico1.svg"
          alt="wind icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Jezioro Błędno',
    description:
      'Starożytne jezioro o wyjątkowych właściwościach uzdrawiających',
    length: '14',
    statusType: 'łatwy',
  },
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <img
          src="/rituals/ico1.svg"
          alt="wind icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Źródło Uzdrowienia',
    description: 'Źródło o właściwościach leczniczych',
    length: '9',
    statusType: 'łatwy',
  },
];

export function RecommendedCard({
  icon,
  title,
  description,
  length,
  statusType,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  length: string;
  statusType: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-700/40">
      <div className="flex items-start space-x-4">
        {icon}
        <div className="flex-1">
          <div className="mb-2 flex items-center space-x-2">
            <h3 className="text-lg font-medium text-blue-100">{title}</h3>
          </div>
          <p className="mb-3 text-left text-sm text-blue-300/80">
            {description}
          </p>
          <div className="mb-4 flex items-center space-x-4">
            <span className="flex items-center gap-1 text-sm text-blue-300">
              <img
                src="/path/achievements/ico3.svg"
                alt="little map point icon"
                className="h-[14px] w-[14px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              {length} km
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
          </div>
          <div className="flex space-x-3">
            <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium text-white outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
              Zaplanuj wizytę
            </button>
            <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
              Szczegóły
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
