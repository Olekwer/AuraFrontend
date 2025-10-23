import { useRitualInstructionStore } from '../../store/ritualInstructionStore';

export const instructions = [
  {
    title: 'Rytuał Oczyszczenia Wodą',
    description:
      'Głębokie oczyszczenie emocjonalne przez połączenie z energią wody',
    requiredMaterials: [
      'Miska z wodą',
      'Sól morska',
      'Biała świeca',
      'Akwamaryn',
    ],
    ritualSteps: [
      'Ustaw miski z wodą w kierunkach świata',
      'Zapal białą świecę i postaw ją na północy',
      'Dodaj szczyptę soli morskiej do każdej miski',
      'Trzymaj akwamaryn w dłoniach',
      'Wizualizuj błękitne światło przepływające przez ciało',
      'Obmyj twarz i dłonie świętą wodą',
      'Podziękuj za oczyszczenie',
    ],
  },
  {
    title: 'Rytuał Pełni Księżyca',
    description: 'Uniwersalny rytuał manifestacji podczas pełni księżyca',
    requiredMaterials: [
      'Biała świeca',
      'Kryształ górski',
      'Srebro',
      'Woda księżycowa',
    ],
    ritualSteps: [
      'Wykonuj tylko podczas pełni księżyca',
      'Wyjdź na zewnątrz lub stań przy oknie',
      'Zapal białą świecę',
      'Trzymaj kryształ górski oburącz',
      'Spojrz na księżyc i podziel się intencjami',
      'Naładuj wodę światłem księżyca',
      'Wypij małymi łykami wodę księżycową',
    ],
  },
  {
    title: 'Balansowanie Czakr',
    description: 'Kompleksowe oczyszczenie i wyrównanie wszystkich czakr',
    requiredMaterials: [
      '7 kolorowych świec',
      'Kryształy czakr',
      'Olej eteryczny',
    ],
    ritualSteps: [
      'Ustaw 7 świec wzdłuż ciała (od głowy do stóp)',
      'Położ odpowiednie kryształy na każdej czakrze',
      'Zapal świece od najniższej do najwyższej',
      'Wizualizuj każdy kolor czakry przez 5 minut',
      'Poczuj energię płynącą przez całe ciało',
      'Podziękuj za harmonię i balans',
    ],
  },
  {
    title: 'Ceremonia Transformacji Płomienia',
    description: 'Spalenie starych wzorców i przyziemnie nowej energii',
    requiredMaterials: [
      'Czerwona świeca',
      'Papier',
      'Ołówek',
      'Karneol',
      'Żelazo lub stal',
    ],
    ritualSteps: [
      'Napisz na papierze to, co chcesz uwolnić',
      'Zapal czerwoną świecę na południu',
      'Trzymaj karneol w lewej dłoni',
      'Przeczytaj swoje intencje na głos',
      'Spal papier w płomieniu świecy',
      'Wizualizuj złote światło wypełniające ciało',
      'Podziękuj ogniowi za transformację',
    ],
  },
  {
    title: 'Uziemienie z Kryształami',
    description: 'Głębokie połączenie z energią Ziemi i stabilizacja',
    requiredMaterials: ['Jadeit', 'Hematyt', 'Ziemia z lasu', 'Zielona świeca'],
    ritualSteps: [
      'Usiądź na ziemi lub podłodze',
      'Postaw zieloną świecę przed sobą',
      'Trzymaj jadeit w prawej, hematyt w lewej dłoni',
      'Wizualizuj korzenie wrastające w ziemię',
      'Poczuj stabilność i siłę Matki Ziemi',
      'Podziękuj za uziemienie i ochronę',
    ],
  },
  {
    title: 'Medytacja Oddechowa na Wysokości',
    description: 'Oczyszczenie umysłu i połączenie z wyższymi planami',
    requiredMaterials: ['Ametyst', 'Kadzidło santalowe', 'Fioletowa świeca'],
    ritualSteps: [
      'Znajdź spokojne, przewiewne miejsce',
      'Zapal kadzidło i fioletową świecę',
      'Trzymaj ametyst przy sercu',
      'Oddychaj głęboko i rytmicznie',
      'Wizualizuj fioletowe światło wokół głowy',
      'Pozwól myślom przepływać jak chmury',
      'Podziękuj za jasność i spokój',
    ],
  },
];

export function RitualInstruction({
  title,
  description,
  requiredMaterials,
  ritualSteps,
}: {
  title: string;
  description: string;
  requiredMaterials: string[];
  ritualSteps: string[];
}) {
  const { closeInstruction } = useRitualInstructionStore();

  return (
    <div className="flex flex-col max-w-[1129px] gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-8 text-left">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-2xl font-medium text-blue-100">{title}</h3>
          <p className="mb-4 text-blue-300/80">{description}</p>
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
          <h4 className="mb-4 text-lg font-medium text-blue-100">
            Potrzebne materiały:
          </h4>
          <ul className="space-y-2">
            {requiredMaterials.map((material, idx) => (
              <li key={idx} className="flex items-center text-blue-300/80">
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                {material}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-medium text-blue-100">
            Kroki rytuału:
          </h4>
          <ol className="space-y-3">
            {ritualSteps.map((step, idx) => (
              <li key={idx} className="flex text-blue-300/80">
                <span className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-blue-700/30 bg-blue-900/30 p-4">
        <p className="mb-2 text-sm text-blue-200">Pamiętaj:</p>
        <p className="italic text-blue-100">
          Rytuał to rozmowa z Wszechświatem. Podejdź do niego z szacunkiem,
          otwartością i wiarą. Najważniejsza jest Twoja intencja, nie
          perfekcyjne wykonanie.
        </p>
      </div>
    </div>
  );
}
