export interface IAppState {
    isTopSliderClosed: boolean;
    isCurtainOpen: boolean;
    navBarsAreHidden: boolean;
    isLoginPopupOpen: boolean;
    isSubscribePopupOpen: boolean;
    isCartPopupOpen: boolean;
    scrollingDirectionIsBeingChecked: boolean;
}

export interface IAppContext {
    isTopSliderClosed: boolean;
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
    closeTopSlider: () => void;
    openTopSlider: () => void;
    handleLinkClick: (url: string, pathName: string) => void;
    isLegalDrinkingAge: true | null;
    setIsLegalDrinkingAge: (newValue: true | null) => void;
    openCartPopup: () => void;
    closeCartPopup: () => void;
}

export interface AppProviderProps {
    children: React.ReactNode;
}
