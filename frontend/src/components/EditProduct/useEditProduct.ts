import { useState, useRef, useEffect } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { EDIT_PRODUCT } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { IEditProductInputs } from './EditProducts.types';
import { Product } from 'context/ProductsContext/ProductsContext.types';

export const useEditProduct = () => {
	const [productIsBeingUpdated, setProductIsBeingUpdated] = useState(false);
	const [productUpdatedWithSucces, setProductUpdatedWithSucces] = useState(false);
	const [apiErrorText, setApiErrorText] = useState('');
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		return () => abortControler.current?.abort();
	}, []);

	const onMutate = async (payload: IEditProductInputs, product: Product) => {
		const newProductData: Product = {
			...product,
			...payload,
			discount: Math.round(Number(payload.discount)) === 0 ? '' : Number(payload.discount).toFixed(0),
			price: Number(payload.price).toFixed(2),
		};
		setProductIsBeingUpdated(true);
		setApiErrorText('');
		abortControler.current = new AbortController();
		try {
			const response = await axios({
				method: 'PUT',
				url: EDIT_PRODUCT,
				data: newProductData,
				signal: abortControler.current.signal,
			});
			if (response.status === 200) {
				setProductUpdatedWithSucces(true);
			}
			setProductIsBeingUpdated(false);
		} catch (error) {
			setApiErrorText(drawApiErrorText(error, EDIT_PRODUCT));
			setProductIsBeingUpdated(false);
		}
	};

	return { onMutate, productIsBeingUpdated, apiErrorText, productUpdatedWithSucces };
};
