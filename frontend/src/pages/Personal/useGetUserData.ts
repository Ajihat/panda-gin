import { useState, useEffect, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_USER_DATA } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { useAuthContext } from 'context/AuthContext/useAuthContext';

export const useGetUserData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [apiErrorText, setApiErrorText] = useState('');
	const abortControler = useRef<AbortController>();

	const { setUserData, userJwtToken } = useAuthContext();

	useEffect(() => {
		const fetchData = async () => {
			abortControler.current = new AbortController();
			try {
				const response = await axios({
					method: 'GET',
					url: GET_USER_DATA,
					signal: abortControler.current.signal,
					headers: {
						accept: 'application/json',
						Authorization: 'Bearer ' + userJwtToken,
					},
				});
				if (response.status === 200) {
					setUserData(response.data);
					setIsLoading(false);
				}
			} catch (error) {
				setIsLoading(false);
				setApiErrorText(drawApiErrorText(error, GET_USER_DATA));
			}
		};
		fetchData();
		return () => abortControler.current?.abort();
	}, [setUserData, userJwtToken]);

	return { isLoading, abortControler, apiErrorText };
};
