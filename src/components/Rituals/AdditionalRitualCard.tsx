export const additionalRitualCards = [
  {
    icon: (
      <div className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-2 opacity-70">
        <img
          src="/rituals/additionalRitualCard/ico1.svg"
          alt="fire icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Ceremonia Transformacji Płomienia',
    time: '20',
    description: 'Spalenie starych wzorców i przyziemnie nowej energii',
  },
  {
    icon: (
      <div className="to-brown-500 rounded-full bg-gradient-to-r from-green-500 p-2 opacity-70">
        <img
          src="/rituals/additionalRitualCard/ico2.svg"
          alt="tree icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Uziemienie z Kryształami',
    time: '25',
    description: 'Głębokie połączenie z energią Ziemi i stabilizacja',
  },
  {
    icon: (
      <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 opacity-70">
        <img
          src="/rituals/additionalRitualCard/ico3.svg"
          alt="wind icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Medytacja Oddechowa na Wysokości',
    time: '18',
    description: 'Oczyszczenie umysłu i połączenie z wyższymi planami',
  },
];

export function AdditionalRitualCard({
  icon,
  title,
  time,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/20 bg-slate-800/20 p-4 transition-all duration-300 hover:bg-slate-700/30">
      <div className="mb-3 flex items-center space-x-3">
        {icon}
        <div className="text-left">
          <h4 className="font-medium text-blue-100">{title}</h4>
          <span className="text-sm text-blue-400/60">{time} min</span>
        </div>
      </div>
      <p className="mb-3 text-left text-sm text-blue-300/60">{description}</p>
      <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 w-full shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/20 bg-slate-700/30 px-3 text-sm font-medium text-blue-300 outline-none transition-all hover:bg-slate-600/40 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
        Zobacz rytuał
      </button>
    </div>
  );
}
