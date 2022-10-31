export interface IAppState {
	isTopSliderClosed: boolean;
	isTopSliderClosedByUser: boolean;
	isCurtainOpen: boolean;
	navBarsAreHidden: boolean;
	isLoginPopupOpen: boolean;
	isSubscribePopupOpen: boolean;
	isCartPopupOpen: boolean;
	scrollingDirectionIsBeingChecked: boolean;
}

export interface IAppContext {
	isTopSliderClosed: boolean;
	isTopSliderClosedByUser: boolean;
	isCurtainOpen: boolean;
	navBarsAreHidden: boolean;
	isLoginPopupOpen: boolean;
	isSubscribePopupOpen: boolean;
	isCartPopupOpen: boolean;
	scrollingDirectionIsBeingChecked: boolean;
	openLoginPopup: () => void;
	closeLoginPopup: () => void;
	openSubscribePopup: () => void;
	closeSubscribePopup: () => void;
	openCurtain: () => void;
	closeCurtain: () => void;
	showNavbars: () => void;
	hideNavbars: () => void;
	closeTopSliderByUser: () => void;
	closeTopSlider: () => void;
	openTopSlider: () => void;
	handleLinkClick: (url: string, pathName: string, shouldOpenCurtain: boolean) => void;
	isLegalDrinkingAge: true | null;
	setIsLegalDrinkingAge: (newValue: true | null) => void;
	openCartPopup: () => void;
	closeCartPopup: () => void;
}

export interface AppProviderProps {
	children: React.ReactNode;
}
