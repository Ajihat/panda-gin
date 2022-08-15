export interface IAppState {
    isTopSliderClosed: boolean,
    isCurtainOpen: boolean,
    navBarsAreHidden: boolean,
    isUserLoggedIn: boolean,
    isLoginPopupOpen: boolean,
    isSubscribePopupOpen: boolean
}

export interface IAppContext {
    isTopSliderClosed: boolean,
    isCurtainOpen: boolean,
    navBarsAreHidden: boolean,
    isUserLoggedIn: boolean,
    isLoginPopupOpen: boolean,
    isSubscribePopupOpen: boolean,
    openLoginPopup: () => void,
    closeLoginPopup: () => void,
    openSubscribePopup: () => void,
    closeSubscribePopup: () => void,
    openCurtain: () => void,
    closeCurtain: () => void,
    showNavbars: () => void,
    hideNavbars: () => void,
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

export interface AppRoutes {
    shop: string,
    faq: string
}

export interface ILoginInputs {
    username: string,
    password: string
}


export interface IRegisterInputs {
    username: string,
    lastname: string,
    firstname: string,
    password: string,
    termsChecked?: boolean

}