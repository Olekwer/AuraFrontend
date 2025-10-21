import React, { useEffect, useRef } from 'react';

export const descriptions = [
  {
    title: 'Kryształ górski',
    description:
      'Uniwersalny wzmacniacz energii, oczyszcza i harmonizuje wszystkie czakry',
    medicinalProperties: [
      'Wzmacnia inne kamienie',
      'Oczyszcza przestrzeń',
      'Harmonizuje energie',
      'Wzmacnia intencje',
      'Chroni przed negatywnością',
    ],
    stoneCare: [
      'Ładuj w każdym świetle',
      'Czyść pod bieżącą wodą',
      'Programuj przez medytację',
      'Przechowuj z innymi kamieniami',
    ],
    rituals: [
      'Programowanie intencji',
      'Oczyszczanie przestrzeni',
      'Wzmacnianie innych kamieni',
      'Tworzenie kryształowych siatek',
    ],
    chakra: 'Wszystkie',
    hardness: '7',
    origin: 'Cały świat',
    cost: '20-100 zł',
  },
  {
    title: 'Czarny turmalin',
    description: 'Najpotężniejszy kamień ochronny, odpycha negatywną energię',
    medicinalProperties: [
      'Mocna ochrona energetyczna',
      'Uziemia nadmiar energii',
      'Neutralizuje stres',
      'Chroni przed klątwami',
      'Wzmacnia pole auryczne',
    ],
    stoneCare: [
      'Ładuj na ziemi',
      'Czyść solą morską',
      'Regularnie oczyszczaj energetycznie',
      'Przechowuj osobno',
    ],
    rituals: [
      'Noszenie przy sobie codziennie',
      'Umieszczanie w rogach domu',
      'Medytacja uziemiająca',
      'Tworzenie barier ochronnych',
    ],
    chakra: 'Podstawowa',
    hardness: '7-7.5',
    origin: 'Brazylia, Afganistan',
    cost: '60-250 zł',
  },
  {
    title: 'Różowy kwarc',
    description:
      'Kamień bezwarunkowej miłości, otwiera serce na głębokie uzdrowienie',
    medicinalProperties: [
      'Przyciąga miłość',
      'Uzdrawia emocjonalne rany',
      'Wzmacnia samoakceptację',
      'Łagodzi żal i smutek',
      'Harmonizuje relacje',
    ],
    stoneCare: [
      'Ładuj w delikatnym świetle',
      'Czyść różaną wodą',
      'Unikaj silnego słońca',
      'Przechowuj blisko serca',
    ],
    rituals: [
      'Medytacja sercowa',
      'Kąpiele z różowym kwarcem',
      'Noszenie na sercu',
      'Rytuały uzdrawiania relacji',
    ],
    chakra: 'Sercowa',
    hardness: '7',
    origin: 'Brazylia, Madagaskar',
    cost: '25-120 zł',
  },
  {
    title: 'Labradoryt',
    description: 'Kamień magii i transformacji, wzmacnia zdolności psychiczne',
    medicinalProperties: [
      'Wzmacnia intuicję',
      'Chroni podczas praktyk duchowych',
      'Otwiera psychiczne zdolności',
      'Pomaga w astralnych podróżach',
      'Wzmacnia aurę',
    ],
    stoneCare: [
      'Ładuj w świetle księżyca',
      'Czyść kadzidłem',
      'Przechowuj w ciemności',
      'Unikaj mocnego światła',
    ],
    rituals: [
      'Medytacja z kamieniem na czole',
      'Praktyki wróżbiarskie',
      'Ochrona podczas snów',
      'Rytuały pełni księżyca',
    ],
    chakra: 'Trzeciego oka',
    hardness: '6-6.5',
    origin: 'Kanada, Finlandia',
    cost: '80-400 zł',
  },
];

export function DescriptionModal({
  title,
  description,
  medicinalProperties,
  stoneCare,
  rituals,
  chakra,
  hardness,
  origin,
  cost,
  onClose,
}: {
    title: string;
    description: string;
    medicinalProperties: string[];
    stoneCare: string[];
    rituals: string[];
    chakra: string;
    hardness: string;
    origin: string;
    cost: string;
} & {onClose: () => void}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dialogRef.current?.querySelector<HTMLButtonElement>('button[data-close]')?.focus();
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm" onMouseDown={handleBackdropClick} aria-modal="true" role="dialog">
      <div ref={dialogRef} className="flex max-h-[90vh] w-full max-w-4xl flex-col gap-6 overflow-y-auto rounded-xl border border-blue-800/30 bg-slate-800/90 p-8 text-left">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="mb-2 text-3xl font-medium text-blue-100">{title}</h3>
            <p className="mb-4 text-lg text-blue-300/80">{description}</p>
          </div>
          <button data-close onClick={onClose} className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
            Zamknij
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h4 className="mb-4 text-xl font-medium text-blue-100">
              Właściwości lecznicze:
            </h4>
            <div className="space-y-3">
              {medicinalProperties.map((property, idx) => (
                <div key={idx} className="flex items-center text-blue-300/80">
                  <img
                    src="/stone/appointment/ico4.svg"
                    alt="little star shine icon"
                    className="w-[14px] h-[14px] flex-shrink-0 mr-3"
                    style={{ filter: 'invert(100%) brightness(100%)' }}
                  />
                  {property}
                </div>
              ))}
            </div>
            <h4 className="mb-4 mt-8 text-xl font-medium text-blue-100">
              Rytuały i zastosowania:
            </h4>
            <div className="space-y-3">
              {rituals.map((ritual, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm text-white">
                    {idx + 1}
                  </span>
                  <span className="text-purple-200">{ritual}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-medium text-blue-100">
              Pielęgnacja kamienia:
            </h4>
            <div className="mb-8 space-y-3">
              {stoneCare.map((care, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="mr-3 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm text-white">
                    {idx + 1}
                  </span>
                  <span className="text-green-200">{care}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-blue-700/30 bg-blue-900/30 p-6">
              <h5 className="mb-3 font-medium text-blue-200">
                Dane techniczne:
              </h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-300">Czakra:</p>
                  <p className="font-medium text-blue-100">{chakra}</p>
                </div>
                <div>
                  <p className="text-blue-300">Twardość:</p>
                  <p className="font-medium text-blue-100">{hardness}</p>
                </div>
                <div>
                  <p className="text-blue-300">Pochodzenie:</p>
                  <p className="font-medium text-blue-100">{origin}</p>
                </div>
                <div>
                  <p className="text-blue-300">Cena:</p>
                  <p className="font-medium text-blue-100">{cost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-purple-700/30 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6">
          <p className="mb-2 text-sm text-purple-200">Mistyczna rada:</p>
          <p className="italic text-purple-100">
            "Kamień wybiera swojego właściciela tak samo, jak właściciel wybiera
            kamień. Zaufaj swojej intuicji i pozwól, aby energia minerału
            przepływała przez Ciebie."
          </p>
        </div>
      </div>
    </div>
  );
}
