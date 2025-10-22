import { create } from 'zustand';

type RitualInstructionState = {
  isOpen: boolean;
  selectedTitle: string | null;
  setOpenInstruction: (title: string) => void;
  closeInstruction: () => void;
};

export const useRitualInstructionStore = create<RitualInstructionState>(
  (set) => ({
    isOpen: false,
    selectedTitle: null,
    setOpenInstruction: (title) =>
      set(() => ({ isOpen: true, selectedTitle: title })),
    closeInstruction: () => set(() => ({ isOpen: false, selectedTitle: null })),
  }),
);
