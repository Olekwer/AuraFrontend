export const bigCards = [
  {
    iconClassName: 'w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto',
    title: 'Olejek Uspokajający',
    targetType: 'do masażu',
    description: 'Łagodzący olejek do masażu skroni i nadgarstków',
    ingredients: ['Olej jojoba', 'Olejek lawendowy'],
    methodOfUse: 'Aplikuj na skronie, nadgarstki i serce przed snem',
  },
  {
    iconClassName: 'w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-4 mx-auto',
    title: 'Olejek Energetyzujący',
    targetType: 'do aromaterapii',
    description: 'Pobudzający blend do dyfuzora lub inhalacji',
    ingredients: ['Olejek rozmarynowy', 'Olejek z grejpfruta'],
    methodOfUse: 'Dodaj 3-5 kropli do dyfuzora rano lub wdychaj z dłoni',
  },
  {
    iconClassName: 'w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-brown-500 flex items-center justify-center mb-4 mx-auto',
    title: 'Balsam Uziemiający',
    targetType: 'balsam',
    description: 'Gęsty balsam do stóp dla głębokiego uziemienia',
    ingredients: ['Wosk pszczeli', 'Olej z drzewa herbacianego'],
    methodOfUse: 'Masuj stopy przed kontaktem z ziemią lub przed medytacją',
  },
];

export function BigCard({
  iconClassName,
  title,
  targetType,
  description,
  ingredients,
  methodOfUse,
}: {
  iconClassName: string;
  title: string;
  targetType: string;
  description: string;
  ingredients: string[];
  methodOfUse: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-700/40">
      <div className={iconClassName}>
        <img
          src="/infusions/ico1.svg"
          alt="drop icon"
          className="h-[21px] w-[21px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
      </div>
      <h3 className="mb-2 text-center text-lg font-medium text-blue-100">
        {title}
      </h3>
      <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mx-auto mb-3 block w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-purple-500/30 bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
        {targetType}
      </span>
      <p className="mb-4 text-center text-sm text-blue-300/80">{description}</p>
      <div className="space-y-3">
        <div className="text-left">
          <h5 className="mb-1 text-sm font-medium text-blue-200">Składniki:</h5>
          <div className="flex flex-wrap gap-1">
            {ingredients.map((ingredient) => (
              <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-blue-500/30 bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
                {ingredient}
              </span>
            ))}
            <span className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border border-slate-500/30 bg-slate-500/20 px-2 py-0.5 text-xs font-medium text-slate-300 transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3">
              +2 więcej
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-purple-900/30 p-3 text-left">
          <h5 className="mb-1 text-sm font-medium text-purple-200">
            Sposób użycia:
          </h5>
          <p className="text-xs text-purple-100">{methodOfUse}</p>
        </div>
      </div>
      <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-4 inline-flex h-9 w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-purple-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-purple-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-white">
        <img
          src="/infusions/button-icon1.svg"
          alt="drop icon"
          className="h-[14px] w-[14px] filter"
          style={{
            filter: 'invert(100%) brightness(100%)',
          }}
        />
        Zobacz pełny przepis
      </button>
    </div>
  );
}
