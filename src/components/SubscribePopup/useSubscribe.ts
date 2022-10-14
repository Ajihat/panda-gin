import { useState, useRef } from "react";

import { useAppContext } from "context/AppContext/useAppContext";

import { axiosInstance as axios } from "api/axios";

import { ISubscribeInputs } from "./SubscribePopup.types";

export const useSubscribe = (url: string) => {
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiErrorText, setApiErrorText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { closeSubscribePopup } = useAppContext();
    const abortControler = useRef<AbortController>();

    const onMutate = (payload: ISubscribeInputs) => {
        setApiError(false);
        setIsLoading(true);
        const { termsChecked, ...newPayload } = payload;
        abortControler.current = new AbortController();
        axios({
            method: "POST",
            url,
            data: newPayload,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                if (res.status === 201) {
                    console.log(res);
                    closeSubscribePopup();
                }
            })
            .catch((error) => {
                setApiError(true);
                if (error.code === "ERR_NETWORK") {
                    setApiErrorText("No server response");
                } else if (error.response?.status === 400) {
                    setApiErrorText("User already exists");
                } else {
                    setApiErrorText("Sorry, something went wrong");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { apiError, apiErrorText, isLoading, abortControler, onMutate };
};
