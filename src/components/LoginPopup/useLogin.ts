import { useState, useRef } from "react";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";

import { axiosInstance as axios } from "../../api/axios";

import { ILoginInputs } from "./LoginPopup.types";

export const useLogin = (url: string) => {
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiErrorText, setApiErrorText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { closeLoginPopup } = useAppContext();
    const { setUserJwtToken } = useAuthContext();
    const abortControler = useRef<AbortController>();

    const onMutate = (payload: ILoginInputs) => {
        setApiError(false);
        setIsLoading(true);
        abortControler.current = new AbortController();
        axios({
            method: "POST",
            url,
            data: payload,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                if (res.status === 201) {
                    const ACCESS_TOKEN: string = res.data.access_token;
                    setUserJwtToken(ACCESS_TOKEN);
                    closeLoginPopup();
                }
            })
            .catch((error) => {
                setApiError(true);
                if (error.code === "ERR_NETWORK") {
                    setApiErrorText("No server response");
                } else if (error.response?.status) {
                    setApiErrorText("Wrong email or password");
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
