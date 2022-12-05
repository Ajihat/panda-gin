import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error(
            "useAuthContext can only be used inside ContextProvider"
        );
    return ctx;
};
