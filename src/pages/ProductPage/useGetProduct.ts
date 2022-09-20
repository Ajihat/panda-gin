import { useState, useEffect } from "react";

import { axiosInstance as axios } from "../../api/axios";
import { GET_PRODUCT_URL } from "../../api/apiEndpoints";

import { Product } from "../../context/ProductsContext/ProductsContext.types";

export const useGetProduct = (productId: string | undefined) => {
    const [product, setProduct] = useState<null | Product>(null);
    const [productLoading, setProductLoading] = useState<boolean>(false);

    useEffect(() => {
        setProductLoading(true);
        axios({
            method: "GET",
            url: GET_PRODUCT_URL + productId,
        }).then((res) => {
            setProductLoading(false);
            setProduct(res.data);
        });
    }, [productId]);

    return { product, productLoading };
};
