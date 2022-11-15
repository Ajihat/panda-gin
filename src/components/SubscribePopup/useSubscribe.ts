import { useState, useRef, useEffect } from 'react';

import { useSubscribePopupContext } from 'context/SubscribePopupContext/useSubscribePopupContext';

import { axiosInstance as axios } from 'api/axios';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { ISubscribeInputs } from './SubscribePopup.types';

export const useSubscribe = (url: string) => {
	const [apiErrorText, setApiErrorText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { closeSubscribePopup } = useSubscribePopupContext();
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		return () => abortControler.current?.abort();
	}, []);

	const onMutate = (payload: ISubscribeInputs) => {
		setApiErrorText('');
		setIsLoading(true);
		const { termsChecked, ...newPayload } = payload;
		abortControler.current = new AbortController();
		axios({
			method: 'POST',
			url,
			data: newPayload,
			signal: abortControler.current.signal,
		})
			.then((res) => {
				if (res.status === 201) {
					console.log(res);
					closeSubscribePopup();
				}
			})
			.catch((error) => {
				setApiErrorText(drawApiErrorText(error, url));
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return { apiErrorText, isLoading, abortControler, onMutate };
};
