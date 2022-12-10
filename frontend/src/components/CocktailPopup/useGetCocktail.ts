import { useState, useEffect } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_COCKTAIL_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { Cocktail } from 'context/CocktailsContext/CocktailsContext.types';

export const useGetCocktail = (cocktailId: number | null) => {
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
				cocktail: {
					data: Cocktail;
					isNextCocktail: boolean;
					isPrevCocktail: boolean;
				};
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
		if (cocktailId === null) return;
		setCocktailState({ cocktail: null, isLoading: true, apiErrorText: '' });
		axios({
			method: 'POST',
			url: GET_COCKTAIL_URL,
			data: cocktailId,
		})
			.then((res) => {
				if (res.status === 200) {
					setCocktailState({ isLoading: false, apiErrorText: '', cocktail: res.data });
				}
			})
			.catch((error) => {
				setCocktailState({
					isLoading: false,
					apiErrorText: drawApiErrorText(error, GET_COCKTAIL_URL),
					cocktail: null,
				});
			});
	}, [cocktailId]);

	return cocktailState;
};
