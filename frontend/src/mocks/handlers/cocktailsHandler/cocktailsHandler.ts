import { rest } from 'msw';

import { GET_COCKTAILS_URL } from 'api/apiEndpoints';

import { cocktailsDatabase } from './cocktailsDatabase';

export const cocktailsHandler = () => {
	return rest.post(process.env.REACT_APP_API_URL + GET_COCKTAILS_URL, (req, res, ctx) => {
		const cocktailsCategory = req.body;
		let requestedCocktails;
		switch (cocktailsCategory) {
			case 'all':
				requestedCocktails = cocktailsDatabase;
				break;
			case 'classic':
				requestedCocktails = cocktailsDatabase.filter((cocktail) => cocktail.category === cocktailsCategory);
				break;
			case 'signature':
				requestedCocktails = cocktailsDatabase.filter((cocktail) => cocktail.category === cocktailsCategory);
				break;
		}

		return res(ctx.status(200), ctx.delay(100), ctx.json({ requestedCocktails }));
	});
};
