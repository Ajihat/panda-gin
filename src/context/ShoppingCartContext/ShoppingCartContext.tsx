import { createContext, useReducer, useCallback, useMemo } from "react";
import { shoppingCartReducer } from "./shoppingCartReducer";
import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY,
    SET_GIFT_IS_CHOOSEN,
    SET_GIFT_IS_NOT_CHOOSEN,
} from "./shoppingCartStateActions";

import {
    IShoppingCartState,
    IShoppingCartContext,
    ShoppingCartProviderProps,
    ShoppingCartProduct,
} from "./ShoppingCartContext.types";

export const ShoppingCartContext = createContext<IShoppingCartContext | null>(
    null
);

const initialShoppingCartState: IShoppingCartState = {
    productsInCart: [],
    choosenGiftId: null,
    shippingCost: 4.75,
};

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [shoppingCartState, dispatch] = useReducer(
        shoppingCartReducer,
        initialShoppingCartState
    );

    const addProductToCart = useCallback((product: ShoppingCartProduct) => {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: product,
        });
    }, []);

    const deleteProductFromCart = useCallback(
        (id: number, format: string | null) => {
            dispatch({
                type: DELETE_PRODUCT_FROM_CART,
                payload: { id, format },
            });
        },
        []
    );

    const increaseProductQuantity = useCallback(
        (product: ShoppingCartProduct) => {
            dispatch({
                type: INCREASE_PRODUCT_QUANTITY,
                payload: product,
            });
        },
        []
    );

    const decreaseProductQuantity = useCallback(
        (product: ShoppingCartProduct) => {
            dispatch({
                type: DECREASE_PRODUCT_QUANTITY,
                payload: product,
            });
        },
        []
    );

    const setGiftIsChoosen = useCallback((id: number) => {
        dispatch({
            type: SET_GIFT_IS_CHOOSEN,
            payload: id,
        });
    }, []);

    const setGiftIsNotChoosen = useCallback(() => {
        dispatch({
            type: SET_GIFT_IS_NOT_CHOOSEN,
            payload: null,
        });
    }, []);

    const numberOfProductsInCart = useMemo(() => {
        const { productsInCart } = shoppingCartState;
        return productsInCart.reduce(
            (acc, productInCart) => acc + productInCart.quantity,
            0
        );
    }, [shoppingCartState]);

    const shoppingCartValue = useMemo(() => {
        const { productsInCart } = shoppingCartState;
        return productsInCart.reduce(
            (acc, productInCart) =>
                acc + productInCart.quantity * productInCart.unitPrice,
            0
        );
    }, [shoppingCartState]);

    const shippingCost = useMemo(() => {
        if (shoppingCartValue >= 90) {
            return 0;
        } else {
            return 4.75;
        }
    }, [shoppingCartValue]);

    return (
        <ShoppingCartContext.Provider
            value={{
                ...shoppingCartState,
                addProductToCart,
                deleteProductFromCart,
                increaseProductQuantity,
                decreaseProductQuantity,
                setGiftIsChoosen,
                setGiftIsNotChoosen,
                numberOfProductsInCart,
                shoppingCartValue,
                shippingCost,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
