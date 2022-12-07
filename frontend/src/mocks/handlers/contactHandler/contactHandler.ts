import { rest } from 'msw';

export const contactHandler = () => {
	return rest.post('http://localhost:9595/contact', (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(1000));
	});
};
