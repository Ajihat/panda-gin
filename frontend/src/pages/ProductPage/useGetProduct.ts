import { useState, useEffect, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_PRODUCT_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { Product } from 'context/ProductsContext/ProductsContext.types';

export const useGetProduct = (productId: string) => {
	const [product, setProduct] = useState<null | Product>(null);
	const [productLoading, setProductLoading] = useState(false);
	const [apiErrorText, setApiErrorText] = useState('');
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		setProductLoading(true);
		setApiErrorText('');
		abortControler.current = new AbortController();
		axios({
			method: 'GET',
			url: GET_PRODUCT_URL + productId,
			signal: abortControler.current.signal,
		})
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => {
				setApiErrorText(drawApiErrorText(error, GET_PRODUCT_URL));
			})
			.finally(() => {
				setProductLoading(false);
			});

		return () => abortControler.current?.abort();
	}, [productId]);

	return { product, productLoading, apiErrorText };
};
