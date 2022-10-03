import { createContext, useCallback, useMemo, useReducer } from "react";
import { appReducer } from "./appReducer";
import {
    OPEN_LOGIN_POPUP,
    HIDE_LOGIN_POPUP,
    OPEN_SUBSCRIBE_POPUP,
    HIDE_SUBSCRIBE_POPUP,
    OPEN_CURTAIN,
    CLOSE_CURTAIN,
    SHOW_NAVBARS,
    HIDE_NAVBARS,
    CLOSE_TOPSLIDER,
    OPEN_TOPSLIDER,
    HIDE_CART_POPUP,
    OPEN_CART_POPUP,
} from "./appStateActions";

import { useLocalStorage } from "../../common/useLocalStorage/useLocalStorage";

import { IAppState, IAppContext, AppProviderProps } from "./AppContext.types";

export const AppContext = createContext<IAppContext | null>(null);

const initialAppState: IAppState = {
    isTopSliderClosed: false,
    isCurtainOpen: false,
    navBarsAreHidden: false,
    isLoginPopupOpen: false,
    isSubscribePopupOpen: false,
    isCartPopupOpen: false,
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [appState, dispatch] = useReducer(appReducer, initialAppState);

    const openLoginPopup = useCallback(() => {
        dispatch({ type: OPEN_LOGIN_POPUP });
    }, []);

    const closeLoginPopup = useCallback(() => {
        dispatch({ type: HIDE_LOGIN_POPUP });
    }, []);

    const openSubscribePopup = useCallback(() => {
        dispatch({ type: OPEN_SUBSCRIBE_POPUP });
    }, []);

    const closeSubscribePopup = useCallback(() => {
        dispatch({ type: HIDE_SUBSCRIBE_POPUP });
    }, []);

    const openCurtain = useCallback(() => {
        dispatch({ type: OPEN_CURTAIN });
    }, []);

    const closeCurtain = useCallback(() => {
        dispatch({ type: CLOSE_CURTAIN });
    }, []);

    const showNavbars = useCallback(() => {
        dispatch({ type: SHOW_NAVBARS });
    }, []);

    const hideNavbars = useCallback(() => {
        dispatch({ type: HIDE_NAVBARS });
    }, []);

    const closeTopSlider = useCallback(() => {
        dispatch({ type: CLOSE_TOPSLIDER });
    }, []);

    const openTopSlider = useCallback(() => {
        dispatch({ type: OPEN_TOPSLIDER });
    }, []);

    const openCartPopup = useCallback(() => {
        dispatch({ type: OPEN_CART_POPUP });
    }, []);

    const closeCartPopup = useCallback(() => {
        dispatch({ type: HIDE_CART_POPUP });
    }, []);

    const handleLinkClick = useCallback(
        (url: string, pathName: string) => {
            if (url !== pathName) {
                openCurtain();
            }
        },
        [openCurtain]
    );

    const { value: isLegalDrinkingAge, setNewValue: setIsLegalDrinkingAge } =
        useLocalStorage<true>("isLegalDrinkingAge");

    const AppContextValue = useMemo(() => {
        return {
            ...appState,
            openLoginPopup,
            closeLoginPopup,
            openSubscribePopup,
            closeSubscribePopup,
            openCurtain,
            closeCurtain,
            showNavbars,
            hideNavbars,
            closeTopSlider,
            openTopSlider,
            handleLinkClick,
            isLegalDrinkingAge,
            setIsLegalDrinkingAge,
            openCartPopup,
            closeCartPopup,
        };
    }, [
        appState,
        openLoginPopup,
        closeLoginPopup,
        openSubscribePopup,
        closeSubscribePopup,
        openCurtain,
        closeCurtain,
        showNavbars,
        hideNavbars,
        closeTopSlider,
        openTopSlider,
        handleLinkClick,
        isLegalDrinkingAge,
        setIsLegalDrinkingAge,
        openCartPopup,
        closeCartPopup,
    ]);

    return (
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    );
};
