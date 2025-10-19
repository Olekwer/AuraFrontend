export const cards = [
  {
    icon: (
      <div>
        <img
          src="/infusions/ico1.svg"
          alt="drop icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Napar z melisy i lawendy',
    description: 'Kojący napar na spokój umysłu i emocjonalną równowagę',
    time: '5',
    statusType: 'łatwy',
    dayPart: 'wieczór',
    benefits: '',
  },
];

export function Card({
  icon,
  title,
  description,
  time,
  dayPart,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  statusType: string;
  dayPart: string;
  benefits: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-700/40">
        <div className="mb-4 flex items-start space-x-4">
          <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
            {icon}
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center space-x-2">
              <h3 className="text-lg font-medium text-blue-100">{title}</h3>
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-primary/90 bg-gold-500/20 text-gold-300 border-gold-500/30 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                Dla Ciebie
              </span>
            </div>
            <p className="mb-3 text-sm text-blue-300/80">{description}</p>
            <div className="mb-4 flex items-center space-x-4">
              <span className="flex items-center text-sm text-blue-300">
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
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                łatwy
              </span>
              <span className="flex items-center text-sm text-blue-400/60">
                <img
                  src="/path/achievements/ico8.svg"
                  alt="little moon icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter: 'invert(100%) brightness(100%)',
                  }}
                />
                {dayPart}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-blue-200">Korzyści:</h4>
          <div className="flex flex-wrap gap-1">
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              Uspokaja nerwy
            </span>
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              Poprawia sen
            </span>
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              Łagodzi lęk
            </span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-green-600 px-3 text-sm font-medium outline-none transition-all hover:bg-green-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
            <img
              src="/infusions/little-ico2.svg"
              alt="little moon icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Zobacz przepis
          </button>
          <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
            <img
              src="/infusions/little-ico3.svg"
              alt="little moon icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Dodaj do ulubionych
          </button>
        </div>
      </div>
    </div>
  );
}
