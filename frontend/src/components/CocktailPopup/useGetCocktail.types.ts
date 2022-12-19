import { Cocktail } from 'context/CocktailsContext/CocktailsContext.types';

type Idle = {
	isLoading: false;
	apiErrorText: '';
	cocktail: null;
};

type Loading = {
	isLoading: true;
	apiErrorText: '';
	cocktail: null | {
		data: Cocktail;
		isNextCocktail: boolean;
		isPrevCocktail: boolean;
	};
};

type Success = {
	isLoading: false;
	apiErrorText: '';
	cocktail: {
		data: Cocktail;
		isNextCocktail: boolean;
		isPrevCocktail: boolean;
	};
};

type Error = {
	isLoading: false;
	apiErrorText: string;
	cocktail: null;
};

export type CocktailState = Idle | Loading | Success | Error;
