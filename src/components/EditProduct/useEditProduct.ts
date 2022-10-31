import { useState, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';

import { IEditProductInputs } from './EditProducts.types';
import { Product } from 'context/ProductsContext/ProductsContext.types';

export const useEditProduct = (url: string, product: Product | null) => {
	const [productIsBeingUpdated, setProductIsBeingUpdated] = useState<boolean>(false);
	const [productUpdatedWithSucces, setProductUpdatedWithSucces] = useState<boolean>(false);
	const [apiError, setApiError] = useState<string>('');
	const abortControler = useRef<AbortController>();

	const onMutate = (payload: IEditProductInputs) => {
		if (product) {
			const newProduct: Product = {
				...product,
				...payload,
				discount: Math.round(Number(payload.discount)) === 0 ? '' : Number(payload.discount).toFixed(0),
				price: Number(payload.price).toFixed(2),
			};
			setProductIsBeingUpdated(true);
			setApiError('');
			abortControler.current = new AbortController();
			axios({
				method: 'PUT',
				url,
				data: newProduct,
				signal: abortControler.current.signal,
			})
				.then((res) => {
					if (res.status === 200) {
						setProductUpdatedWithSucces(true);
					}
				})
				.catch((e) => {
					if (e.code === 'ERR_NETWORK') {
						setApiError('No server response');
					} else {
						setApiError('Sorry, something went wrong');
					}
				})
				.finally(() => {
					setProductIsBeingUpdated(false);
				});
		}
	};

	return { onMutate, productIsBeingUpdated, apiError, productUpdatedWithSucces, abortControler };
};
