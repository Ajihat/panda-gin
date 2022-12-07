import { useState } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { NEWSLETTER_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { INewsletterInputs } from './Newsletter.types';

export const useNewsletter = () => {
	type NewsletterState =
		| {
				isLoading: false; //gdy sukces
				apiErrorText: '';
				isSuccess: true;
		  }
		| {
				isLoading: true; // gdy ładowanie
				apiErrorText: '';
				isSuccess: false;
		  }
		| {
				isLoading: false; // gdy błąd
				apiErrorText: string;
				isSuccess: false;
		  }
		| {
				isLoading: false; // stan początkowy
				apiErrorText: '';
				isSuccess: false;
		  };

	const [newsletterState, setNewsletterState] = useState<NewsletterState>({
		isLoading: false,
		apiErrorText: '',
		isSuccess: false,
	});

	const onMutate = (payload: INewsletterInputs) => {
		setNewsletterState({
			isLoading: true,
			apiErrorText: '',
			isSuccess: false,
		});
		axios({
			method: 'POST',
			url: NEWSLETTER_URL,
			data: payload,
		})
			.then((res) => {
				if (res.status === 200) {
					setNewsletterState({
						isLoading: false,
						apiErrorText: '',
						isSuccess: true,
					});
				}
			})
			.catch((e) => {
				setNewsletterState({
					isLoading: false,
					apiErrorText: drawApiErrorText(e, NEWSLETTER_URL),
					isSuccess: false,
				});
			});
	};

	return { newsletterState, onMutate };
};
