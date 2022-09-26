export interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

interface ShoppingCartProduct {
    id: number;
    name: string;
    quantity: number;
    isCaseFormat: boolean;
    unitPrice: number;
}

export interface IShoppingCartState {
    productsInCart: ShoppingCartProduct[];
    giftIsChoosen: boolean;
}

export interface IShoppingCartContext {
    productsInCart: ShoppingCartProduct[];
    giftIsChoosen: boolean;
}
