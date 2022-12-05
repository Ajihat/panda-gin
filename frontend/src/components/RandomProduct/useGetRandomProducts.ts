import { useState, useEffect, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_PRODUCTS_URL } from 'api/apiEndpoints';

import { drawRandomProducts } from './drawRandomProducts';

import { Product } from 'context/ProductsContext/ProductsContext.types';

export const useGetRandomProducts = (currentProductId: string) => {
	const [randomProducts, setRandomProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		setIsLoading(true);
		setApiError('');
		abortControler.current = new AbortController();
		axios({
			method: 'GET',
			url: GET_PRODUCTS_URL,
			signal: abortControler.current.signal,
		})
			.then((res) => {
				const arrayOfProducts: Product[] = Object.values(res.data); // Transforming object of objects into array of objects

				setRandomProducts(drawRandomProducts(arrayOfProducts, 3, currentProductId));
			})
			.catch((e) => {
				if (e.code === 'ERR_NETWORK') {
					setApiError('connection error');
				} else {
					setApiError('We are sorry. Something went wrong');
				}
			})
			.finally(() => {
				setIsLoading(false);
			});

		return () => abortControler.current?.abort();
	}, [currentProductId]);

	return { randomProducts, isLoading, apiError, abortControler };
};
