import { createContext, useReducer } from "react";
import { shoppingCartReducer } from "./shoppingCartReducer";
import { ADD_PRODUCT_TO_CART } from "./shoppingCartStateActions";

import {
    IShoppingCartState,
    IShoppingCartContext,
    ShoppingCartProviderProps,
} from "./ShoppingCartContsxt.types";

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(
    null
);

const initialShoppingCartState: IShoppingCartState = {
    productsInCart: [],
    giftIsChoosen: false,
};

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [shoppingCartState, dispatch] = useReducer(
        shoppingCartReducer,
        initialShoppingCartState
    );

    return (
        <ShoppingCartContext.Provider
            value={{
                ...shoppingCartState,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
