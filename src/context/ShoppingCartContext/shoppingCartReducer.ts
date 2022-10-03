import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY,
    SET_GIFT_IS_CHOOSEN,
    SET_GIFT_IS_NOT_CHOOSEN,
} from "./shoppingCartStateActions";

import { ShoppingCartReducer } from "./ShoppingCartContext.types";

export const shoppingCartReducer: ShoppingCartReducer = (state, action) => {
    if (action.type === ADD_PRODUCT_TO_CART) {
        let productIndex = state.productsInCart.findIndex(
            // Sprawdzam czy produkt o danym id i formacie jest już w koszyku
            (productInCart) =>
                productInCart.id === action.payload.id &&
                productInCart.format === action.payload.format
        );
        if (productIndex === -1) {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload], //Jeśli nie ma w koszyku produktu o danym id i formacie to go dodaję
            };
        } else {
            return {
                ...state,
                productsInCart: state.productsInCart.map(
                    //Jeśli istnieje produkt o danym id i formacie to zwiększam jego ilość
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
    if (action.type === SET_GIFT_IS_CHOOSEN) {
        return {
            ...state,
            choosenGiftId: action.payload,
        };
    }
    if (action.type === SET_GIFT_IS_NOT_CHOOSEN) {
        return {
            ...state,
            choosenGiftId: action.payload,
        };
    }
    return state;
};
