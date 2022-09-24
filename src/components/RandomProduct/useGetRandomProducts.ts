import { useState, useEffect, useRef } from "react";

import { axiosInstance as axios } from "../../api/axios";
import { GET_PRODUCTS_URL } from "../../api/apiEndpoints";

import { Product } from "../../context/ProductsContext/ProductsContext.types";

export const useGetRandomProducts = (currentProductId: string) => {
    const [randomProducts, setRandomProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string>("");
    const abortControler = useRef<AbortController>();

    useEffect(() => {
        setIsLoading(true);
        setApiError("");
        abortControler.current = new AbortController();
        axios({
            method: "GET",
            url: GET_PRODUCTS_URL,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                setIsLoading(false);
                const arrayOfProducts: Product[] = Object.values(res.data); // Transforming object of objects into array of objects
                const arrayOfRandomProducts: Product[] = [];
                while (arrayOfRandomProducts.length < 3) {
                    const randomIndex = Math.floor(
                        Math.random() * arrayOfProducts.length
                    );

                    const randomProduct = arrayOfProducts[randomIndex];
                    if (
                        randomProduct.id !== Number(currentProductId) &&
                        !randomProduct.outOfStock &&
                        arrayOfRandomProducts.findIndex(
                            (item) => item.id === randomProduct.id
                        ) === -1
                    ) {
                        arrayOfRandomProducts.push(randomProduct);
                    }
                }
                setRandomProducts(arrayOfRandomProducts);
            })
            .catch((e) => {
                setIsLoading(false);
                if (e.code === "ERR_NETWORK") {
                    setApiError("connection error");
                } else {
                    setApiError("We are sorry. Something went wrong");
                }
            });
    }, []);

    return { randomProducts, isLoading, apiError, abortControler };
};
