import { useInfusionInstructionStore } from '../../store/infusionInstructionStore';

export const infusionInstructions = [
  {
    title: 'Napar z melisy i lawendy',
    description: 'Kojący napar na spokój umysłu i emocjonalną równowagę',
    time: '5',
    temperature: '80',
    treatment: '7-14 dni',
    ingredients: [
      '2 łyżeczki suszonej melisy',
      '1 łyżeczka kwiatów lawendy',
      '250ml gorącej wody (80°C)',
      'Miód do smaku (opcjonalnie)',
    ],
    creationSteps: [
      'Zagotuj wodę i pozostaw do ostygnięcia do 80°C',
      'Wsyp zioła do kubka lub czajniczka',
      'Zalej gorącą wodą i przykryj',
      'Pozostaw na 5 minut do zaparzenia',
      'Przecedź i dodaj miód jeśli lubisz',
      'Pij ciepły, najlepiej wieczorem',
    ],
    medicinalProperties: [
      'Uspokaja nerwy',
      'Poprawia sen',
      'Łagodzi lęk',
      'Harmonizuje emocje',
    ],
  },
  {
    title: 'Mieszanka Księżycowa',
    description: 'Mistyczna mieszanka na pełnię dla wzmocnienia intuicji',
    time: '8',
    temperature: '75',
    treatment: 'jeden cykl księżycowy',
    ingredients: [
      '1 łyżeczka kwiatów jaśminu',
      '1 łyżeczka liści mugwort',
      '1/2 łyżeczki korzenia kozłka',
      '250ml destylowanej wody',
      'Kilka kropel oleju różanego',
    ],
    creationSteps: [
      'Przygotowuj tylko podczas pełni księżyca',
      'Pozostaw wodę na księżycowym świetle przez 3 godziny',
      'Zagrzej do 75°C (nie gotuj)',
      'Zaparzaj zioła przez 8 minut',
      'Przecedź i dodaj olej różany',
      'Pij małymi łykami przed snem',
    ],
    medicinalProperties: [
      'Wzmacnia intuicję',
      'Poprawia sny',
      'Harmonizuje z cyklami',
      'Otwiera trzecie oko',
    ],
  },
  {
    title: 'Herbata Ochronna',
    description: 'Mocna mieszanka dla ochrony energetycznej i oczyszczenia',
    time: '15',
    temperature: '100',
    treatment: '3-7 dni',
    ingredients: [
      '1 łyżka białej szałwii',
      '1 łyżeczka suszonego czosnku',
      '1 łyżeczka korzenia imbiru',
      '1/2 łyżeczki kurkumy',
      '300ml wrzącej wody',
      'Szczypta soli morskiej',
    ],
    creationSteps: [
      'Wszystkie składniki drobno posiekaj',
      'Wsyp do imbryk gliniany lub stalowy',
      'Zalej wrzątkiem i przykryj',
      'Gotuj na małym ogniu przez 15 minut',
      'Odstaw do ostygnięcia',
      'Przecedź i pij małymi porcjami',
    ],
    medicinalProperties: [
      'Oczyszcza aurę',
      'Chroni przed negatywną energią',
      'Wzmacnia odporność',
      'Stabilizuje pole energetyczne',
    ],
  },
  {
    title: 'Herbata z rozmarynu i cynamonu',
    description: 'Energetyzująca mieszanka dla transformacji i siły woli',
    time: '7',
    temperature: '100',
    treatment: '14-21 dni',
    ingredients: [
      '1 łyżeczka suszonego rozmarynu',
      '1/2 łyżeczki cynamonu',
      '250ml wrzącej wody',
      'Łyżeczka miodu manuka',
      'Szczypta pieprzu cayenne (opcjonalnie)',
    ],
    creationSteps: [
      'Zagotuj wodę',
      'Wsyp rozmaryn i cynamon do kubka',
      'Zalej wrzątek i przykryj',
      'Zaparzaj przez 7 minut',
      'Przecedź i dodaj miód',
      'Pij rano na pusty żołądek',
    ],
    medicinalProperties: [
      'Zwiększa energię',
      'Wzmacnia koncentrację',
      'Wspiera transformację',
      'Pobudza kreatywność',
    ],
  },
  {
    title: 'Mieszanka ziół leśnych',
    description: 'Uziemiający napar z dzikimi ziołami dla stabilności',
    time: '10',
    temperature: '90',
    treatment: '21-28 dni',
    ingredients: [
      '1 łyżka suszonej pokrzywy',
      '1 łyżeczka liści brzozy',
      '1 łyżeczka korzenia łopianu',
      '300ml gorącej wody (90°C)',
      'Sok z połowy cytryny',
    ],
    creationSteps: [
      'Zmiel grubiej wszystkie składniki',
      'Wsyp do termosa lub dużego kubka',
      'Zalej wodą o temperaturze 90°C',
      'Pozostaw na 10 minut pod przykryciem',
      'Przecedź przez drobne sitko',
      'Dodaj sok z cytryny przed piciem',
    ],
    medicinalProperties: [
      'Oczyszcza organizm',
      'Wzmacnia odporność',
      'Stabilizuje energię',
      'Wspiera regenerację',
    ],
  },
  {
    title: 'Napar z mięty i eukaliptusa',
    description: 'Orzeźwiający napar dla jasności umysłu i inspiracji',
    time: '4',
    temperature: '85',
    treatment: '7-14 dni',
    ingredients: [
      '2 łyżeczki świeżej mięty',
      '1 łyżeczka liści eukaliptusa',
      '250ml gorącej wody (85°C)',
      'Plasterek imbiru',
      'Limonka do smaku',
    ],
    creationSteps: [
      'Delikatnie pogruć liście mięty',
      'Wszystkie zioła wrzuć do kubka',
      'Zalej wodą o temperaturze 85°C',
      'Zaparzaj 4 minuty bez przykrycia',
      'Delikatnie wymieszaj',
      'Pij świeży, można dodać lód',
    ],
    medicinalProperties: [
      'Oczyszcza myśli',
      'Poprawia koncentrację',
      'Orzeźwia oddech',
      'Inspiruje do działania',
    ],
  },
];

export function InfusionInstruction({
  title,
  description,
  time,
  temperature,
  treatment,
  ingredients,
  creationSteps,
  medicinalProperties,
}: {
  title: string;
  description: string;
  time: string;
  temperature: string;
  treatment: string;
  ingredients: string[];
  creationSteps: string[];
  medicinalProperties: string[];
}) {
  const { closeInstruction } = useInfusionInstructionStore();

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8 text-left">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-2xl font-medium text-blue-100">{title}</h3>
          <p className="mb-4 text-blue-300/80">{description}</p>
          <div className="mb-4 flex items-center space-x-4">
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              <div className="flex items-center gap-2">
              <img
                src="/infusions/ico4.svg"
                alt="little timer icon"
                className="h-[10.5px] w-[10.5px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              {time} min
              </div>
            </span>
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              <div className="flex items-center gap-2">
              <img
                src="/infusions/ico3.svg"
                alt="little temperature icon"
                className="h-[10.5px] w-[10.5px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              {temperature}°C
              </div>
            </span>
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-purple-500/30 bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              <div className="flex items-center gap-2">
              <img
                src="/infusions/little-ico1.svg"
                alt="little time icon"
                className="h-[10.5px] w-[10.5px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              Kuracja: {treatment}
              </div>
            </span>
          </div>
        </div>
        <button
          onClick={closeInstruction}
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          Zamknij
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-4 text-lg font-medium text-blue-100">Składniki:</h4>
          <ul className="space-y-2">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-center text-blue-300/80">
                <div className="flex items-center gap-2">
                <img
                  src="/path/journal/ico1.svg"
                  alt="accept icon"
                  className="h-[14px] w-[14px]"
                  style={{ filter: 'invert(100%) brightness(100%)' }}
                />
                {ingredient}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-medium text-blue-100">
            Sposób przygotowania:
          </h4>
          <ol className="space-y-3">
            {creationSteps.map((step, idx) => (
              <li key={idx} className="flex text-blue-300/80">
                <span className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm text-white">
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-green-700/30 bg-green-900/30 p-4">
          <h5 className="mb-2 font-medium text-green-200">
            Właściwości lecznicze:
          </h5>
          <div className="flex flex-wrap gap-2">
            {medicinalProperties.map((property, idx) => (
              <span
                key={idx}
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3"
              >
                {property}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-blue-700/30 bg-blue-900/30 p-4">
          <h5 className="mb-2 font-medium text-blue-200">Wskazówki:</h5>
          <p className="text-sm italic text-blue-100">
            "Przygotowuj napar z szacunkiem i wdzięcznością. Każde zioło niesie
            w sobie mądrość natury. Pij powoli, delektując się smakiem i
            aromatem."
          </p>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-pink-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-pink-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-white">
          <img
            src="/stone/ico3.svg"
            alt="button heart icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Dodaj do ulubionych
        </button>
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <img
            src="/path/journal/ico1.svg"
            alt="accept icon"
            className="h-[14px] w-[14px]"
            style={{ filter: 'invert(100%) brightness(100%)' }}
          />
          Oznacz jako użyte
        </button>
      </div>
    </div>
  );
}
