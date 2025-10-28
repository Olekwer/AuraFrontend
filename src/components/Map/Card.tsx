export const cards = [
  {
    title: 'Las Bukowy',
    difficulty: 'łatwy',
    element: 'earth',
    length: '12',
    description: 'Pierwotny las o mocy uziemienia',
    icon: (
      <div className="to-brown-500 rounded-full bg-gradient-to-r from-green-500 p-4">
        <img
          src="/rituals/additionalRitualCard/ico2.svg"
          alt="card tree icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Las bukowy liczący 400 lat. Grube pnie, wijące się korzenie i mech pokrywający ziemię.',
    spiritualSignificance:
      'Miejsce głębokiego połączenia z Matką Ziemią. Energia drzew stabilizuje i wzmacnia życiową siłę.',
    bestTime: 'południe (12:00-14:00)',
    ritual: 'Uziemienie z Kryształami',
  },
  {
    title: 'Jezioro Błędno',
    difficulty: 'łatwy',
    element: 'water',
    length: '14',
    description:
      'Starożytne jezioro o wyjątkowych właściwościach uzdrawiających',
    icon: (
      <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
        <img
          src="/rituals/ico1.svg"
          alt="card wave icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Krystalicznie czysta woda otoczona pierwotnym lasem bukowym. Temperatura wody utrzymuje się stale na poziomie 16°C.',
    spiritualSignificance:
      'Miejsce głębokiego oczyszczenia emocjonalnego. Energia wody uspokaja umysł i otwiera serce na intuicyjne przesłania.',
    bestTime: 'wschód słońca (5:30-7:00)',
    ritual: 'Rytuał Oczyszczenia Wodą',
  },
  {
    title: 'Źródło Uzdrowienia',
    difficulty: 'łatwy',
    element: 'water',
    length: '9',
    description: 'Źródło o właściwościach leczniczych',
    icon: (
      <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
        <img
          src="/rituals/ico1.svg"
          alt="card wave icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Naturalne źródło wody mineralnej. Bogata w magnez i krzem. Wypływa spod starożytnego dębu.',
    spiritualSignificance:
      'Woda niesie właściwości uzdrawiające ciało i duszę. Miejsce błogosławieństw i życzeń.',
    bestTime: 'wschód słońca (5:30-7:00)',
    ritual: 'Rytuał Świętej Wody',
  },
  {
    title: 'Grota Kryształowa',
    difficulty: 'średni',
    element: 'earth',
    length: '18',
    description: 'Podziemne sanktuarium z naturalnymi kryształami',
    icon: (
      <div className="to-brown-500 rounded-full bg-gradient-to-r from-green-500 p-4">
        <img
          src="/path/achievements/ico1.svg"
          alt="card star icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Jaskinia wapniowa z formacjami kryształów kwarcu. Stała temperatura 12°C.',
    spiritualSignificance:
      'Miejsce medytacji i ładowania kamieni. Energia kryształów wzmacnia intencje i oczyszcza aurę.',
    bestTime: 'każda pora (grota)',
    ritual: 'Ładowanie Kamieni Mocy',
  },
  {
    title: 'Wzgórze Świętego Ducha',
    difficulty: 'średni',
    element: 'fire',
    length: '8',
    description: 'Wzgórze o silnej energii transformacyjnej',
    icon: (
      <div className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-4">
        <img
          src="/rituals/additionalRitualCard/ico1.svg"
          alt="fire icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Wysokość 347m n.p.m. Kamienne kręgi pochodzące z epoki brązu. Bogata flora górska.',
    spiritualSignificance:
      'Miejsce spalania starych wzorców i narodzin nowej energii. Ogień transformacji płonie tu nieprzerwanie od wieków.',
    bestTime: 'zachód słońca (19:00-21:00)',
    ritual: 'Ceremonia Transformacji Płomienia',
  },
  {
    title: 'Szczyt Łysej Góry',
    difficulty: 'trudny',
    element: 'air',
    length: '23',
    description: 'Najwyższy punkt regionu, brama do wyższych wymiarów',
    icon: (
      <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <img
          src="/stone/ico1.svg"
          alt="mountain icon"
          className="h-7 w-7 filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    natureDescription:
      'Wysokość 612m n.p.m. Panoramiczny widok na 4 strony świata. Częste mgły i silne wiatry.',
    spiritualSignificance:
      'Miejsce komunikacji z wyższymi planami. Energia powietrza niesie przesłania i oczyszcza umysł.',
    bestTime: 'świt (4:30-6:00)',
    ritual: 'Medytacja Oddechowa na Wysokości',
  },
];

export function Card({
  title,
  difficulty,
  element,
  length,
  description,
  icon,
  natureDescription,
  spiritualSignificance,
  bestTime,
  ritual,
}: {
  title: string;
  difficulty: string;
  element: string;
  length: string;
  description: string;
  icon: React.ReactNode;
  natureDescription: string;
  spiritualSignificance: string;
  bestTime: string;
  ritual: string;
}) {
  const difficultyColors =
    difficulty === 'łatwy'
      ? 'bg-green-100/10 text-green-300 border-green-500/30'
      : difficulty === 'średni'
        ? 'bg-yellow-100/10 text-yellow-300 border-yellow-500/30'
        : 'bg-red-100/10 text-red-300 border-red-500/30';

  const elementGradient =
    element === 'earth'
      ? 'from-green-500 to-brown-500'
      : element === 'water'
        ? 'from-blue-500 to-cyan-500'
        : element === 'fire'
          ? 'from-red-500 to-orange-500'
          : 'from-purple-500 to-pink-500';

  const isNightIcon =
    bestTime === 'południe (12:00-14:00)' ||
    bestTime === 'każda pora (grota)' ||
    bestTime === 'zachód słońca (19:00-21:00)' ||
    bestTime === 'świt (4:30-6:00)';

  return (
    <div className="w-full max-w-full rounded-xl border border-blue-800/30 bg-slate-800/40 p-4 text-left sm:p-6 md:p-8">
      <div className="flex w-full items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-lg font-medium text-blue-100 sm:text-xl md:text-2xl">
            {title}
          </h3>

          <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-md border px-2 py-0.5 text-xs font-medium ${difficultyColors}`}
            >
              {difficulty}
            </span>

            <span
              className={`inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-2 py-0.5 text-xs font-medium text-white ${elementGradient}`}
            >
              {element}
            </span>

            <span className="ml-1 flex items-center gap-2 text-sm text-blue-300">
              <img
                src="/path/achievements/ico3.svg"
                alt="map point icon"
                className="h-3.5 w-3.5 filter"
                style={{
                  filter:
                    'invert(65%) sepia(10%) saturate(1400%) hue-rotate(180deg) brightness(110%) contrast(100%)',
                }}
              />
              <span className="text-sm">{length} km</span>
            </span>
          </div>

          <p className="mb-3 text-sm leading-relaxed text-blue-300/85">
            {description}
          </p>
        </div>

        <div className="shrink-0">{icon}</div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-100 sm:text-base">
              <img
                src="/rituals/additionalRitualCard/ico2.svg"
                alt="tree icon"
                className="h-[17.5px] w-[17.5px] filter"
                style={{
                  filter:
                    'invert(41%) sepia(59%) saturate(9000%) hue-rotate(90deg) brightness(150%) contrast(85%)',
                }}
              />
              Opis przyrodniczy
            </h4>
            <p className="text-xs leading-tight text-blue-300/80 sm:text-sm">
              {natureDescription}
            </p>
          </div>

          <div>
            <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-100 sm:text-base">
              <img
                src="/infusions/little-ico1.svg"
                alt="time icon"
                className="h-[17.5px] w-[17.5px] filter"
                style={{
                  filter:
                    'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                }}
              />
              Najlepszy czas
            </h4>

            <p className="flex items-center gap-2 text-xs text-blue-300/80 sm:text-sm">
              <img
                src={isNightIcon ? '/ico5.svg' : '/infusions/little-ico4.svg'}
                alt={isNightIcon ? 'moon icon' : 'sun icon'}
                className="h-3.5 w-3.5 filter"
                style={{
                  filter: isNightIcon
                    ? 'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)'
                    : 'invert(56%) sepia(98%) saturate(7500%) hue-rotate(2deg) brightness(110%) contrast(90%)',
                }}
              />
              <span className="leading-tight">{bestTime}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-100 sm:text-base">
              <img
                src="/path/achievements/ico1.svg"
                alt="star icon"
                className="h-[17.5px] w-[17.5px] filter"
                style={{
                  filter:
                    'invert(58%) sepia(75%) saturate(418%) hue-rotate(255deg) brightness(110%) contrast(90%)',
                }}
              />
              Znaczenie duchowe
            </h4>
            <p className="text-xs leading-tight text-blue-300/80 sm:text-sm">
              {spiritualSignificance}
            </p>
          </div>

          <div>
            <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-blue-100 sm:text-base">
              <img
                src="/rituals/soundCard/ico1.svg"
                alt="play icon"
                className="h-[17.5px] w-[17.5px] filter"
                style={{
                  filter:
                    'invert(39%) sepia(55%) saturate(6000%) hue-rotate(320deg) brightness(95%) contrast(90%)',
                }}
              />
              Rytuał
            </h4>
            <p className="text-xs leading-tight text-blue-300/80 sm:text-sm">
              {ritual}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-4 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <img
            src="/map/ico2.svg"
            alt="button plane icon"
            className="h-3.5 w-3.5 filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Zaplanuj wizytę
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-4 rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-sm font-medium text-blue-200 transition hover:bg-slate-700/60 sm:w-auto"
        >
          <img
            src="/rituals/soundCard/ico1.svg"
            alt="button play icon"
            className="h-3.5 w-3.5 filter"
            style={{
              filter:
                'invert(80%) sepia(15%) saturate(1200%) hue-rotate(180deg) brightness(100%) contrast(90%)',
            }}
          />
          Odtwórz rytuał
        </button>
      </div>
    </div>
  );
}
