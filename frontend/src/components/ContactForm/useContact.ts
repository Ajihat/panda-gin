import { useState, useCallback } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { CONTACT_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { IContactFormInputs } from './ContactForm.types';
import { ContactState } from './useContact.types';

export const useContact = () => {
	const [contactState, setContactState] = useState<ContactState>({
		isLoading: false,
		isSuccess: false,
		apiErrorText: '',
	});

	const sendForm = useCallback(async (payload: IContactFormInputs) => {
		setContactState({
			isLoading: true,
			isSuccess: false,
			apiErrorText: '',
		});
		try {
			const response = await axios({
				method: 'POST',
				url: CONTACT_URL,
				data: payload,
			});
			if (response.status === 200) {
				setContactState({
					isLoading: false,
					isSuccess: true,
					apiErrorText: '',
				});
			}
		} catch (error) {
			setContactState({
				isLoading: false,
				isSuccess: false,
				apiErrorText: drawApiErrorText(error, CONTACT_URL),
			});
		}
	}, []);

	return { contactState, sendForm };
};
