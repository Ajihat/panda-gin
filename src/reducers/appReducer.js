import { CLOSE_TOPSLIDER, OPEN_CURTAIN, CLOSE_CURTAIN } from '../actions/appStateActions'

function appReducer(state, action) {
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
}

export default appReducer 