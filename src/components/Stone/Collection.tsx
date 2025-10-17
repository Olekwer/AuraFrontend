export function CollectionTab({
  onSwitchToTwojKamien,
}: {
  onSwitchToTwojKamien: () => void;
}) {
  return (
    <div>
      <h2 className="mb-6 text-left text-2xl font-medium text-blue-100">
        Twoja kolekcja kamieni (0/8)
      </h2>
      <div
        className="mx-auto flex max-w-7xl flex-col items-center rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-8 text-blue-100"
        style={{ maxWidth: '1120px' }}
      >
        <img
          src="/stone/collection/ico1.svg"
          alt="collection icon"
          className="mb-6 h-14 w-14"
          style={{
            filter:
              'invert(40%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(90%)',
            opacity: 0.8,
          }}
        />
        <h3 className="mb-8 text-center text-xl font-medium text-blue-100">
          Rozpocznij swoją kolekcję
        </h3>
        <p className="mb-6 max-w-md text-center text-blue-300/80">
          Dodaj swoje pierwsze kamienie do kolekcji, aby śledzić swoją duchową
          podróż
        </p>
        <button
          type="button"
          onClick={onSwitchToTwojKamien}
          className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
        >
          Poznaj swój kamień
        </button>
      </div>
    </div>
  );
}
