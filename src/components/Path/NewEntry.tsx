type NewEntryProps = {
  onCancel?: () => void;
};

export function NewEntry({ onCancel }: NewEntryProps) {
  const buttonInfo = [
    { icon: '🕯️', description: 'Spokojny' },
    { icon: '⚡', description: 'Energiczny' },
    { icon: '🙏', description: 'Wdzięczny' },
    { icon: '✨', description: 'Zainspirowany' },
    { icon: '🌱', description: 'Uziemiony' },
    { icon: '🌙', description: 'Połączony' },
    { icon: '🔥', description: 'Transformujący się' },
    { icon: '💚', description: 'Uzdrawiający się' },
  ];

  return (
    <div className="mb-6 w-full rounded-xl border border-blue-800/30 bg-slate-800/40 p-4 sm:p-6">
      <h3 className="mb-8 text-left text-lg font-medium text-blue-100">
        Dodaj nowy wpis
      </h3>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-left text-sm text-blue-200">
            Jak się dzisiaj czujesz?
          </label>

          <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
            {buttonInfo.map(({ icon, description }, idx) => (
              <button
                key={idx}
                type="button"
                className="flex flex-col items-center justify-center gap-1 rounded-lg border border-slate-600/30 bg-slate-700/30 p-2 text-center text-sm transition-all duration-200 hover:border-blue-600/30"
              >
                <div className="text-2xl leading-none">{icon}</div>

                <div className="mx-1 w-full overflow-hidden whitespace-normal break-words text-xs text-blue-200">
                  {description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-left text-sm text-blue-200">
            Miejsce (opcjonalnie)
          </label>
          <input
            type="text"
            placeholder="np. Jezioro Błędno, mój ogród..."
            className="w-full rounded-lg border border-blue-700/30 bg-slate-700/50 p-3 text-blue-100 placeholder-blue-400/50"
          />
        </div>

        <div>
          <label className="mb-2 block text-left text-sm text-blue-200">
            Twoje refleksje
          </label>
          <textarea
            className="resize-vertical focus-visible:ring-3 focus-visible:ring-ring/50 min-h-[8rem] w-full rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-base text-blue-100 outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Opisz swoje doświadczenia, uczucia, obserwacje..."
            rows={4}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex min-w-[120px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            <img
              src="/path/journal/ico1.svg"
              alt="accept icon"
              className="block h-[14px] w-[14px]"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
            Zapisz wpis
          </button>

          <button
            type="button"
            onClick={() => onCancel?.()}
            className="inline-flex min-w-[120px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 py-2 text-sm font-medium text-blue-200 transition-all hover:border-blue-500"
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
