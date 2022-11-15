import { AxiosError } from 'axios';

import { LOGIN_URL, SUBSCRIBE_URL, GET_PRODUCT_URL, GET_USER_DATA } from 'api/apiEndpoints';

export const drawApiErrorText = (error: AxiosError, endpoint: string) => {
	if (error.code === 'ERR_NETWORK') {
		return 'Connection error';
	} else if (error.code === 'ERR_BAD_REQUEST' && endpoint === LOGIN_URL) {
		return 'Wrong email or password';
	} else if (error.code === 'ERR_BAD_REQUEST' && endpoint === SUBSCRIBE_URL) {
		return 'User already exist';
	} else if (error.code === 'ERR_BAD_RESPONSE' && endpoint === GET_PRODUCT_URL) {
		return 'Product does not exist';
	} else if (error.code === 'ERR_BAD_RESPONSE' && endpoint === GET_USER_DATA) {
		return 'Product does not exist';
	} else if (error.code === 'ERR_CANCELED') {
		return '';
	} else {
		return 'We are sorry. Something went wrong';
	}
};
