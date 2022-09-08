export interface IAppState {
    isTopSliderClosed: boolean;
    isCurtainOpen: boolean;
    navBarsAreHidden: boolean;
    isLoginPopupOpen: boolean;
    isSubscribePopupOpen: boolean;
}

export interface IAppContext {
    isTopSliderClosed: boolean;
    isCurtainOpen: boolean;
    navBarsAreHidden: boolean;
    isLoginPopupOpen: boolean;
    isSubscribePopupOpen: boolean;
    openLoginPopup: () => void;
    closeLoginPopup: () => void;
    openSubscribePopup: () => void;
    closeSubscribePopup: () => void;
    openCurtain: () => void;
    closeCurtain: () => void;
    showNavbars: () => void;
    hideNavbars: () => void;
    closeTopSlider: () => void;
}

export interface AppProviderProps {
    children: React.ReactNode;
}
