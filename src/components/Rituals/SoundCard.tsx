export const soundCards = [
  {
    title: 'Fale oceanu 432Hz',
    description: 'Kojące dźwięki oceanu w częstotliwości uzdrawiającej',
    tag: '432Hz',
    time: '15:23',
  },
  {
    title: 'Bębny szamańskie',
    description: 'Rytmiczne bębny do głębokiej transformacji',
    tag: 'Naturalne',
    time: '20:15',
  },
  {
    title: 'Dźwięki lasu 528Hz',
    description: 'Naturalne dźwięki lasu w częstotliwości miłości',
    tag: '528Hz',
    time: '25:30',
  },
  {
    title: 'Wiatr w górach + flety',
    description: 'Górskie wiatry z etherealnymi fletami',
    tag: '741Hz',
    time: '18:45',
  },
  {
    title: 'Medytacja lunarna',
    description: 'Spokojne dźwięki do medytacji przy księżycu',
    tag: '963Hz',
    time: '30:00',
  },
  {
    title: 'Kompletne tony czakr',
    description: 'Pełny zestaw częstotliwości Solfeggio dla czakr',
    tag: 'Solfeggio',
    time: '35:12',
  },
];

export function SoundCard({
  title,
  description,
  tag,
  time,
}: {
  title: string;
  description: string;
  tag: string;
  time: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/20 bg-slate-800/20 p-4 transition-all duration-300 hover:bg-slate-700/30">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-medium text-blue-100">{title}</h4>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-auto shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md p-1 text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/stone/ico3.svg"
            alt="heart icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter:
                'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
              opacity: 0.8,
            }}
          />
        </button>
      </div>
      <p className="mb-3 text-left text-sm text-blue-300/60">{description}</p>
      <div className="mb-3 flex items-center justify-between">
        <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
          {tag}
        </span>
        <span className="text-sm text-blue-400/60">{time}</span>
      </div>
      <div className="flex space-x-2">
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium text-white outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/rituals/soundCard/ico1.svg"
            alt="play icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Odtwórz
        </button>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/stone/appointment/download-icon.svg"
            alt="download icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter:
                'invert(80%) sepia(15%) saturate(1200%) hue-rotate(180deg) brightness(100%) contrast(90%)',
            }}
          />
        </button>
      </div>
    </div>
  );
}
