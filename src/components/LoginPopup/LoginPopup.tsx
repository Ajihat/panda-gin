import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactDom from "react-dom";

import { Header } from "../Header/Header";
import { IoIosClose } from "react-icons/io";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Loader } from "../Loader/Loader";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useLogin } from "./useLogin";

import { emailRegex } from "../../common/regexs/emailRegex";

import { LOGIN_URL } from "../../api/api_endpoints";

import { ILoginInputs } from "./LoginPopup.types";

import "./LoginPopup.sass";
import "../../sass/Forms.sass";

export const LoginPopup = () => {
    const {
        register,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm<ILoginInputs>();
    const { isSubscribePopupOpen, closeLoginPopup, openSubscribePopup } =
        useAppContext();
    const { apiError, apiErrorText, isLoading, abortControler, onMutate } =
        useLogin(LOGIN_URL);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setFocus("username");
        }, 400);
        return () => {
            clearTimeout(timeoutID);
        };
    }, [isSubscribePopupOpen]);

    useEffect(() => {
        return () => abortControler.current?.abort();
    }, []);

    return ReactDom.createPortal(
        <div className="loginpopup">
            <div
                className="loginpopup__black-layer"
                onClick={closeLoginPopup}
            ></div>
            <div className="loginpopup__content">
                <Header
                    smallTitle="Panda Family"
                    bigTitle="Log in"
                    text="Faster payment with address and payment details saved. Access your complete order history"
                />
                <form
                    className="loginpopup__form"
                    noValidate
                    onSubmit={handleSubmit(onMutate)}
                >
                    {apiError && (
                        <p className="loginpopup__api-error">{apiErrorText}</p>
                    )}
                    <div className="loginpopup__form-section">
                        <label htmlFor="username" className="loginpopup__label">
                            Login
                        </label>
                        <input
                            type="email"
                            id="username"
                            {...register("username", {
                                required: "This value is required",
                                pattern: {
                                    value: emailRegex,
                                    message: "Invalid email address",
                                },
                            })}
                            className="loginpopup__input"
                            placeholder="Enter your email address"
                            autoComplete="off"
                            disabled={isLoading}
                        />
                        {errors.username && (
                            <p className="loginpopup__error-info">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <div className="loginpopup__form-section">
                        <label htmlFor="password" className="loginpopup__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: "This value is required",
                            })}
                            className="loginpopup__input"
                            placeholder="Enter your password"
                            disabled={isLoading}
                        />
                        {errors.password && (
                            <p className="loginpopup__error-info">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="loginpopup__btn-holder">
                        <PrimaryButton
                            text="Sign in"
                            type="submit"
                            isDisabled={isLoading}
                        />
                    </div>
                    <div className="loginpopup__cta">
                        <p className="loginpopup__text">Not yet member?</p>
                        <p
                            className="loginpopup__text loginpopup__text--gray"
                            onClick={openSubscribePopup}
                        >
                            Subscribe
                        </p>
                    </div>
                    {isLoading && <Loader />}
                </form>

                <div
                    className="loginpopup__close-btn"
                    onClick={closeLoginPopup}
                >
                    <IoIosClose className="loginpopup__close-icon" />
                </div>
            </div>
        </div>,
        document.getElementById("portal")!
    );
};
