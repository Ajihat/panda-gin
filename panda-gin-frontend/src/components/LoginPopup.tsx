import { FC, useRef, useEffect, useState } from "react"
import ReactDom from 'react-dom'
//components
import Header from "./Header"
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from "./PrimaryButton";
import Loader from "./Loader";
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
//actions
import { HIDE_LOGIN_POPUP, OPEN_SUBSCRIBE_POPUP } from '../actions/appStateActions'
//common
import emailRegex from "../common/emailRegex";

const LoginPopup: FC = () => {

    const { dispatch, isSubscribePopupOpen }: any = useAppContext();  //ANY

    const loginInputRef = useRef<HTMLInputElement | null>(null);
    const [loginInputText, setLoginInputText] = useState<string>("");
    const [loginInputError, setLoginInputError] = useState<boolean>(false);
    const [loginInputErrorText, setLoginInputErrorText] = useState<string>("");

    const [passwordInputText, setPasswordInputText] = useState<string>("");
    const [passwordInputError, setPasswordInputError] = useState<boolean>(false);
    const [passwordInputErrorText, setPasswordInputErrorText] = useState<string>("");




    const [isLoading, setIsLoading] = useState<boolean>(false);




    function closeLoginPopup() {
        dispatch({ type: HIDE_LOGIN_POPUP });
    }

    function openSubscribePopup() {
        dispatch({ type: OPEN_SUBSCRIBE_POPUP })

    }

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            loginInputRef.current?.focus();

        }, 400)
        return () => clearTimeout(timeoutID)
    }, [isSubscribePopupOpen])



    function handleClick(e: React.SyntheticEvent) {
        e.preventDefault();
        setLoginInputError(false);
        setLoginInputErrorText("")
        setPasswordInputError(false);
        setPasswordInputErrorText("");
        let emailIsCorrect: boolean = false;
        let passwordIsCorrect: boolean = false;
        if (loginInputText.length === 0) {
            setLoginInputError(true);
            setLoginInputErrorText("This value is required");
        } else {
            if (emailRegex.test(loginInputText)) {
                emailIsCorrect = true;
            } else {
                setLoginInputError(true);
                setLoginInputErrorText("Invalid address email")
            }
        }
        if (passwordInputText.length === 0) {
            setPasswordInputError(true);
            setPasswordInputErrorText("This value is required")
        } else {
            passwordIsCorrect = true;
        }

        if (emailIsCorrect && passwordIsCorrect) {
            console.log("API calling");

            setIsLoading(true);

        }


    }





    return ReactDom.createPortal(
        <div className="loginpopup">
            <div className="loginpopup__black-layer" onClick={closeLoginPopup}></div>
            <div className="loginpopup__content">
                <Header
                    smallTitle="Panda Family"
                    bigTitle="Log in"
                    text="Faster payment with address and payment details saved. Access your complete order history"
                />
                <form className="loginpopup__form">
                    {/* <div className="loginpopup__api-error">Authentication failed</div> */}
                    <div className="loginpopup__form-section">
                        <label htmlFor="login" className="loginpopup__label">
                            Login
                        </label>
                        <input
                            type="email"
                            id="login"
                            className="loginpopup__input"
                            placeholder="Enter your email address"
                            ref={loginInputRef}
                            disabled={isLoading}
                            value={loginInputText}
                            onChange={(e) => setLoginInputText(e.target.value)}
                        />
                        {loginInputError && <p className="loginpopup__error-info">{loginInputErrorText}</p>}
                    </div>
                    <div className="loginpopup__form-section">
                        <label htmlFor="password" className="loginpopup__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="loginpopup__input"
                            placeholder="Enter your password"
                            disabled={isLoading}
                            value={passwordInputText}
                            onChange={(e) => setPasswordInputText(e.target.value)}
                        />
                        {passwordInputError && <p className="loginpopup__error-info">{passwordInputErrorText}</p>}
                    </div>
                    <div className="loginpopup__btn-holder" onClick={handleClick}>
                        <PrimaryButton text="Sign in" />
                    </div>
                    {isLoading && <Loader />}
                </form>
                <div className="loginpopup__cta">
                    <p className="loginpopup__text">
                        Not yet member?
                    </p>
                    <p className="loginpopup__text loginpopup__text--gray" onClick={openSubscribePopup}>
                        Subscribe
                    </p>
                </div>
                <div className="loginpopup__close-btn" onClick={closeLoginPopup}>
                    <IoIosClose className="loginpopup__close-icon" />
                </div>
            </div>
        </div>
        ,
        document.getElementById("portal")!
    )

}

export default LoginPopup