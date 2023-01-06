import { useState } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { NEWSLETTER_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { INewsletterInputs } from './Newsletter.types';
import { NewsletterState } from './useNewsletter.types';

export const useNewsletter = () => {
	const [newsletterState, setNewsletterState] = useState<NewsletterState>({
		isLoading: false,
		apiErrorText: '',
		isSuccess: false,
	});

	const onMutate = async (payload: INewsletterInputs) => {
		setNewsletterState({
			isLoading: true,
			apiErrorText: '',
			isSuccess: false,
		});
		try {
			const response = await axios({
				method: 'POST',
				url: NEWSLETTER_URL,
				data: payload,
			});
			if (response.status === 200) {
				setNewsletterState({
					isLoading: false,
					apiErrorText: '',
					isSuccess: true,
				});
			}
		} catch (error) {
			setNewsletterState({
				isLoading: false,
				apiErrorText: drawApiErrorText(error, NEWSLETTER_URL),
				isSuccess: false,
			});
		}
	};

	return { newsletterState, onMutate };
};
