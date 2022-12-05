import { useState } from 'react';

import { IContactFormInputs } from './ContactForm.types';

export const useContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [apiErrorText, setApiErrorText] = useState('');

	const sendForm = (data: IContactFormInputs) => {
		setIsLoading(true);
		setIsSuccess(false);
		setTimeout(() => {
			setIsLoading(false);
			setApiErrorText('');
			setIsSuccess(true);
		}, 1500);
	};
	return { isLoading, apiErrorText, sendForm, isSuccess };
};
