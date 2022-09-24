import { useState, useEffect, useRef } from "react";

import { axiosInstance as axios } from "../../api/axios";
import { GET_PRODUCT_URL } from "../../api/apiEndpoints";

import { Product } from "../../context/ProductsContext/ProductsContext.types";

export const useGetProduct = (productId: string) => {
    const [product, setProduct] = useState<null | Product>(null);
    const [productLoading, setProductLoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string>("");
    const abortControler = useRef<AbortController>();

    useEffect(() => {
        setProductLoading(true);
        setApiError("");
        abortControler.current = new AbortController();
        axios({
            method: "GET",
            url: GET_PRODUCT_URL + productId,
            signal: abortControler.current.signal,
        })
            .then((res) => {
                setProductLoading(false);
                setProduct(res.data);
            })
            .catch((e) => {
                console.log(e);
                setProductLoading(false);
                if (e.code === "ERR_NETWORK") {
                    setApiError("Connection error");
                } else if (e.code === "ERR_BAD_RESPONSE") {
                    setApiError("Product do not exists");
                } else {
                    setApiError("We are sorry. Something went wrong");
                }
            });
    }, [productId]);

    return { product, productLoading, apiError, abortControler };
};
