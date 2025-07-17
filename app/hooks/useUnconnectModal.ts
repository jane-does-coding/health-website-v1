import { create } from "zustand";

interface UnconnectModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useUnconnectModal = create<UnconnectModalStore>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useUnconnectModal;
