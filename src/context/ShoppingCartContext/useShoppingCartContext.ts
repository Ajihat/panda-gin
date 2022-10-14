import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

export const useShoppingCartContext = () => {
    const ctx = useContext(ShoppingCartContext);
    if (!ctx)
        throw new Error(
            "useShoppingCartContext can only be used inside ContextProvider"
        );
    return ctx;
};
