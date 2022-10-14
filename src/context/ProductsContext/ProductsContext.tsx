import {
    createContext,
    useState,
    useCallback,
    useEffect,
    useMemo,
} from "react";

import { useGetProducts } from "./useGetProducts";

import {
    IProductsContext,
    ProductsProviderProps,
} from "./ProductsContext.types";

export const ProductsContext = createContext<IProductsContext | null>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [productsCategory, setProductsCategory] = useState<string>("all");
    const [productsPage, setProductsPage] = useState<number>(0);

    const { productsLoading, products, abortControler, apiError } =
        useGetProducts(productsCategory);

    useEffect(() => {
        const controler = abortControler.current;
        return () => controler?.abort();
    }, [productsCategory, abortControler]);

    const changeProductsCategory = useCallback((category: string) => {
        setProductsCategory(category);
    }, []);

    const increaseProductsPage = useCallback(() => {
        setProductsPage((prevState) => {
            return Math.min(products.length - 1, prevState + 1);
        });
    }, [products.length]);

    const decreaseProductsPage = useCallback(() => {
        setProductsPage((prevState) => {
            return Math.max(prevState - 1, 0);
        });
    }, []);

    const ProductsContextValue = useMemo(() => {
        return {
            productsCategory,
            changeProductsCategory,
            products,
            productsLoading,
            productsPage,
            increaseProductsPage,
            decreaseProductsPage,
            setProductsPage,
            apiError,
        };
    }, [
        productsCategory,
        changeProductsCategory,
        products,
        productsLoading,
        productsPage,
        increaseProductsPage,
        decreaseProductsPage,
        setProductsPage,
        apiError,
    ]);
    return (
        <ProductsContext.Provider value={ProductsContextValue}>
            {children}
        </ProductsContext.Provider>
    );
};
