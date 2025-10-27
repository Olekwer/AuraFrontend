export const otherCards = [
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

export function OtherCard({
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
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-2xl font-medium text-blue-100">{title}</h3>
          <div className="mb-4 flex items-center space-x-4">
            {difficulty === 'łatwy' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {difficulty}
              </span>
            ) : difficulty === 'średni' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-yellow-500/30 bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {difficulty}
              </span>
            ) : (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-red-500/30 bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {difficulty}
              </span>
            )}
            {element === 'earth' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive to-brown-500 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-none border-transparent bg-gradient-to-r from-green-500 px-2 py-0.5 text-xs font-medium text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {element}
              </span>
            ) : element === 'water' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-none border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 px-2 py-0.5 text-xs font-medium text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {element}
              </span>
            ) : element === 'fire' ? (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-none border-transparent bg-gradient-to-r from-red-500 to-orange-500 px-2 py-0.5 text-xs font-medium text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {element}
              </span>
            ) : (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-none border-transparent bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 text-xs font-medium text-white transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {element}
              </span>
            )}
            <span className="flex items-center text-sm text-blue-300">
              <img
                src="/path/achievements/ico3.svg"
                alt="map point icon"
                className="h-[14px] w-[14px] flex-shrink-0 filter"
                style={{
                  filter:
                    'invert(65%) sepia(10%) saturate(1400%) hue-rotate(180deg) brightness(110%) contrast(100%)',
                }}
              />
              {length} km
            </span>
          </div>
          <p className="mb-4 text-blue-300/80">{description}</p>
        </div>
        {icon}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 flex items-center text-lg font-medium text-blue-100">
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
            <p className="text-sm text-blue-300/80">{natureDescription}</p>
          </div>
          <div>
            <h4 className="mb-2 flex items-center text-lg font-medium text-blue-100">
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
            <p className="flex items-center text-sm text-blue-300/80">
              {bestTime === 'południe (12:00-14:00)' ||
              bestTime === 'każda pora (grota)' ||
              bestTime === 'zachód słońca (19:00-21:00)' ||
              bestTime === 'świt (4:30-6:00)' ? (
                <img
                  src="/ico5.svg"
                  alt="little moon icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                  }}
                />
              ) : (
                <img
                  src="/infusions/little-ico4.svg"
                  alt="little sun icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(56%) sepia(98%) saturate(7500%) hue-rotate(2deg) brightness(110%) contrast(90%)',
                  }}
                />
              )}
              {bestTime}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 flex items-center text-lg font-medium text-blue-100">
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
            <p className="text-sm text-blue-300/80">{spiritualSignificance}</p>
          </div>
          <div>
            <h4 className="mb-2 flex items-center text-lg font-medium text-blue-100">
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
            <p className="text-sm text-blue-300/80">{ritual}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/map/ico2.svg"
            alt="button plane icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Zaplanuj wizytę
        </button>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/rituals/soundCard/ico1.svg"
            alt="button play icon"
            className="h-[14px] w-[14px] filter"
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
