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
    addGiftToCart: (product: ShoppingCartProduct) => void;
    deleteGiftFromCart: () => void;
    increaseProductQuantity: (product: ShoppingCartProduct) => void;
    decreaseProductQuantity: (product: ShoppingCartProduct) => void;
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
          type: "ADD_GIFT_TO_CART";
          payload: ShoppingCartProduct;
      }
    | {
          type: "DELETE_GIFT_FROM_CART";
      }
    | {
          type: "INCREASE_PRODUCT_QUANTITY";
          payload: ShoppingCartProduct;
      }
    | {
          type: "DECREASE_PRODUCT_QUANTITY";
          payload: ShoppingCartProduct;
      };

export type ShoppingCartReducer = (
    state: IShoppingCartState,
    action: ReducerAction
) => IShoppingCartState;
