import { useState } from 'react';
import { TabButton } from '../Common/TabButton';
import { AchievementsTab } from './Achievements';
import { StatisticsTab } from './Statistics';
import { NewEntry } from './NewEntry';

export function Info() {
  const [tab, setTab] = useState<
    'przeglad' | 'dziennik' | 'osiagniecia' | 'statystyki'
  >('przeglad');

  const [showNewEntry, setShowNewEntry] = useState(false);

  const handleToggleNewEntry = () => {
    setShowNewEntry((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6 pt-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-3xl font-medium text-blue-100 sm:text-4xl">
            Moja Duchowa Ścieżka
          </h1>
          <p className="mb-6 max-w-xl text-xl text-blue-300/80">
            Śledź swoją podróż transformacji i uzdrowienia
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <TabButton
            isActive={tab === 'przeglad'}
            onClick={() => setTab('przeglad')}
            activeClassName="bg-blue-600"
          >
            <div className="flex items-center gap-3">
              <img
                src="/path/tab-icon1.svg"
                alt="star icon"
                className="block h-[14px] w-[14px] max-w-full"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              Przegląd
            </div>
          </TabButton>

          <TabButton
            isActive={tab === 'dziennik'}
            onClick={() => setTab('dziennik')}
            activeClassName="bg-green-600"
          >
            <div className="flex items-center gap-3">
              <img
                src="/path/review/ico4.svg"
                alt="star icon"
                className="block h-[14px] w-[14px] max-w-full"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              Dziennik
            </div>
          </TabButton>

          <TabButton
            isActive={tab === 'osiagniecia'}
            onClick={() => setTab('osiagniecia')}
            activeClassName="bg-purple-600"
          >
            <div className="flex items-center gap-3">
              <img
                src="/path/achievements/ico2.svg"
                alt="star icon"
                className="block h-[14px] w-[14px] max-w-full"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              Osiągnięcia
            </div>
          </TabButton>

          <TabButton
            isActive={tab === 'statystyki'}
            onClick={() => setTab('statystyki')}
            activeClassName="bg-gold-200"
          >
            <div className="flex items-center gap-3">
              <img
                src="/stone/tab-icon2.svg"
                alt="star icon"
                className="block h-[14px] w-[14px] max-w-full"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              Statystyki
            </div>
          </TabButton>
        </div>

        {tab === 'przeglad' && (
          <main className="mb-8 flex w-full flex-col items-center gap-8">
            <section className="w-full px-4 sm:px-6 md:px-8">
              <div className="mx-auto w-full max-w-5xl rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100 sm:p-8">
                <h2 className="mb-4 text-center text-xl font-medium text-blue-100 sm:text-2xl">
                  Twoja duchowa podróż
                </h2>

                <div className="relative max-w-md mx-auto h-8 w-full">
                  <div className="mb-1 flex justify-between text-sm text-blue-200">
                    <span>Ogólny postęp</span>
                    <span className="font-medium text-blue-100">0%</span>
                  </div>
                  <div className="h-[10.5px] w-full overflow-hidden rounded-full bg-blue-900">
                    <div
                      style={{ width: '0%' }}
                      className="h-full bg-blue-400 transition-all"
                    />
                  </div>
                </div>

                <p className="mt-2 text-center text-sm text-blue-400/60">
                  0 dni aktywnej praktyki
                </p>

                <div className="mt-6 grid grid-cols-2 gap-6 text-center text-blue-100 sm:grid-cols-4">
                  <div>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <img
                        src="/path/review/ico1.svg"
                        alt="rituałów icon"
                        className="block h-7 w-7 max-w-full"
                        style={{ filter: 'invert(100%) brightness(100%)' }}
                      />
                    </div>
                    <div className="text-2xl font-medium">0</div>
                    <div className="text-sm text-blue-300/80">
                      Rytuałów wykonanych
                    </div>
                  </div>

                  <div>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500">
                      <img
                        src="/path/review/ico2.svg"
                        alt="miejsc icon"
                        className="block h-7 w-7 max-w-full"
                        style={{ filter: 'invert(100%) brightness(100%)' }}
                      />
                    </div>
                    <div className="text-2xl font-medium">0</div>
                    <div className="text-sm text-blue-300/80">
                      Miejsc odwiedzonych
                    </div>
                  </div>

                  <div>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                      <img
                        src="/path/review/ico3.svg"
                        alt="kamieni icon"
                        className="block h-7 w-7 max-w-full"
                        style={{ filter: 'invert(100%) brightness(100%)' }}
                      />
                    </div>
                    <div className="text-2xl font-medium">0</div>
                    <div className="text-sm text-blue-300/80">
                      Kamieni zebranych
                    </div>
                  </div>

                  <div>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                      <img
                        src="/path/review/ico4.svg"
                        alt="wpisów icon"
                        className="block h-7 w-7 max-w-full"
                        style={{ filter: 'invert(100%) brightness(100%)' }}
                      />
                    </div>
                    <div className="text-2xl font-medium">0</div>
                    <div className="text-sm text-blue-300/80">
                      Wpisów w dzienniku
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center px-4 sm:px-6 md:px-8">
              <div className="w-full max-w-5xl rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100 sm:p-8">
                <div className="mb-6 flex justify-center">
                  <img
                    src="/path/review/ico4.svg"
                    alt="blue icon"
                    className="block h-14 w-14 max-w-full"
                    style={{
                      filter:
                        'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                      opacity: 0.8,
                    }}
                  />
                </div>
                <h3 className="mb-4 text-center text-lg font-medium text-blue-100 sm:text-xl">
                  Rozpocznij swój dziennik
                </h3>
                <p className="mb-6 text-center text-blue-300/80">
                  Zapisuj swoje doświadczenia i obserwuj swoją duchową
                  transformację
                </p>
                <button
                  type="button"
                  onClick={() => setTab('dziennik')}
                  className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-green-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                >
                  <img
                    src="/path/review/activities-button-icon.svg"
                    alt="activities icon"
                    className="block h-[14px] w-[14px] max-w-full"
                    style={{ filter: 'invert(100%) brightness(100%)' }}
                  />
                  Dodaj pierwszy wpis
                </button>
              </div>
            </section>
          </main>
        )}

        {tab === 'dziennik' && (
          <div className="flex w-full max-w-7xl flex-col gap-6">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-medium text-blue-100">
                  Dziennik duchowej podróży
                </h2>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white outline-none transition-all hover:bg-green-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                    onClick={handleToggleNewEntry}
                  >
                    <img
                      src="/path/review/activities-button-icon.svg"
                      alt="nowy wpis icon"
                      className="h-[14px] w-[14px]"
                      style={{ filter: 'invert(100%) brightness(100%)' }}
                    />
                    Nowy wpis
                  </button>
                  <button
                    type="button"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                  >
                    <img
                      src="/stone/appointment/download-icon.svg"
                      alt="nowy wpis icon"
                      className="h-[14px] w-[14px]"
                      style={{ filter: 'invert(100%) brightness(100%)' }}
                    />
                    Export PDF
                  </button>
                </div>
              </div>
              {showNewEntry && <NewEntry />}
            </div>

            <div className="mb-8 flex flex-col items-center rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8 text-center text-blue-100">
              <img
                src="/path/review/ico4.svg"
                alt="blue icon"
                className="mb-6 h-16 w-16 opacity-40"
                style={{
                  filter:
                    'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                }}
              />
              <h3 className="mb-2 text-xl font-medium text-blue-100">
                Twój dziennik jest pusty
              </h3>
              <p className="mb-6 text-blue-300/80">
                Rozpocznij dokumentowanie swojej duchowej podróży
              </p>
            </div>
          </div>
        )}
        {tab === 'osiagniecia' && <AchievementsTab />}
        {tab === 'statystyki' && <StatisticsTab />}

        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl rounded-xl border border-purple-700/30 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6">
            <p className="px-4 text-base italic text-purple-200 sm:px-12 md:px-44">
              "Każdy krok na duchowej ścieżce jest cennym doświadczeniem. Nie
              porównuj swojej podróży z innymi - Twoja droga jest unikalna i
              doskonała tak, jak jest."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
