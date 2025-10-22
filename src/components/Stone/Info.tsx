import { useMemo, useState } from 'react';
import { TabButton } from '../Common/TabButton';
import { cards, Card } from './Card';
import { AppointmentTab } from './Appointment';
import { CollectionTab } from './Collection';
import { descriptions, DescriptionModal } from './DescriptionModal';

export function Info() {
  const [tab, setTab] = useState<'twój' | 'według' | 'kolekcja'>('twój');

  const [openDescription, setOpenDescription] = useState<{
    title: string;
    description: string;
    medicinalProperties: string[];
    stoneCare: string[];
    rituals: string[];
    chakra: string;
    hardness: string;
    origin: string;
    cost: string;
  } | null>(null);

  const powerStone = {
    title: 'Sunstone',
    description: 'Stone of leadership and confidence.',
    medicinalProperties: [
      'Uspokaja emocje',
      'Oczyszcza aurę',
      'Wzmacnia intuicję',
      'Pomaga w komunikacji',
      'Łagodzi lęk',
    ],
    rituals: [
      'Medytacja z kamieniem na gardle',
      'Kąpiel z kamieniem słonecznym',
      'Noszenie przy sercu',
      'Ładowanie w świetle księżyca',
    ],
    chakra: 'Gardłowa',
    hardness: '7.5-8',
    origin: 'Brazylia, Pakistan',
    cost: '50-200 zł',
  };

  const byTitle = useMemo(() => {
    const map = new Map<
      string,
      {
        title: string;
        description: string;
        medicinalProperties: string[];
        stoneCare: string[];
        rituals: string[];
        chakra: string;
        hardness: string;
        origin: string;
        cost: string;
      }
    >();
    for (const d of descriptions) map.set(d.title, d);
    return map;
  }, []);

  const handleShowDetails = (title: string) => {
    const found = byTitle.get(title);
    if (found) setOpenDescription(found);
  };

  const handleCloseModal = () => setOpenDescription(null);

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6">
      <h1 className="mb-4 text-center text-4xl font-medium text-blue-100">
        Kamienie Mocy
      </h1>
      <p className="mb-6 text-center text-xl text-blue-300/80">
        Odkryj mądrość minerałów i ich uzdrawiającą energię
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <TabButton
          isActive={tab === 'twój'}
          onClick={() => setTab('twój')}
          activeClassName="bg-blue-600"
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico1.svg"
              alt="star icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Twój kamień
          </div>
        </TabButton>
        <TabButton
          isActive={tab === 'według'}
          onClick={() => setTab('według')}
          activeClassName="bg-purple-600"
        >
          <div className="flex items-center gap-4">
            <img
              src="/stone/tab-icon2.svg"
              alt="star icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Według celu
          </div>
        </TabButton>
        <TabButton
          isActive={tab === 'kolekcja'}
          onClick={() => setTab('kolekcja')}
          activeClassName="bg-green-600"
        >
          <div className="flex items-center gap-4">
            <img
              src="/path/achievements/ico4.svg"
              alt="star icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Kolekcja
          </div>
        </TabButton>
      </div>

      {tab === 'twój' && (
        <div>
          <div className="mb-6 flex gap-2 text-left text-2xl font-medium text-blue-100">
            <img
              src="/star-icon.svg"
              alt="star-icon"
              className="h-8 w-8"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Twój osobisty kamień mocy
          </div>
          <div className="rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8 text-blue-100">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex flex-col items-center lg:w-1/2">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 shadow-2xl">
                  <img
                    src="/stone-icon.svg"
                    alt={powerStone.title}
                    className="h-16 w-16"
                    style={{ filter: 'invert(100%) brightness(100%)' }}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-medium text-blue-100">
                  {powerStone.title}
                </h3>
                <div className="mb-4 flex justify-center space-x-3">
                  <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-gold-900/30 bg-gold-900/20 px-2 py-0.5 text-xs font-medium text-gold-200 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                    Żywioł: {'water'}
                  </span>
                  <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                    częsty
                  </span>
                </div>
                <p className="mb-6 px-4 text-center text-blue-300/80">
                  {powerStone.description}
                </p>

                <div className="grid w-full grid-cols-2 gap-4 px-4 text-sm">
                  <div className="rounded-lg bg-blue-900/30 p-3">
                    <div className="font-medium text-blue-200">Czakra</div>
                    <div className="text-blue-100">{powerStone.chakra}</div>
                  </div>
                  <div className="rounded-lg bg-purple-900/30 p-3">
                    <div className="font-medium text-purple-200">Twardość</div>
                    <div className="text-purple-100">{powerStone.hardness}</div>
                  </div>
                  <div className="rounded-lg bg-green-900/30 p-3">
                    <div className="font-medium text-green-200">
                      Pochodzenie
                    </div>
                    <div className="text-green-100">{powerStone.origin}</div>
                  </div>
                  <div className="rounded-lg bg-gold-900/30 p-3">
                    <div className="font-medium text-yellow-300">Cena</div>
                    <div className="text-yellow-200">{powerStone.cost}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-4 lg:w-1/2">
                <div>
                  <div className="mb-3 flex items-center space-x-2">
                    <img
                      src="/ico6.svg"
                      alt="little shine icon"
                      className="h-[17.5px] w-[17.5px] filter"
                      style={{
                        filter: 'invert(100%) brightness(100%)',
                      }}
                    />
                    <h3 className="text-lg font-medium text-blue-100">
                      Właściwości duchowe
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-left">
                    {powerStone.medicinalProperties.map((prop, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-cyan-900/20 p-2 text-sm text-cyan-200"
                      >
                        {prop}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center space-x-2">
                    <img
                      src="/path/achievements/ico8.svg"
                      alt="little moon icon"
                      className="h-[17.5px] w-[17.5px] filter"
                      style={{
                        filter: 'invert(100%) brightness(100%)',
                      }}
                    />
                    <h3 className="text-lg font-medium text-blue-100">
                      Sposoby użycia
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {powerStone.rituals.map((way, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-purple-200"
                      >
                        <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                          {i + 1}
                        </div>
                        {way}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
              >
                Szczegółowe właściwości
              </button>
              <button
                type="button"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-purple-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-purple-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
              >
                Dodaj do kolekcji
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-left text-2xl font-medium text-blue-100">
              Uniwersalne kamienie mocy
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {cards.map(
                ({ icon, title, type, typeClassName, description }, idx) => (
                  <Card
                    key={idx}
                    icon={icon}
                    title={title}
                    type={type}
                    typeClassName={typeClassName}
                    description={description}
                    onShowDetails={handleShowDetails}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'według' && <AppointmentTab />}

      {tab === 'kolekcja' && (
        <CollectionTab onSwitchToTwojKamien={() => setTab('twój')} />
      )}

      {openDescription && (
        <DescriptionModal {...openDescription} onClose={handleCloseModal} />
      )}
    </div>
  );
}
