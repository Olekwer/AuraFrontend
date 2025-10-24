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
    <div className="box-border w-full">
      <div className="w-full max-w-full space-y-12 overflow-hidden rounded-xl border border-blue-800/30 bg-slate-800/40 p-4 text-left sm:p-6 md:p-8">
        <div className="mb-4 flex w-full items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className="mb-2 text-lg font-medium text-blue-100 sm:text-2xl"
              title={title}
            >
              {title}
            </h3>

            <p
              className="mb-3 max-w-full overflow-hidden break-words text-sm text-blue-300/80"
              style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
              title={description}
            >
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300">
                <img
                  src="/infusions/ico4.svg"
                  alt="little timer icon"
                  aria-hidden="true"
                  className="h-[12px] w-[12px] filter"
                  style={{
                    filter:
                      'invert(41%) sepia(59%) saturate(600%) hue-rotate(90deg) brightness(180%) contrast(70%)',
                  }}
                />
                <span className="min-w-0">{time} min</span>
              </span>

              <span className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
                <img
                  src="/infusions/ico3.svg"
                  alt="little temperature icon"
                  aria-hidden="true"
                  className="h-[12px] w-[12px] filter"
                  style={{
                    filter:
                      'invert(65%) sepia(10%) saturate(1400%) hue-rotate(180deg) brightness(110%) contrast(100%)',
                  }}
                />
                <span className="min-w-0">{temperature}°C</span>
              </span>

              <span className="inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-purple-500/30 bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-300">
                <img
                  src="/infusions/little-ico1.svg"
                  alt="little time icon"
                  aria-hidden="true"
                  className="h-[12px] w-[12px] filter"
                  style={{
                    filter:
                      'invert(88%) sepia(25%) saturate(900%) hue-rotate(270deg) brightness(110%) contrast(95%)',
                  }}
                />
                <span className="min-w-0">Kuracja: {treatment}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-start">
            <button
              onClick={closeInstruction}
              className="inline-flex h-9 min-w-[88px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 transition-all hover:bg-slate-700/60"
            >
              Zamknij
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="min-w-0">
            <h4 className="mb-3 text-base font-medium text-blue-100">
              Składniki:
            </h4>

            <ul className="space-y-2">
              {ingredients.map((ingredient, idx) => (
                <li key={idx} className="min-w-0 text-blue-300/80">
                  <div className="flex items-center">
                    <div className="mr-3 flex-shrink-0">
                      <img
                        src="/path/journal/ico1.svg"
                        alt="accept icon"
                        aria-hidden="true"
                        className="h-[14px] w-[14px] filter"
                        style={{
                          filter:
                            'invert(41%) sepia(59%) saturate(9000%) hue-rotate(90deg) brightness(150%) contrast(85%)',
                        }}
                      />
                    </div>
                    <div
                      className="min-w-0 break-words"
                      style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
                    >
                      {ingredient}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="mb-3 text-base font-medium text-blue-100">
              Sposób przygotowania:
            </h4>

            <ol className="space-y-3">
              {creationSteps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex min-w-0 items-start text-blue-300/80"
                >
                  <span className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm text-white">
                    {idx + 1}
                  </span>
                  <div
                    className="min-w-0 break-words"
                    style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
                  >
                    {step}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-green-700/30 bg-green-900/30 p-3">
            <h5 className="mb-2 text-sm font-medium text-green-200">
              Właściwości lecznicze:
            </h5>
            <div className="flex flex-wrap gap-2">
              {medicinalProperties.map((property, idx) => (
                <span
                  key={idx}
                  className="inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300"
                >
                  {property}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-blue-700/30 bg-blue-900/30 p-3">
            <h5 className="mb-2 text-sm font-medium text-blue-200">
              Wskazówki:
            </h5>
            <p
              className="break-words text-sm italic text-blue-100"
              style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
            >
              "Przygotowuj napar z szacunkiem i wdzięcznością. Każde zioło
              niesie w sobie mądrość natury. Pij powoli, delektując się smakiem
              i aromatem."
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="inline-flex w-full min-w-0 max-w-[320px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-pink-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-700">
            <img
              src="/stone/ico3.svg"
              alt="button heart icon"
              aria-hidden="true"
              className="h-[14px] w-[14px] filter"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Dodaj do ulubionych
          </button>

          <button className="inline-flex w-full min-w-0 max-w-[320px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-sm font-medium text-blue-200 transition-colors">
            <img
              src="/path/journal/ico1.svg"
              alt="button accept icon"
              aria-hidden="true"
              className="h-[14px] w-[14px]"
              style={{
                filter:
                  'invert(65%) sepia(10%) saturate(1100%) hue-rotate(180deg) brightness(110%) contrast(130%)',
              }}
            />
            Oznacz jako użyte
          </button>
        </div>
      </div>
    </div>
  );
}
