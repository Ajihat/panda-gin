import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY,
    ADD_GIFT_TO_CART,
    DELETE_GIFT_FROM_CART,
} from "./shoppingCartStateActions";

import { ShoppingCartReducer } from "./ShoppingCartContext.types";

export const shoppingCartReducer: ShoppingCartReducer = (state, action) => {
    if (action.type === ADD_PRODUCT_TO_CART) {
        let productIndex = state.productsInCart.findIndex(
            (productInCart) =>
                productInCart.id === action.payload.id &&
                productInCart.format === action.payload.format
        );
        const productWithGivenIdAndFormatExists =
            productIndex === -1 ? false : true;
        if (!productWithGivenIdAndFormatExists) {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload],
            };
        }
        if (productWithGivenIdAndFormatExists) {
            return {
                ...state,
                productsInCart: state.productsInCart.map(
                    (productInCart, index) => {
                        if (index === productIndex) {
                            return {
                                ...productInCart,
                                quantity:
                                    productInCart.quantity +
                                    action.payload.quantity,
                            };
                        } else return productInCart;
                    }
                ),
            };
        }
    }
    if (action.type === DELETE_PRODUCT_FROM_CART) {
        return {
            ...state,
            productsInCart: state.productsInCart.filter((productInCart) => {
                if (
                    productInCart.id === action.payload.id &&
                    productInCart.format === action.payload.format
                ) {
                    return false;
                } else {
                    return productInCart;
                }
            }),
        };
    }
    if (action.type === ADD_GIFT_TO_CART) {
        return {
            ...state,
            productsInCart: [...state.productsInCart, action.payload],
            choosenGiftId: action.payload.id,
        };
    }
    if (action.type === DELETE_GIFT_FROM_CART) {
        return {
            ...state,
            productsInCart: state.productsInCart.filter(
                (productInCart) =>
                    productInCart.id !== state.choosenGiftId &&
                    productInCart.format !== "gift"
            ),
            choosenGiftId: null,
        };
    }
    if (action.type === INCREASE_PRODUCT_QUANTITY) {
        return {
            ...state,
            productsInCart: state.productsInCart.map((productInCart) => {
                if (
                    productInCart.id === action.payload.id &&
                    productInCart.format === action.payload.format
                ) {
                    return {
                        ...productInCart,
                        quantity: productInCart.quantity + 1,
                    };
                } else {
                    return productInCart;
                }
            }),
        };
    }
    if (action.type === DECREASE_PRODUCT_QUANTITY) {
        return {
            ...state,
            productsInCart: state.productsInCart.map((productInCart) => {
                if (
                    productInCart.id === action.payload.id &&
                    productInCart.format === action.payload.format
                ) {
                    return {
                        ...productInCart,
                        quantity:
                            productInCart.quantity === 1
                                ? 1
                                : productInCart.quantity - 1,
                    };
                } else {
                    return productInCart;
                }
            }),
        };
    }
    return state;
};
