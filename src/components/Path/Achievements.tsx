function AchievementCard({
  icon,
  iconAlt,
  title,
  description,
  progressCurrent,
  progressMax,
}: {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  progressCurrent: number;
  progressMax: number;
}) {
  const progressPercent =
    progressMax > 0
      ? Math.min(100, Math.max(0, (progressCurrent / progressMax) * 100))
      : 0;

  return (
    <div className="flex h-full gap-4 rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-600/50">
        <img
          src={icon}
          alt={iconAlt}
          className="h-7 w-7 flex-shrink-0"
          style={{ filter: 'invert(100%) brightness(60%)' }}
        />
      </div>
      <div className="flex min-w-0 flex-grow flex-col gap-3">
        <h3 className="break-words break-all text-left text-lg font-medium text-blue-200">
          {title}
        </h3>

        <p className="break-words text-left text-sm text-blue-300/80 [word-break:break-word]">
          {description}
        </p>

        <div className="mt-auto">
          <div className="mb-1 flex justify-between text-xs text-blue-300">
            <span>Postęp</span>
            <span className="font-medium text-blue-200">
              {progressCurrent}/{progressMax}
            </span>
          </div>

          <div className="relative w-full">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-900">
              <div
                className="h-full bg-blue-400 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AchievementsTab() {
  const achievements = [
    {
      icon: '/path/achievements/ico1.svg',
      iconAlt: 'Pierwszy rytuał',
      title: 'Pierwszy rytuał',
      description: 'Wykonałeś swój pierwszy rytuał uzdrowienia',
      progressCurrent: 0,
      progressMax: 1,
    },
    {
      icon: '/path/achievements/ico2.svg',
      iconAlt: 'Mistrz rytuałów',
      title: 'Mistrz rytuałów',
      description: 'Wykonałeś 10 rytuałów',
      progressCurrent: 0,
      progressMax: 10,
    },
    {
      icon: '/path/achievements/ico3.svg',
      iconAlt: 'Odkrywca miejsc',
      title: 'Odkrywca miejsc',
      description: 'Odwiedziłeś 3 miejsca mocy',
      progressCurrent: 0,
      progressMax: 3,
    },
    {
      icon: '/path/achievements/ico4.svg',
      iconAlt: 'Kolekcjoner kamieni',
      title: 'Kolekcjoner kamieni',
      description: 'Zebrałeś 5 kamieni mocy',
      progressCurrent: 0,
      progressMax: 5,
    },
    {
      icon: '/path/achievements/ico5.svg',
      iconAlt: 'Mistrz ziół',
      title: 'Mistrz ziół',
      description: 'Przygotowałeś 5 różnych naparów',
      progressCurrent: 0,
      progressMax: 5,
    },
    {
      icon: '/path/achievements/ico6.svg',
      iconAlt: 'Kronikarz podróży',
      title: 'Kronikarz podróży',
      description: 'Napisałeś 10 wpisów w dzienniku',
      progressCurrent: 0,
      progressMax: 10,
    },
    {
      icon: '/path/achievements/ico7.svg',
      iconAlt: 'Oddany praktyk',
      title: 'Oddany praktyk',
      description: '30 dni regularnej praktyki',
      progressCurrent: 0,
      progressMax: 30,
    },
    {
      icon: '/path/achievements/ico8.svg',
      iconAlt: 'Poszukiwacz transformacji',
      title: 'Poszukiwacz transformacji',
      description: 'Ukończyłeś pełny cykl księżycowy praktyk',
      progressCurrent: 0,
      progressMax: 1,
    },
  ];

  return (
    <div className="mb-8 w-full max-w-7xl px-4 sm:px-6">
      <h2 className="mb-6 text-left text-2xl font-medium text-blue-100">
        Osiągnięcia duchowej podróży
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((ach, idx) => (
          <div key={idx} className="h-full">
            <AchievementCard {...ach} />
          </div>
        ))}
      </div>
    </div>
  );
}
