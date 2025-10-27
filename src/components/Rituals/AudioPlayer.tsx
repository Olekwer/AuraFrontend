import React, { useEffect, useRef, useState } from 'react';
import { useAudioStore } from '../../store/audioStore';

function formatTime(seconds: number | null) {
  if (seconds == null || Number.isNaN(seconds)) return '0:00';
  const s = Math.floor(seconds);
  const mm = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return `${mm}:${ss.toString().padStart(2, '0')}`;
}

function getAudioSrcFromTitle(title: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9а-яёіїєґ\s-]/gi, '')
    .trim()
    .replace(/\s+/g, '-');
  return `/audio/${slug}.mp3`;
}

export function AudioPlayer({ className = '' }: { className?: string }) {
  const {
    currentTitle,
    visible,
    playing,
    togglePlayPause,
    stop,
    position,
    duration,
    progress,
    setPosition,
    setDuration,
    setProgress,
    setPlaying,
  } = useAudioStore();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!visible || !currentTitle) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
      setError(null);
      return;
    }

    const src = getAudioSrcFromTitle(currentTitle);

    if (!audioRef.current || !audioRef.current.src.endsWith(src)) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }

      const a = new Audio(src);
      audioRef.current = a;
      a.preload = 'metadata';
      a.crossOrigin = 'anonymous';
      a.volume = 1;

      const onLoadedMetadata = () => {
        const dur = isFinite(a.duration) ? a.duration : null;
        setDuration(dur);
      };

      const onTimeUpdate = () => {
        setPosition(a.currentTime);
      };

      const onEnded = () => {
        stop();
      };

      const onError = () => {
        setError("Couldn't download audio");
        setPlaying(false);
      };

      a.addEventListener('loadedmetadata', onLoadedMetadata);
      a.addEventListener('timeupdate', onTimeUpdate);
      a.addEventListener('ended', onEnded);
      a.addEventListener('error', onError);

      return () => {
        a.removeEventListener('loadedmetadata', onLoadedMetadata);
        a.removeEventListener('timeupdate', onTimeUpdate);
        a.removeEventListener('ended', onEnded);
        a.removeEventListener('error', onError);
      };
    }
  }, [visible, currentTitle]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio
        .play()
        .then(() => {
          setError(null);
        })
        .catch((err) => {
          console.warn('Audio play error:', err);
          setError('Auto-playback is blocked');
          setPlaying(false);
        });
    } else {
      audio.pause();
    }
  }, [playing, setPlaying]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(audio.duration) || audio.duration <= 0) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percent * audio.duration;
    audio.currentTime = newTime;
    setPosition(newTime);
    setProgress(percent * 100);
  };

  const handleToggle = () => {
    if (!currentTitle) return;
    togglePlayPause(currentTitle);
  };

  const handleClose = () => {
    stop();
  };

  if (!visible || !currentTitle) return null;

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
              <div
                onClick={handleSeek}
                className="relative h-[6px] w-full cursor-pointer overflow-hidden rounded-full bg-slate-800"
                title="Tap to fast-forward or rewind"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-blue-400 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="whitespace-nowrap text-[10.5px] text-blue-400">
                {`${formatTime(position)} / ${formatTime(duration ?? null)}`}
              </span>
            </div>

            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const audio = audioRef.current;
                if (!audio) return;
                audio.muted = !audio.muted;
              }}
              className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium outline-none transition-all"
            >
              <img
                src="/rituals/audioPlayer/ico2.svg"
                alt="sound icon"
                className="h-[14px] w-[14px] filter"
                style={{ filter: 'invert(100%) brightness(100%)' }}
              />
            </button>

            <button
              onClick={() => {
                const src = getAudioSrcFromTitle(currentTitle);
                const a = document.createElement('a');
                a.href = src;
                a.download = '';
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}
              className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-blue-700/30 bg-slate-700/50 px-3 text-sm font-medium outline-none transition-all"
            >
              <img
                src="/stone/appointment/download-icon.svg"
                alt="download icon"
                className="h-[14px] w-[14px] filter"
                style={{ filter: 'invert(100%) brightness(100%)' }}
              />
            </button>

            <button
              onClick={handleClose}
              className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent bg-transparent px-3 text-sm font-medium text-blue-300/80 outline-none transition-all hover:text-blue-100"
              aria-label="Close player"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
