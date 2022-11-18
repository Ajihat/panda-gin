export interface CartPopupProviderProps {
	children: React.ReactNode;
}

export interface ICartPopupContext {
	isCartPopupOpen: boolean;
	openCartPopup: () => void;
	closeCartPopup: () => void;
}
