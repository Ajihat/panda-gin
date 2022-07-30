import React, { createContext, useReducer, FC, useContext } from 'react'
//reducers
import { appReducer } from '../reducers/appReducer'
//interface
import { IAppState } from '../interfaces/interfaces'




const AppContext = createContext({})

const initialAppState: IAppState = {
    isTopSliderClosed: false,
    isCurtainOpen: false,
    navBarsAreHidden: false
}

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {

    const [appState, dispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppContext.Provider value={{
            ...appState,
            dispatch

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }





