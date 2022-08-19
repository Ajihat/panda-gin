import { useState, useRef } from "react";

import { useAppContext } from "../../context/AppContext/useAppContext";

import axios from "../../api/axios";

import { ISubscribeInputs } from "./SubscribePopup.types";

export const useSubscribe = (url: string) => {
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiErrorText, setApiErrorText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { closeSubscribePopup } = useAppContext();
    const abortControler = useRef<any>(); //ANY

    const onMutate = (payload: ISubscribeInputs) => {
        setApiError(false);
        setIsLoading(true);
        if (payload.hasOwnProperty("termsChecked")) delete payload.termsChecked;
        abortControler.current = new AbortController();
        axios({
            method: "POST",
            url,
            data: payload,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                setIsLoading(false);

                if (res.status === 201) {
                    console.log(res);
                    closeSubscribePopup();
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setApiError(true);
                if (!error?.response) {
                    setApiErrorText("No server response");
                } else if (error.response?.status === 400) {
                    setApiErrorText("User already exists");
                } else {
                    setApiErrorText("Sorry, something went wrong");
                }
            });
    };

    return { apiError, apiErrorText, isLoading, abortControler, onMutate };
};

export default useSubscribe;
