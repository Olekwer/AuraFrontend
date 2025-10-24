import { create } from 'zustand';

type AudioState = {
  currentTitle: string | null;
  currentTime: string | null;
  visible: boolean;
  playing: boolean;

  showTrack: (title: string, time: string) => void;
  togglePlayPause: (title?: string) => void;
  stop: () => void;
  hide: () => void;
  setPlaying: (v: boolean) => void;
};

export const useAudioStore = create<AudioState>((set, get) => ({
  currentTitle: null,
  currentTime: null,
  visible: false,
  playing: false,

  showTrack: (title: string, time: string) =>
    set({
      currentTitle: title,
      currentTime: time,
      visible: true,
      playing: true,
    }),

  togglePlayPause: (title?: string) => {
    const s = get();
    if (title && s.currentTitle !== title) {
      set({ currentTitle: title, playing: true, visible: true });
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
    }),

  hide: () => set({ visible: false }),

  setPlaying: (v: boolean) => set({ playing: v }),
}));
