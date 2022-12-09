import { useState, useEffect } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_COCKTAIL_URL } from 'api/apiEndpoints';

import { Cocktail } from 'context/CocktailsContext/CocktailsContext.types';

export const useGetCocktail = (cocktailId: number) => {
	type CocktailState =
		| {
				isLoading: false; //idle
				apiErrorText: '';
				cocktail: null;
		  }
		| {
				isLoading: true; // on loading
				apiErrorText: '';
				cocktail: null;
		  }
		| {
				isLoading: false; // on success
				apiErrorText: '';
				cocktail: Cocktail;
		  }
		| {
				isLoading: false; // on error
				apiErrorText: string;
				cocktail: null;
		  };

	const [cocktailState, setCocktailState] = useState<CocktailState>({
		isLoading: false,
		apiErrorText: '',
		cocktail: null,
	});

	useEffect(() => {
		setCocktailState({ cocktail: null, isLoading: true, apiErrorText: '' });
		axios({
			method: 'POST',
			url: GET_COCKTAIL_URL,
			data: cocktailId,
		});
	}, [cocktailId]);

	return cocktailState;
};
