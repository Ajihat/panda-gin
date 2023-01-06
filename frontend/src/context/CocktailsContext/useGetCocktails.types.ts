import { Cocktail } from './CocktailsContext.types';

type Loading = {
	cocktails: [];
	isLoading: true;
	apiErrorText: '';
};

type Success = {
	cocktails: Cocktail[];
	isLoading: false;
	apiErrorText: '';
};

type Error = {
	cocktails: [];
	isLoading: false;
	apiErrorText: string;
};

export type CocktailsState = Loading | Success | Error;
