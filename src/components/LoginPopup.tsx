import { FC, useEffect } from "react"
import { useForm } from "react-hook-form";
import ReactDom from 'react-dom'
//components
import Header from "./Header"
import { IoIosClose } from 'react-icons/io';
import PrimaryButton from "./PrimaryButton";
import Loader from "./Loader";
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
import { useLoginAndRegister } from '../customhooks/useLoginAndRegister'
//common
import emailRegex from "../common/emailRegex";
//api
import { LOGIN_URL } from "../api/api_endpoints";
//interfaces
import { ILoginInputs, IRegisterInputs } from "../interfaces/interfaces";

const LoginPopup: FC = () => {

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm<ILoginInputs & IRegisterInputs>();
    const { isSubscribePopupOpen, closeLoginPopup, openSubscribePopup }: any = useAppContext();  //ANY
    const { apiError, apiErrorText, isLoading, abortControler, onMutate } = useLoginAndRegister(LOGIN_URL);


    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setFocus("username")
        }, 400)
        return () => {

            clearTimeout(timeoutID)
        }
    }, [isSubscribePopupOpen])


    useEffect(() => {
        return () => abortControler.current?.abort();
    }, [])



    return ReactDom.createPortal(
        <div className="loginpopup">
            <div className="loginpopup__black-layer" onClick={closeLoginPopup}></div>
            <div className="loginpopup__content">
                <Header
                    smallTitle="Panda Family"
                    bigTitle="Log in"
                    text="Faster payment with address and payment details saved. Access your complete order history"
                />
                <form className="loginpopup__form" noValidate onSubmit={handleSubmit(onMutate)}>
                    {apiError && <p className="loginpopup__api-error">{apiErrorText}</p>}
                    <div className="loginpopup__form-section">
                        <label htmlFor="username" className="loginpopup__label">
                            Login
                        </label>
                        <input
                            type="email"
                            id="username"
                            {...register("username", { required: "This value is required", pattern: { value: emailRegex, message: "Invalid email address" } })}
                            className="loginpopup__input"
                            placeholder="Enter your email address"
                            autoComplete="off"
                            disabled={isLoading}
                        />
                        {errors.username && <p className="loginpopup__error-info">{errors.username.message}</p>}
                    </div>
                    <div className="loginpopup__form-section">
                        <label htmlFor="password" className="loginpopup__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: "This value is required" })}
                            className="loginpopup__input"
                            placeholder="Enter your password"
                            disabled={isLoading}
                        />
                        {errors.password && <p className="loginpopup__error-info">{errors.password.message}</p>}
                    </div>
                    <div className="loginpopup__btn-holder">
                        <PrimaryButton text="Sign in" type="submit" />
                    </div>
                    <div className="loginpopup__cta">
                        <p className="loginpopup__text">
                            Not yet member?
                        </p>
                        <p className="loginpopup__text loginpopup__text--gray" onClick={openSubscribePopup}>
                            Subscribe
                        </p>
                    </div>
                    {isLoading && <Loader />}
                </form>

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