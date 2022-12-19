import { rest } from 'msw';

import { CONTACT_URL } from 'api/apiEndpoints';

export const contactHandler = () => {
	return rest.post(process.env.REACT_APP_API_URL + CONTACT_URL, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(1000));
	});
};
