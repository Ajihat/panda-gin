import { createContext } from "react";

import { IAuthContext, AuthProviderProps } from "./AuthContext.types";

import { useLocalStorage } from "common/useLocalStorage/useLocalStorage";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { value: userJwtToken, setNewValue: setUserJwtToken } =
        useLocalStorage<string>("jwt");

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
