import React from 'react';
import { useRitualInstructionStore } from '../../store/ritualInstructionStore';

export const cards = [
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <img
          src="/rituals/ico1.svg"
          alt="wave icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Rytuał Oczyszczenia Wodą',
    description:
      'Głębokie oczyszczenie emocjonalne przez połączenie z energią wody',
    time: '15',
    statusType: 'łatwy',
    dayPart: 'wschód słońca',
    isFavourite: true,
  },
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-slate-400 to-blue-400 p-3">
        <img
          src="/path/achievements/ico8.svg"
          alt="moon icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Rytuał Pełni Księżyca',
    description: 'Uniwersalny rytuał manifestacji podczas pełni księżyca',
    time: '30',
    statusType: 'średni',
    dayPart: 'pełnia księżyca',
  },
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 p-3">
        <img
          src="/path/achievements/ico1.svg"
          alt="star icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Balansowanie Czakr',
    description: 'Kompleksowe oczyszczenie i wyrównanie wszystkich czakr',
    time: '35',
    statusType: 'trudny',
    dayPart: 'każda pora',
  },
];

export function Card({
  icon,
  title,
  description,
  time,
  statusType,
  dayPart,
  isFavourite,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  statusType: string;
  dayPart: string;
  isFavourite?: boolean;
}) {
  const { setOpenInstruction } = useRitualInstructionStore();

  const handleOpen = () => setOpenInstruction(title);

  return (
    <div className="flex w-full max-w-full flex-col gap-4 rounded-xl border border-blue-800/30 bg-slate-800/40 p-4 transition-all duration-300 hover:bg-slate-700/40 sm:p-5">
      <div className="flex w-full items-start space-x-3 sm:space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="rounded-full p-2 sm:p-3" aria-hidden>
            <div className="flex h-10 w-10 items-center justify-center sm:h-[46px] sm:w-[46px]">
              {icon}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-1 flex items-center gap-2">
            <h3
              className="text-base font-medium text-blue-100 sm:text-lg text-left"
              title={title}
            >
              {title}
            </h3>

            {isFavourite && (
              <span className="inline-flex max-w-[45%] shrink-0 items-center gap-1 rounded-md border border-gold-900/30 bg-gold-900/20 px-2 py-0.5 text-xs font-medium text-gold-200">
                Dla Ciebie
              </span>
            )}
          </div>

          <p
            className="mb-2 text-left text-sm text-blue-300/80"
            title={description}
          >
            {description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-sm text-blue-300">
              <img
                src="/infusions/little-ico1.svg"
                alt="little time icon"
                className="h-[14px] w-[14px] filter"
                style={{
                  filter: 'invert(100%) brightness(100%)',
                }}
              />
              {time} min
            </span>

            {statusType === 'łatwy' ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-300">
                {statusType}
              </span>
            ) : statusType === 'średni' ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-yellow-500/30 bg-yellow-500/20 px-2 py-0.5 text-xs font-medium text-yellow-300">
                {statusType}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-md border border-red-500/30 bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-300">
                {statusType}
              </span>
            )}

            <span className="flex items-center gap-1 text-sm text-blue-400/60">
              {dayPart === 'wschód słońca' ? (
                <img
                  src="/infusions/little-ico4.svg"
                  alt="little sun icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                    opacity: 0.8,
                  }}
                />
              ) : (
                <img
                  src="/path/achievements/ico8.svg"
                  alt="little moon icon"
                  className="h-[14px] w-[14px] filter"
                  style={{
                    filter:
                      'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
                    opacity: 0.8,
                  }}
                />
              )}
              <span className="truncate">{dayPart}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex w-full flex-wrap items-center gap-3">
        <button
          onClick={handleOpen}
          className="inline-flex h-8 min-w-[140px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:min-w-[150px]"
        >
          Zobacz instrukcję
        </button>

        <button className="inline-flex h-8 min-w-[110px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 transition-colors">
          <img
            src="/ico10.svg"
            alt="headphones icon"
            className="h-[14px] w-[14px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          <span className="ml-1">Audio</span>
        </button>

        <button className="inline-flex h-8 min-w-[110px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 transition-colors">
          Oznacz jako wykonane
        </button>
      </div>
    </div>
  );
}
