import { createContext, useState, useCallback, useEffect } from "react";

import { useGetProducts } from "./useGetProducts";

import {
    IProductsContext,
    ProductsProviderProps,
} from "./ProductsContext.types";

export const ProductsContext = createContext<IProductsContext | null>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [productsCategory, setProductsCategory] = useState<string>("all");
    const [productsPage, setProductsPage] = useState<number>(0);

    const { productsLoading, products, abortControler } =
        useGetProducts(productsCategory);

    useEffect(() => {
        return () => abortControler.current?.abort();
    }, [productsCategory]);

    const changeProductsCategory = useCallback((category: string) => {
        setProductsCategory(category);
    }, []);

    const increaseProductsPage = () => {
        setProductsPage((prevState) => {
            if (prevState < products.length - 1) {
                return prevState + 1;
            } else {
                return prevState;
            }
        });
    };

    const decreaseProductsPage = () => {
        setProductsPage((prevState) => {
            if (prevState > 0) {
                return prevState - 1;
            } else {
                return prevState;
            }
        });
    };
    return (
        <ProductsContext.Provider
            value={{
                productsCategory,
                changeProductsCategory,
                products,
                productsLoading,
                productsPage,
                increaseProductsPage,
                decreaseProductsPage,
                setProductsPage,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
