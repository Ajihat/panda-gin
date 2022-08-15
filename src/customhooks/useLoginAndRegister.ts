import { useState, useRef } from 'react'
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
//api
import axios from "../api/axios";
import { LOGIN_URL, SUBSCRIBE_URL } from "../api/api_endpoints";
//interfaces
import { ILoginInputs, IRegisterInputs } from "../interfaces/interfaces";

export const useLoginAndRegister = (url: string) => {
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiErrorText, setApiErrorText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { closeLoginPopup, closeSubscribePopup }: any = useAppContext();  //ANY
    const abortControler = useRef<any>(); //ANY

    const onMutate = (payload: ILoginInputs & IRegisterInputs) => {
        setApiError(false);
        setIsLoading(true);
        if (payload.hasOwnProperty("termsChecked")) delete payload.termsChecked;
        abortControler.current = new AbortController();
        axios({
            method: "POST",
            url,
            data: payload,
            signal: abortControler.current.signal
        }).then(res => {
            setIsLoading(false);
            if (res.status === 201 && url === LOGIN_URL) {
                const ACCESS_TOKEN: string = res.data.access_token;
                console.log(ACCESS_TOKEN);
                closeLoginPopup();
            }
            if (res.status === 201 && url === SUBSCRIBE_URL) {
                console.log(res);
                closeSubscribePopup();
            }
        }).catch(error => {
            setIsLoading(false);
            setApiError(true);
            if (!error?.response) {
                setApiErrorText("No server response")
            } else if (error.response?.status === 401 && url === LOGIN_URL) {
                setApiErrorText("Authentication failed")
            } else {
                setApiErrorText("Sorry, something went wrong")
            }
        })
    }

    return { apiError, apiErrorText, isLoading, abortControler, onMutate }
}

export default useLoginAndRegister