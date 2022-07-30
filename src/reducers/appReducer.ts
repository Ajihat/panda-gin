import { CLOSE_TOPSLIDER, OPEN_CURTAIN, CLOSE_CURTAIN, SHOW_NAVBARS, HIDE_NAVBARS } from '../actions/appStateActions'
import { IAppState } from "../interfaces/interfaces"



export const appReducer = (state: IAppState, action: { type: string }): IAppState => {
    if (action.type === CLOSE_TOPSLIDER) {
        return {
            ...state,
            isTopSliderClosed: true
        }
    }
    if (action.type === OPEN_CURTAIN) {
        return {
            ...state,
            isCurtainOpen: true
        }
    }
    if (action.type === CLOSE_CURTAIN) {
        return {
            ...state,
            isCurtainOpen: false
        }
    }
    if (action.type === SHOW_NAVBARS) {
        return {
            ...state,
            navBarsAreHidden: false
        }
    }
    if (action.type === HIDE_NAVBARS) {
        return {
            ...state,
            navBarsAreHidden: true
        }
    }
    return state // if there is no match
}

