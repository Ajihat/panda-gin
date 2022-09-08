import { useState, createContext, useEffect } from "react";

import { IAuthContext, AuthProviderProps } from "./AuthContext.types";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userJwtToken, setUserJwtToken] = useState<string | null>(null);

    useEffect(() => {
        if (!userJwtToken && sessionStorage.getItem("jwt")) {
            setUserJwtToken(sessionStorage.getItem("jwt"));
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userJwtToken,
                setUserJwtToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
