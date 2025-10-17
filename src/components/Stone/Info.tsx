import { useState } from 'react';
import { TabButton } from './TabButton';
import { cards, Card } from './Card';
import { AppointmentTab } from './Appointment';
import { CollectionTab } from './Collection';

export function Info() {
  const [tab, setTab] = useState<'twój' | 'według' | 'kolekcja'>('twój');

  const powerStone = {
    name: 'Sunstone',
    description: 'Stone of leadership and confidence.',
    chakra: 'Gardłowa',
    hardness: '7.5-8',
    origin: 'Brazylia, Pakistan',
    price: '50-200 zł',
    spiritualProperties: [
      'Uspokaja emocje',
      'Oczyszcza aurę',
      'Wzmacnia intuicję',
      'Pomaga w komunikacji',
      'Łagodzi lęk',
    ],
    usageWays: [
      'Medytacja z kamieniem na gardle',
      'Kąpiel z kamieniem słonecznym',
      'Noszenie przy sercu',
      'Ładowanie w świetle księżyca',
    ],
  };

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
          Twój kamień
        </TabButton>
        <TabButton
          isActive={tab === 'według'}
          onClick={() => setTab('według')}
          activeClassName="bg-purple-600"
        >
          Według celu
        </TabButton>
        <TabButton
          isActive={tab === 'kolekcja'}
          onClick={() => setTab('kolekcja')}
          activeClassName="bg-green-600"
        >
          Kolekcja
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
                    alt={powerStone.name}
                    className="h-16 w-16"
                    style={{ filter: 'invert(100%) brightness(100%)' }}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-medium text-blue-100">
                  {powerStone.name}
                </h3>
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
                    <div className="font-medium text-green-200">Pochodzenie</div>
                    <div className="text-green-100">{powerStone.origin}</div>
                  </div>
                  <div className="rounded-lg bg-gold-900/30 p-3">
                    <div className="font-medium text-yellow-300">Cena</div>
                    <div className="text-yellow-200">{powerStone.price}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-4 lg:w-1/2">
                <div>
                  <h3 className="mb-3 flex items-center text-lg font-medium text-blue-100">
                    Właściwości duchowe
                  </h3>
                  <div className="grid grid-cols-1 gap-2 text-left">
                    {powerStone.spiritualProperties.map((prop, i) => (
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
                  <h3 className="mb-3 flex items-center text-lg font-medium text-blue-100">
                    Sposoby użycia
                  </h3>
                  <div className="space-y-2">
                    {powerStone.usageWays.map((way, i) => (
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

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
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
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'według' && <AppointmentTab />}

      {tab === 'kolekcja' && (<CollectionTab onSwitchToTwojKamien={() => setTab('twój')} />
      )}
    </div>
  );
}
