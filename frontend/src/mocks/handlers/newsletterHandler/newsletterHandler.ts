import { rest } from 'msw';

import { NEWSLETTER_URL } from 'api/apiEndpoints';

import { NewsletterRequestBody } from './newsletterHandler.types';

export const newsletterHandler = () => {
	return rest.post<NewsletterRequestBody>(process.env.REACT_APP_API_URL + NEWSLETTER_URL, (req, res, ctx) => {
		const { newsletterEmail } = req.body;
		const newsletterEmails = localStorage.getItem('newsletterEmails');
		if (newsletterEmails) {
			const doesEmailExist: boolean = JSON.parse(newsletterEmails).includes(newsletterEmail);

			if (doesEmailExist) {
				return res(
					ctx.status(400),
					ctx.delay(1000),
					ctx.json({
						errorMessage: `Email: '${newsletterEmail}' already in use`,
					})
				);
			}
			if (!doesEmailExist) {
				localStorage.setItem(
					'newsletterEmails',
					JSON.stringify([...JSON.parse(newsletterEmails), newsletterEmail])
				);
				return res(ctx.status(200), ctx.delay(1000));
			}
		}
		if (newsletterEmails === null) {
			localStorage.setItem('newsletterEmails', JSON.stringify([newsletterEmail]));
			return res(ctx.status(200), ctx.delay(1000));
		}
	});
};
