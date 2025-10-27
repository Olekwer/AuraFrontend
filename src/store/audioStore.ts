import { create } from 'zustand';

type AudioState = {
  currentTitle: string | null;
  currentTime: string | null;

  visible: boolean;
  playing: boolean;

  position: number;
  duration: number | null;
  progress: number;

  showTrack: (title: string, time: string) => void;
  togglePlayPause: (title?: string) => void;
  stop: () => void;
  hide: () => void;
  setPlaying: (v: boolean) => void;

  setPosition: (seconds: number) => void;
  setDuration: (seconds: number | null) => void;
  setProgress: (percent: number) => void;
};

export const useAudioStore = create<AudioState>((set, get) => ({
  currentTitle: null,
  currentTime: null,
  visible: false,
  playing: false,

  position: 0,
  duration: null,
  progress: 0,

  showTrack: (title: string, time: string) =>
    set({
      currentTitle: title,
      currentTime: time,
      visible: true,
      playing: true,
      position: 0,
      duration: null,
      progress: 0,
    }),

  togglePlayPause: (title?: string) => {
    const s = get();
    if (title && s.currentTitle !== title) {
      set({
        currentTitle: title,
        playing: true,
        visible: true,
        position: 0,
        duration: null,
        progress: 0,
      });
      return;
    }
    set({ playing: !s.playing });
  },

  stop: () =>
    set({
      currentTitle: null,
      currentTime: null,
      visible: false,
      playing: false,
      position: 0,
      duration: null,
      progress: 0,
    }),

  hide: () => set({ visible: false }),

  setPlaying: (v: boolean) => set({ playing: v }),

  setPosition: (seconds: number) =>
    set((state) => {
      const dur = state.duration ?? null;
      let percent = 0;
      if (dur && isFinite(dur) && dur > 0) {
        percent = (seconds / dur) * 100;
        if (!isFinite(percent)) percent = 0;
        percent = Math.max(0, Math.min(100, percent));
      } else {
        percent = 0;
      }
      return {
        position: seconds,
        progress: percent,
      };
    }),

  setDuration: (seconds: number | null) =>
    set((state) => {
      let percent = state.progress;
      if (seconds && isFinite(seconds) && seconds > 0) {
        percent =
          isFinite(state.position) && seconds > 0
            ? (state.position / seconds) * 100
            : 0;
        if (!isFinite(percent)) percent = 0;
        percent = Math.max(0, Math.min(100, percent));
      } else {
        percent = 0;
      }
      return {
        duration: seconds,
        progress: percent,
      };
    }),

  setProgress: (percent: number) =>
    set((state) => {
      const clamped = Math.max(
        0,
        Math.min(100, Number.isFinite(percent) ? percent : 0),
      );
      const pos =
        state.duration && isFinite(state.duration)
          ? (clamped / 100) * state.duration
          : state.position;
      return {
        progress: clamped,
        position: pos,
      };
    }),
}));
