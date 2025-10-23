import React from 'react';
import { useInfusionInstructionStore } from '../../store/infusionInstructionStore';

export const cards = [
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <img
          src="/infusions/ico1.svg"
          alt="drop icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
    ),
    title: 'Napar z melisy i lawendy',
    description: 'Kojący napar na spokój umysłu i emocjonalną równowagę',
    time: '5',
    statusType: 'łatwy',
    dayPart: 'wieczór',
    benefits: ['Uspokaja nerwy', 'Poprawia sen', 'Łagodzi lęk'],
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
    title: 'Mieszanka Księżycowa',
    description: 'Mistyczna mieszanka na pełnię dla wzmocnienia intuicji',
    time: '8',
    statusType: 'średni',
    dayPart: 'pełnia księżyca',
    benefits: ['Wzmacnia intuicję', 'Poprawia sny', 'Harmonizuje z cyklami'],
  },
  {
    icon: (
      <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-gold-900 to-yellow-500 p-3">
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
    title: 'Herbata Ochronna',
    description: 'Mocna mieszanka dla ochrony energetycznej i oczyszczenia',
    time: '15',
    statusType: 'trudny',
    dayPart: 'kiedy potrzebujesz ochrony',
    benefits: [
      'Oczyszcza aurę',
      'Chroni przed negatywną energią',
      'Wzmacnia odporność',
    ],
  },
];

export function Card({
  icon,
  title,
  description,
  time,
  statusType,
  dayPart,
  benefits,
  isFavourite,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  statusType: string;
  dayPart: string;
  benefits: string[];
  isFavourite?: boolean;
}) {
  const { setOpenInstruction } = useInfusionInstructionStore();

  const handleOpen = () => setOpenInstruction(title);

  return (
    <div className="w-full">
      <div className="flex w-full max-w-full flex-col gap-4 rounded-xl border border-blue-800/30 bg-slate-800/40 p-4 transition-all duration-300 hover:bg-slate-700/40 sm:p-6">
        <div className="flex w-full items-start gap-3 sm:gap-4">
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
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-gold-900/30 bg-gold-900/20 px-2 py-0.5 text-xs font-medium text-gold-200">
                  Dla Ciebie
                </span>
              )}
            </div>

            <p
              className="mb-2 line-clamp-2 text-left text-sm text-blue-300/80"
              title={description}
            >
              {description}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-3 text-sm mb-4">
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

              <span className="flex min-w-0 items-center gap-1 text-sm text-blue-400/60">
                {dayPart === 'wieczór' ? (
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
                ) : (
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
                )}
                <span className="truncate">{dayPart}</span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-left text-sm font-medium text-blue-200">
            Korzyści:
          </h4>
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit, idx) => (
              <span
                key={idx}
                className="inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-1 flex w-full flex-wrap items-center gap-3">
          <button
            onClick={handleOpen}
            className="inline-flex h-8 min-w-[140px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-green-600 px-3 text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-green-500/30"
          >
            <img
              src="/infusions/little-ico2.svg"
              alt="button little moon icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            <span className="ml-1">Zobacz przepis</span>
          </button>

          <button className="inline-flex h-8 min-w-[140px] items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium text-blue-200 transition-colors">
            <img
              src="/infusions/little-ico3.svg"
              alt="little moon icon"
              className="h-[14px] w-[14px] filter"
              style={{
                filter: 'invert(100%) brightness(100%)',
              }}
            />
            <span className="ml-1">Dodaj do ulubionych</span>
          </button>
        </div>
      </div>
    </div>
  );
}
