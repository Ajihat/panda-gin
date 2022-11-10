export interface CartPopupProviderProps {
	children: React.ReactNode;
}

export interface ICartPopupContext {
	isCartPopupOpen: boolean;
	scrollingDirectionIsBeingChecked: boolean;
	openCartPopup: () => void;
	closeCartPopup: () => void;
}
