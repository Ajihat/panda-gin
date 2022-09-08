import { useState, useEffect, useRef } from "react";

import { axiosInstance as axios } from "../../api/axios";
import { GET_PRODUCTS_URL } from "../../api/api_endpoints";

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
                const arrayOfProducts: Product[] = Object.values(res.data); // Transforming object of objects into array of objects
                if (
                    productsCategory !== "all" &&
                    productsCategory !== "limited edition" &&
                    productsCategory !== "promotions"
                ) {
                    const filteredArrayOfProducts = arrayOfProducts.filter(
                        (singleProduct) => {
                            return singleProduct.category === productsCategory;
                        }
                    );
                    const paginatedProducts = frontendPagination(
                        filteredArrayOfProducts,
                        9
                    );
                    setProducts(paginatedProducts);
                } else if (productsCategory === "limited edition") {
                    const arrayOfLimitedEditionProducts =
                        arrayOfProducts.filter((singleProduct) => {
                            return singleProduct.limitedEdition === true;
                        });
                    const paginatedProducts = frontendPagination(
                        arrayOfLimitedEditionProducts,
                        9
                    );
                    setProducts(paginatedProducts);
                } else if (productsCategory === "promotions") {
                    const arrayOfPromotionProducts = arrayOfProducts.filter(
                        (singleProduct) => {
                            return singleProduct.discount !== "";
                        }
                    );
                    const paginatedProducts = frontendPagination(
                        arrayOfPromotionProducts,
                        9
                    );
                    setProducts(paginatedProducts);
                } else {
                    const paginatedProducts = frontendPagination(
                        arrayOfProducts,
                        9
                    );
                    setProducts(paginatedProducts);
                }
                setProductsLoading(false);
            })
            .catch((error) => {
                if (error.code === "ERR_CANCELED") {
                    return;
                }
            });
    }, [productsCategory]);

    return { productsLoading, products, abortControler };
};
