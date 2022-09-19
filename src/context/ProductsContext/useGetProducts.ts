import { useState, useEffect, useRef } from "react";

import { axiosInstance as axios } from "../../api/axios";
import { GET_PRODUCTS_URL } from "../../api/apiEndpoints";

import { frontendPagination } from "../../common/frontendPagination/frontendPagination";

import { Product } from "./ProductsContext.types";

export const useGetProducts = (productsCategory: string) => {
    const [productsLoading, setProductsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[][]>([]);
    const abortControler = useRef<AbortController>();
    useEffect(() => {
        setProductsLoading(true);
        setProducts([]);
        abortControler.current = new AbortController();
        axios({
            method: "GET",
            url: GET_PRODUCTS_URL,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                setProductsLoading(false);
                const arrayOfProducts: Product[] = Object.values(res.data); // Transforming object of objects into array of objects
                if (productsCategory === "all") {
                    const paginatedProducts = frontendPagination(
                        arrayOfProducts,
                        9
                    );
                    setProducts(paginatedProducts);
                    return;
                }

                const filteredProducts = arrayOfProducts.filter((product) => {
                    if (product.category === productsCategory) {
                        return true;
                    }

                    if (
                        product.discount !== "" &&
                        productsCategory === "promotions"
                    ) {
                        return true;
                    }

                    if (
                        product.limitedEdition === true &&
                        productsCategory === "limited edition"
                    ) {
                        return true;
                    }

                    return false;
                });

                const paginatedAndFilteredProducts = frontendPagination(
                    filteredProducts,
                    9
                );
                setProducts(paginatedAndFilteredProducts);
            })
            .catch((error) => {
                if (error.code === "ERR_CANCELED") {
                    return;
                }
            });
    }, [productsCategory]);

    return { productsLoading, products, abortControler };
};
