import { useState } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { CONTACT_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { IContactFormInputs } from './ContactForm.types';

export const useContact = () => {
	type ContactState =
		| {
				isLoading: false; //initial state
				isSuccess: false;
				apiErrorText: '';
		  }
		| {
				isLoading: true; // on loading
				isSuccess: false;
				apiErrorText: '';
		  }
		| {
				isLoading: false; // on success
				isSuccess: true;
				apiErrorText: '';
		  }
		| {
				isLoading: false; // on error
				isSuccess: false;
				apiErrorText: string;
		  };
	const [contactState, setContactState] = useState<ContactState>({
		isLoading: false,
		isSuccess: false,
		apiErrorText: '',
	});

	const sendForm = (payload: IContactFormInputs) => {
		setContactState({
			isLoading: true,
			isSuccess: false,
			apiErrorText: '',
		});
		axios({
			method: 'POST',
			url: CONTACT_URL,
			data: payload,
		})
			.then((res) => {
				if (res.status === 200) {
					setContactState({
						isLoading: false,
						isSuccess: true,
						apiErrorText: '',
					});
				}
			})
			.catch((e) => {
				setContactState({
					isLoading: false,
					isSuccess: false,
					apiErrorText: drawApiErrorText(e, CONTACT_URL),
				});
			});
	};
	return { contactState, sendForm };
};
