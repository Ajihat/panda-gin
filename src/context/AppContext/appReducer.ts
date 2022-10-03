import {
    CLOSE_TOPSLIDER,
    OPEN_TOPSLIDER,
    OPEN_CURTAIN,
    CLOSE_CURTAIN,
    SHOW_NAVBARS,
    HIDE_NAVBARS,
    OPEN_LOGIN_POPUP,
    HIDE_LOGIN_POPUP,
    OPEN_SUBSCRIBE_POPUP,
    HIDE_SUBSCRIBE_POPUP,
    OPEN_CART_POPUP,
    HIDE_CART_POPUP,
} from "./appStateActions";
import { IAppState } from "./AppContext.types";

export const appReducer = (
    state: IAppState,
    action: { type: string }
): IAppState => {
    if (action.type === CLOSE_TOPSLIDER) {
        return {
            ...state,
            isTopSliderClosed: true,
        };
    }
    if (action.type === OPEN_TOPSLIDER) {
        return {
            ...state,
            isTopSliderClosed: false,
        };
    }
    if (action.type === OPEN_CURTAIN) {
        return {
            ...state,
            isCurtainOpen: true,
        };
    }
    if (action.type === CLOSE_CURTAIN) {
        return {
            ...state,
            isCurtainOpen: false,
        };
    }
    if (action.type === SHOW_NAVBARS) {
        return {
            ...state,
            navBarsAreHidden: false,
        };
    }
    if (action.type === HIDE_NAVBARS) {
        return {
            ...state,
            navBarsAreHidden: true,
        };
    }
    if (action.type === OPEN_LOGIN_POPUP) {
        return {
            ...state,
            isLoginPopupOpen: true,
        };
    }
    if (action.type === HIDE_LOGIN_POPUP) {
        return {
            ...state,
            isLoginPopupOpen: false,
        };
    }
    if (action.type === OPEN_SUBSCRIBE_POPUP) {
        return {
            ...state,
            isSubscribePopupOpen: true,
        };
    }
    if (action.type === HIDE_SUBSCRIBE_POPUP) {
        return {
            ...state,
            isSubscribePopupOpen: false,
        };
    }
    if (action.type === HIDE_CART_POPUP) {
        return {
            ...state,
            isCartPopupOpen: false,
        };
    }
    if (action.type === OPEN_CART_POPUP) {
        return {
            ...state,
            isCartPopupOpen: true,
        };
    }
    return state; // if there is no match
};
