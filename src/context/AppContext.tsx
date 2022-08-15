import React, { createContext, useReducer, FC } from 'react'
//reducers
import { appReducer } from '../reducers/appReducer'
//actions
import {
    OPEN_LOGIN_POPUP,
    HIDE_LOGIN_POPUP,
    OPEN_SUBSCRIBE_POPUP,
    HIDE_SUBSCRIBE_POPUP,
    OPEN_CURTAIN,
    CLOSE_CURTAIN,
    SHOW_NAVBARS,
    HIDE_NAVBARS
} from '../actions/appStateActions'
//interfaces
import { IAppState, IAppContext } from '../interfaces/interfaces'




const AppContext = createContext<IAppContext | null>(null)

const initialAppState: IAppState = {
    isTopSliderClosed: false,
    isCurtainOpen: false,
    navBarsAreHidden: false,
    isUserLoggedIn: false,
    isLoginPopupOpen: false,
    isSubscribePopupOpen: false
}

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {

    const [appState, dispatch] = useReducer(appReducer, initialAppState);

    function openLoginPopup(): void {
        dispatch({ type: OPEN_LOGIN_POPUP });
    }

    function closeLoginPopup(): void {
        dispatch({ type: HIDE_LOGIN_POPUP });
    }

    function openSubscribePopup(): void {
        dispatch({ type: OPEN_SUBSCRIBE_POPUP })
    }

    function closeSubscribePopup(): void {
        dispatch({ type: HIDE_SUBSCRIBE_POPUP })
    }

    function openCurtain(): void {
        dispatch({ type: OPEN_CURTAIN })
    }

    function closeCurtain(): void {
        dispatch({ type: CLOSE_CURTAIN })
    }

    function showNavbars(): void {
        dispatch({ type: SHOW_NAVBARS })
    }

    function hideNavbars(): void {
        dispatch({ type: HIDE_NAVBARS })
    }

    return (
        <AppContext.Provider value={{
            ...appState,
            openLoginPopup,
            closeLoginPopup,
            openSubscribePopup,
            closeSubscribePopup,
            openCurtain,
            closeCurtain,
            showNavbars,
            hideNavbars

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }





