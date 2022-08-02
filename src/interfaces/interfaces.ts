export interface IAppState {
    isTopSliderClosed: boolean,
    isCurtainOpen: boolean,
    navBarsAreHidden: boolean,
    isUserLoggedIn: boolean,
    isLoginPopupOpen: boolean,
    isSubscribePopupOpen: boolean
}

export interface SingleQuestion {
    id: number,
    question: string,
    answer: string
}

export interface FaqQuestions {
    orders: SingleQuestion[],
    payments: SingleQuestion[],
    delivery: SingleQuestion[],
    complaint: SingleQuestion[],
    return: SingleQuestion[],
    warranty: SingleQuestion[],
    fake: SingleQuestion[],
    about: SingleQuestion[],
}

export interface FaqSubmenuLink {
    id: number,
    title: string,
    href: string
}