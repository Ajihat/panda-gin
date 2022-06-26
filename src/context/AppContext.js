import { createContext, useReducer } from "react"
//reducers
import appReducer from '../reducers/appReducer'

const AppContext = createContext();

const initialAppState = {
    isTopSliderClosed: false
}


const AppProvider = ({ children }) => {

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

export { AppContext, AppProvider };