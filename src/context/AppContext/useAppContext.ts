import { useContext } from "react";
import { AppContext } from "./AppContext";

export const useAppContext = () => {
    const ctx = useContext(AppContext);
    if (!ctx)
        throw new Error(
            "useAppContext can only be used inside ContextProvider"
        );
    return ctx;
};
