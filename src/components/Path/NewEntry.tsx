export function NewEntry() {
  const buttonInfo = [
    {
      icon: '🕯️',
      description: 'Spokojny',
    },
    {
      icon: '⚡',
      description: 'Energiczny',
    },
    {
      icon: '🙏',
      description: 'Wdzięczny',
    },
    {
      icon: '✨',
      description: 'Zainspirowany',
    },
    {
      icon: '🌱',
      description: 'Uziemiony',
    },
    {
      icon: '🌙',
      description: 'Połączony',
    },
    {
      icon: '🔥',
      description: 'Transformujący się',
    },
    {
      icon: '💚',
      description: 'Uzdrawiający się',
    },
  ];

  return (
    <div className="mb-6 flex flex-col gap-6 rounded-xl border border-blue-800/30 bg-slate-800/40 p-6">
      <h3 className="mb-4 text-lg font-medium text-blue-100">
        Dodaj nowy wpis
      </h3>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm text-blue-200">
            Jak się dzisiaj czujesz?
          </label>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
            {buttonInfo.map(({ icon, description }, idx) => (
              <button
                key={idx}
                className="rounded-lg border border-slate-600/30 bg-slate-700/30 p-3 text-center transition-all duration-200 hover:border-blue-600/30"
              >
                <div className="mb-1 text-2xl">{icon}</div>
                <div className="text-xs text-blue-200">{description}</div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-blue-200">
            Miejsce (opcjonalnie)
          </label>
          <input
            type="text"
            placeholder="np. Jezioro Błędno, mój ogród..."
            className="w-full rounded-lg border border-blue-700/30 bg-slate-700/50 p-3 text-blue-100 placeholder-blue-400/50"
          ></input>
        </div>
        <div>
          <label className="mb-2 block text-sm text-blue-200">
            Twoje refleksje
          </label>
          <textarea
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content flex min-h-32 w-full resize-none rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-base text-blue-100 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="Opisz swoje doświadczenia, uczucia, obserwacje..."
            rows={4}
          ></textarea>
        </div>
        <div className="flex space-x-3">
          <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-green-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-white">
            <img
              src="/path/journal/ico1.svg"
              alt="accept icon"
              className="h-[14px] w-[14px]"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Zapisz wpis
          </button>
          <button className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-4 py-2 text-sm font-medium text-blue-200 outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
