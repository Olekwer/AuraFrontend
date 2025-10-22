import { create } from 'zustand';

type InfusionInstructionState = {
  isOpen: boolean;
  selectedTitle: string | null;
  setOpenInstruction: (title: string) => void;
  closeInstruction: () => void;
};

export const useInfusionInstructionStore = create<InfusionInstructionState>(
  (set) => ({
    isOpen: false,
    selectedTitle: null,
    setOpenInstruction: (title) =>
      set(() => ({ isOpen: true, selectedTitle: title })),
    closeInstruction: () => set(() => ({ isOpen: false, selectedTitle: null })),
  }),
);
