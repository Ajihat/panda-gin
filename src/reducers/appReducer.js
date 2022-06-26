import { CLOSE_TOPSLIDER } from '../actions/appStateActions'

function appReducer(state, action) {
    if (action.type === CLOSE_TOPSLIDER) {
        return {
            ...state,
            isTopSliderClosed: true
        }
    }
}

export default appReducer 