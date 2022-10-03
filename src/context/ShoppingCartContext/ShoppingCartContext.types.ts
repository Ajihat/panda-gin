export interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export interface ShoppingCartProduct {
    id: number;
    title: string;
    quantity: number;
    format: string | null;
    unitPrice: number;
    mainImage: string;
}

export interface IShoppingCartState {
    productsInCart: ShoppingCartProduct[];
    choosenGiftId: null | number;
    shippingCost: number;
}

export interface IShoppingCartContext {
    productsInCart: ShoppingCartProduct[];
    choosenGiftId: null | number;
    addProductToCart: (product: ShoppingCartProduct) => void;
    deleteProductFromCart: (id: number, format: string | null) => void;
    increaseProductQuantity: (product: ShoppingCartProduct) => void;
    decreaseProductQuantity: (product: ShoppingCartProduct) => void;
    setGiftIsChoosen: (id: number) => void;
    setGiftIsNotChoosen: () => void;
    numberOfProductsInCart: number;
    shoppingCartValue: number;
    shippingCost: number;
}

type ReducerAction =
    | {
          type: "ADD_PRODUCT_TO_CART";
          payload: ShoppingCartProduct;
      }
    | {
          type: "DELETE_PRODUCT_FROM_CART";
          payload: { id: number; format: string | null };
      }
    | {
          type: "INCREASE_PRODUCT_QUANTITY";
          payload: ShoppingCartProduct;
      }
    | {
          type: "DECREASE_PRODUCT_QUANTITY";
          payload: ShoppingCartProduct;
      }
    | {
          type: "SET_GIFT_IS_CHOOSEN";
          payload: number;
      }
    | {
          type: "SET_GIFT_IS_NOT_CHOOSEN";
          payload: null;
      };

export type ShoppingCartReducer = (
    state: IShoppingCartState,
    action: ReducerAction
) => IShoppingCartState;
