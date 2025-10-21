export const otherCards = [
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
    title: 'Wzgórze Świętego Ducha',
    length: '8',
    description: 'Wzgórze o silnej energii transformacyjnej',
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
    title: 'Las Bukowy',
    length: '12',
    description: 'Pierwotny las o mocy uziemienia',
  },
  {
    icon: (
      <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 opacity-70">
        <img
          src="/stone/ico1.svg"
          alt="mountain icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Szczyt Łysej Góry',
    length: '23',
    description: 'Najwyższy punkt regionu, brama do wyższych wymiarów',
  },
  {
    icon: (
      <div className="to-brown-500 rounded-full bg-gradient-to-r from-green-500 p-2 opacity-70">
        <img
          src="/path/achievements/ico1.svg"
          alt="wind icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Grota Kryształowa',
    length: '18',
    description: 'Podziemne sanktuarium z naturalnymi kryształami',
  },
];

export function OtherCard({
  icon,
  title,
  length,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  length: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/20 bg-slate-800/20 p-4 transition-all duration-300 hover:bg-slate-700/30">
      <div className="mb-3 flex items-center space-x-3">
        {icon}
        <div className="text-left">
          <h4 className="font-medium text-blue-100">{title}</h4>
          <span className="text-sm text-blue-400/60">{length} km</span>
        </div>
      </div>
      <p className="mb-3 text-left text-xs text-blue-300/60">{description}</p>
      <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-8 w-full shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/20 bg-slate-700/30 px-3 text-sm font-medium text-blue-300 outline-none transition-all hover:bg-slate-600/40 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
        Poznaj miejsce
      </button>
    </div>
  );
}
