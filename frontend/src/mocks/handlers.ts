import { rest } from 'msw';

import { NewsletterRequestBody } from './handlers.types';

const RESPONSE_DELAY = 2000;

export const handlers = [
	rest.post<NewsletterRequestBody>('http://localhost:9595/newsletter', (req, res, ctx) => {
		const { newsletterEmail } = req.body;
		const newsletterEmails = localStorage.getItem('newsletterEmails');
		if (newsletterEmails) {
			const doesEmailExist: boolean = JSON.parse(newsletterEmails).includes(newsletterEmail);

			if (doesEmailExist) {
				return res(
					ctx.status(400),
					ctx.delay(RESPONSE_DELAY),
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
				return res(ctx.status(200), ctx.delay(RESPONSE_DELAY));
			}
		}
		if (newsletterEmails === null) {
			localStorage.setItem('newsletterEmails', JSON.stringify([newsletterEmail]));
			return res(ctx.status(200), ctx.delay(RESPONSE_DELAY));
		}
	}),
	rest.post('http://localhost:9595/contact', (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(RESPONSE_DELAY));
	}),
];
