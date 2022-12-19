import { rest } from 'msw';

import { GET_COCKTAIL_URL } from 'api/apiEndpoints';

import { cocktailsDatabase } from 'mocks/handlers/cocktailsHandler/cocktailsDatabase';

export const cocktailHandler = () => {
	return rest.post(process.env.REACT_APP_API_URL + GET_COCKTAIL_URL, (req, res, ctx) => {
		const cocktailId = req.body;
		const requestedCocktail = cocktailsDatabase.find((cocktail) => cocktail.id === cocktailId);
		if (requestedCocktail && cocktailId) {
			const response = {
				data: requestedCocktail,
				isNextCocktail: cocktailId < cocktailsDatabase.length ? true : false,
				isPrevCocktail: cocktailId > 1 ? true : false,
			};
			return res(ctx.status(200), ctx.delay(200), ctx.json({ ...response }));
		} else {
			return res(
				ctx.status(400),
				ctx.delay(100),
				ctx.json({
					errorMessage: `Cocktail does not exist`,
				})
			);
		}
	});
};
