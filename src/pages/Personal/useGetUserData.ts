import { useState, useEffect, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_USER_DATA } from 'api/apiEndpoints';

import { useAuthContext } from 'context/AuthContext/useAuthContext';

export const useGetUserData = (jwt: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [apiError, setApiError] = useState('');
	const abortControler = useRef<AbortController>();

	const { setUserData } = useAuthContext();

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
						Authorization: 'Bearer ' + jwt,
					},
				});
				if (response.status === 200) {
					setUserData(response.data);
					setIsLoading(false);
				}
			} catch (e) {
				setIsLoading(false);
				if (e.code === 'ERR_NETWORK') {
					setApiError('Connection error');
				} else if (e.code === 'ERR_BAD_RESPONSE') {
					setApiError('User does not exist');
				} else {
					setApiError('We are sorry. Something went wrong');
				}
			}
		};
		fetchData();
		return () => abortControler.current?.abort();
	}, [jwt, setUserData]);

	return { isLoading, abortControler, apiError };
};
