export interface SubscribePopupProviderProps {
	children: React.ReactNode;
}

export interface ISubscribePopupContext {
	isSubscribePopupOpen: boolean;
	openSubscribePopup: () => void;
	closeSubscribePopup: () => void;
}
