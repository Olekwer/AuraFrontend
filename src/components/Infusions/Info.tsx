import { useState } from 'react';
import { TabButton } from '../Common/TabButton';
import { cards, Card } from './Card';

export function Info() {
  const [tab, setTab] = useState<'napary' | 'olejki'>('napary');

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6 pt-16">
      <h1 className="mb-4 text-4xl font-medium text-blue-100">
        Napary i Naturalne Maści
      </h1>
      <p className="mb-6 max-w-xl text-center text-xl text-blue-300/80">
        Uzdrawiająca moc natury w każdym łyku i dotyku
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <TabButton
          isActive={tab === 'napary'}
          onClick={() => setTab('napary')}
          activeClassName="bg-green-600"
        >
          Przegląd
        </TabButton>
        <TabButton
          isActive={tab === 'olejki'}
          onClick={() => setTab('olejki')}
          activeClassName="bg-purple-600"
        >
          Dziennik
        </TabButton>
      </div>

      {tab === 'napary' && (
        <div>
          <h2 className="mb-6 flex items-center text-2xl font-medium text-blue-100">
            <img
              src="/path/achievements/ico1.svg"
              alt="star icon"
              className="h-[21px] w-[21px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            Spersonalizowane dla Twojego żywiołu
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map(
              (
                {
                  icon,
                  title,
                  description,
                  time,
                  statusType,
                  dayPart,
                  benefits,
                },
                idx,
              ) => (
                <Card
                  key={idx}
                  icon={icon}
                  title={title}
                  description={description}
                  time={time}
                  statusType={statusType}
                  dayPart={dayPart}
                  benefits={benefits}
                />
              ),
            )}
          </div>
        </div>
      )}

      {tab === 'olejki' && <div></div>}
    </div>
  );
}
