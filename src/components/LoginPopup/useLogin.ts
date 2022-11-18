import { useState, useRef, useEffect } from 'react';

import { useLoginPopupContext } from 'context/LoginPopupContext/useLoginPopupContext';
import { useAuthContext } from 'context/AuthContext/useAuthContext';

import { axiosInstance as axios } from 'api/axios';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { ILoginInputs } from './LoginPopup.types';

export const useLogin = (url: string) => {
	const [apiErrorText, setApiErrorText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { closeLoginPopup } = useLoginPopupContext();
	const { setUserJwtToken } = useAuthContext();
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		return () => abortControler.current?.abort();
	}, []);

	const onMutate = (payload: ILoginInputs) => {
		setApiErrorText('');
		setIsLoading(true);
		abortControler.current = new AbortController();
		axios({
			method: 'POST',
			url,
			data: payload,
			signal: abortControler.current.signal,
		})
			.then((res) => {
				if (res.status === 201) {
					const ACCESS_TOKEN: string = res.data.access_token;
					setUserJwtToken(ACCESS_TOKEN);
					closeLoginPopup();
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
