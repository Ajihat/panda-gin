export interface ProductsProviderProps {
    children: React.ReactNode;
}

export interface IProductsContext {
    productsCategory: string;
    changeProductsCategory: (category: string) => void;
    products: Product[][];
    productsLoading: boolean;
    productsPage: number;
    increaseProductsPage: () => void;
    decreaseProductsPage: () => void;
    setProductsPage: React.Dispatch<React.SetStateAction<number>>;
    apiError: string;
}

export interface Product {
    id: number;
    category: string;
    title: string;
    description: string;
    price: string;
    outOfStock: boolean;
    discount: string;
    limitedEdition: boolean;
    images: string[];
    imageThumbnail: string;
    text: string;
    formats: { id: number; text: string; promotion?: boolean }[];
}
