import { useAudioStore } from '../../store/audioStore';

export function AudioPlayer({ className = '' }: { className?: string }) {
  const { currentTitle, currentTime, visible, playing, togglePlayPause } =
    useAudioStore();

  if (!visible || !currentTitle) return null;

  const handleToggle = () => {
    togglePlayPause(currentTitle);
  };

  const iconSrc = playing
    ? '/rituals/audioPlayer/ico1.svg'
    : '/rituals/soundCard/ico1.svg';

  return (
    <div
      className={`sticky top-[86px] z-30 mx-auto w-full max-w-[1129px] ${className}`}
    >
      <div className="flex flex-col gap-6 rounded-xl border border-blue-700/40 bg-slate-900/90 p-4 backdrop-blur-lg">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggle}
            className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium outline-none transition-all hover:bg-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <img
              src={iconSrc}
              alt={playing ? 'pause icon' : 'play icon'}
              className="h-[14px] w-[14px] filter"
              style={{ filter: 'invert(100%) brightness(100%)' }}
            />
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-left text-sm font-medium text-blue-100">
              {currentTitle}
            </p>
            <div className="mt-1 flex items-center space-x-2">
              <div className="progress-bar-bg-color h-[3.5px] w-full overflow-hidden rounded-full">
                <div
                  style={{ width: '0%' }}
                  className="h-full bg-blue-400 transition-all"
                />
              </div>
              <span className="whitespace-nowrap text-[10.5px] text-blue-400">
                {`${'0'}:${'00'} /${currentTime}`}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium outline-none transition-all">
              <img
                src="/rituals/audioPlayer/ico2.svg"
                alt="sound icon"
                className="h-[14px] w-[14px] filter"
                style={{ filter: 'invert(100%) brightness(100%)' }}
              />
            </button>
            <button className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium outline-none transition-all">
              <img
                src="/stone/appointment/download-icon.svg"
                alt="download icon"
                className="h-[14px] w-[14px] filter"
                style={{ filter: 'invert(100%) brightness(100%)' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
