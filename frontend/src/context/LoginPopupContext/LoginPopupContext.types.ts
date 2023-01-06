export interface LoginPopupProviderProps {
	children: React.ReactNode;
}

export interface ILoginPopupContext {
	isLoginPopupOpen: boolean;
	openLoginPopup: () => void;
	closeLoginPopup: () => void;
}
