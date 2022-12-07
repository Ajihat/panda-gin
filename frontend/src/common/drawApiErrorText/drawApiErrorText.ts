import Axios from 'axios';

import { LOGIN_URL, SUBSCRIBE_URL, GET_PRODUCT_URL, GET_USER_DATA, NEWSLETTER_URL } from 'api/apiEndpoints';

export const drawApiErrorText = (error: unknown, endpoint: string) => {
	if (Axios.isAxiosError(error)) {
		if (error.code === 'ERR_NETWORK') {
			return 'Connection error';
		}
		if (error.code === 'ERR_BAD_REQUEST' && endpoint === LOGIN_URL) {
			return 'Wrong email or password';
		}
		if (error.code === 'ERR_BAD_REQUEST' && endpoint === SUBSCRIBE_URL) {
			return 'User already exist';
		}
		if (error.code === 'ERR_BAD_RESPONSE' && endpoint === GET_PRODUCT_URL) {
			return 'Product does not exist';
		}
		if (error.code === 'ERR_BAD_RESPONSE' && endpoint === GET_USER_DATA) {
			return 'Product does not exist';
		}
		if (error.code === 'ERR_BAD_REQUEST' && endpoint === NEWSLETTER_URL) {
			return 'Email already in use';
		}
		if (error.code === 'ERR_CANCELED') {
			return '';
		}
	}

	return 'We are sorry. Something went wrong';
};
