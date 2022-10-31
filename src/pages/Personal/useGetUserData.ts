import { useState, useEffect, useRef } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_USER_DATA } from 'api/apiEndpoints';

import { User } from './Personal.types';

export const useGetUserData = (jwt: string) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [apiError, setApiError] = useState<string>('');
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		abortControler.current = new AbortController();
		axios({
			method: 'GET',
			url: GET_USER_DATA,
			signal: abortControler.current.signal,
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer ' + jwt,
			},
		})
			.then((res) => {
				setUser(res.data);
			})
			.catch((e) => {
				if (e.code === 'ERR_NETWORK') {
					setApiError('Connection error');
				} else if (e.code === 'ERR_BAD_RESPONSE') {
					setApiError('User does not exist');
				} else {
					setApiError('We are sorry. Something went wrong');
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [jwt]);

	return { user, isLoading, abortControler, apiError };
};
