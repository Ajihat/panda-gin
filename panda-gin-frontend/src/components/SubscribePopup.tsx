import { FC, useRef, useEffect, useState } from 'react'
import ReactDom from 'react-dom'
//components
import Header from "./Header"
import PrimaryButton from './PrimaryButton';
import Loader from './Loader';
import { IoIosClose } from 'react-icons/io';
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
//actions
import { HIDE_SUBSCRIBE_POPUP } from '../actions/appStateActions'

const SubscribePopup: FC = () => {

    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { dispatch }: any = useAppContext();  //ANY

    function closeSubscribePopup() {
        dispatch({ type: HIDE_SUBSCRIBE_POPUP })
    }

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            emailInputRef.current?.focus();

        }, 400)
        return () => clearTimeout(timeoutID)
    }, [])


    return ReactDom.createPortal(
        <div className="subscribepopup">
            <div className="subscribepopup__black-layer" onClick={closeSubscribePopup}></div>
            <div className="subscribepopup__content">
                <Header
                    smallTitle="Become a member"
                    bigTitle="Subscribe"
                    text="A single global account to access Panda products and services. 
                    Faster payment with address and payment details saved.
                    Access your complete order history."
                />
                <form className="subscribepopup__form">
                    {/* <p className="subscribepopup__api-error">Subscription failed</p> */}
                    <div className="subscribepopup__form-section">
                        <label htmlFor="email" className="subscribepopup__label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="subscribepopup__input"
                            autoComplete="off"
                            ref={emailInputRef}
                        />
                        {/* <p className="subscribepopup__error-info">This value is required</p> */}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="firstname" className="subscribepopup__label">
                            Firstname
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            className="subscribepopup__input"
                        />
                        {/* <p className="subscribepopup__error-info">This value is required</p> */}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="lastname" className="subscribepopup__label">
                            Lastname
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className="subscribepopup__input"
                        />
                        {/* <p className="subscribepopup__error-info">This value is required</p> */}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="password" className="subscribepopup__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="subscribepopup__input"
                        />
                        {/* <p className="subscribepopup__error-info">This value is required</p> */}
                    </div>
                    <div className="subscribepopup__form-section subscribepopup__form-section--horizontal">
                        <label htmlFor="terms" className="subscribepopup__label-checkbox">
                            I accept that Panda Gin will process my personal data (PRIVACY POLICY)
                        </label>
                        <input
                            type="checkbox"
                            id="terms"
                            className="subscribepopup__input-checkbox"
                        />
                        {/* <p className="subscribepopup__error-info">This value is required</p> */}
                    </div>
                    <div className="loginpopup__btn-holder">
                        <PrimaryButton text="Become member" />
                    </div>
                    {isLoading && <Loader />}
                </form>
                <div className="subscribepopup__close-btn" onClick={closeSubscribePopup}>
                    <IoIosClose className="loginpopup__close-icon" />
                </div>
            </div>
        </div>
        ,
        document.getElementById("portal")!
    )
}

export default SubscribePopup