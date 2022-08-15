import { FC, useRef, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import ReactDom from 'react-dom'
//components
import Header from "./Header"
import PrimaryButton from './PrimaryButton';
import Loader from './Loader';
import { IoIosClose } from 'react-icons/io';
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
import { useLoginAndRegister } from '../customhooks/useLoginAndRegister'
//common
import emailRegex from '../common/emailRegex';
import nameRegex from '../common/nameRegex';
//api
import axios from '../api/axios';
import { SUBSCRIBE_URL } from '../api/api_endpoints';
//interfaces
import { ILoginInputs, IRegisterInputs } from "../interfaces/interfaces";

const SubscribePopup: FC = () => {

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm<ILoginInputs & IRegisterInputs>();
    const { closeSubscribePopup }: any = useAppContext();  //ANY
    const { apiError, apiErrorText, isLoading, abortControler, onMutate } = useLoginAndRegister(SUBSCRIBE_URL);



    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setFocus("username")
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
                <form className="subscribepopup__form" noValidate onSubmit={handleSubmit(onMutate)}>
                    {apiError && <p className="subscribepopup__api-error">{apiErrorText}</p>}
                    <div className="subscribepopup__form-section">
                        <label htmlFor="email" className="subscribepopup__label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("username", { required: "This value is required", pattern: { value: emailRegex, message: "Invalid email address" } })}
                            className="subscribepopup__input"
                            autoComplete="off"
                        />
                        {errors.username && <p className="subscribepopup__error-info">{errors.username.message}</p>}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="firstname" className="subscribepopup__label">
                            Firstname
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            {...register("firstname", { required: "This value is required", pattern: { value: nameRegex, message: "Invalid firstname" }, minLength: { value: 2, message: "Firstname must contain at least 2 characters" }, maxLength: { value: 14, message: "Firstname must contain less then 15 characters" } })}
                            className="subscribepopup__input"
                            autoComplete="off"
                        />
                        {errors.firstname && <p className="subscribepopup__error-info">{errors.firstname.message}</p>}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="lastname" className="subscribepopup__label">
                            Lastname
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            {...register("lastname", { required: "This value is required", pattern: { value: nameRegex, message: "Invalid lastname" }, minLength: { value: 2, message: "Lastname must contain at least 2 characters" }, maxLength: { value: 14, message: "Lastname must contain less then 15 characters" } })}
                            className="subscribepopup__input"
                            autoComplete="off"
                        />
                        {errors.lastname && <p className="subscribepopup__error-info">{errors.lastname.message}</p>}
                    </div>
                    <div className="subscribepopup__form-section">
                        <label htmlFor="password" className="subscribepopup__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: "This value is required", minLength: { value: 5, message: "Password must contain at least 5 characters" }, maxLength: { value: 14, message: "Password must contain less then 15 characters" } })}
                            className="subscribepopup__input"
                        />
                        {errors.password && <p className="subscribepopup__error-info">{errors.password.message}</p>}
                    </div>
                    <div className="subscribepopup__form-section subscribepopup__form-section--horizontal">
                        <label htmlFor="terms" className="subscribepopup__label-checkbox">
                            I accept that Panda Gin will process my personal data (PRIVACY POLICY)
                        </label>
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("termsChecked", { required: "This value is required" })}
                            className="subscribepopup__input-checkbox"
                        />
                        {errors.termsChecked && <p className="subscribepopup__error-info">{errors.termsChecked.message}</p>}
                    </div>
                    <div className="loginpopup__btn-holder">
                        <PrimaryButton text="Become member" type="submit" />
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