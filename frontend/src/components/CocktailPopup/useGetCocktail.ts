import { useState, useEffect, useCallback } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_COCKTAIL_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { CocktailState } from './useGetCocktail.types';

export const useGetCocktail = (cocktailId: number | null) => {
	const [cocktailState, setCocktailState] = useState<CocktailState>({
		isLoading: false,
		apiErrorText: '',
		cocktail: null,
	});

	const getCocktail = useCallback(async () => {
		if (!cocktailState.cocktail) {
			setCocktailState({ cocktail: null, isLoading: true, apiErrorText: '' });
		}
		if (cocktailState.cocktail) {
			setCocktailState({
				cocktail: cocktailState.cocktail,
				isLoading: true,
				apiErrorText: '',
			});
		}

		try {
			const response = await axios({
				method: 'POST',
				url: GET_COCKTAIL_URL,
				data: cocktailId,
			});
			if (response.status === 200) {
				setCocktailState({ isLoading: false, apiErrorText: '', cocktail: response.data });
			}
		} catch (error) {
			setCocktailState({
				isLoading: false,
				apiErrorText: drawApiErrorText(error, GET_COCKTAIL_URL),
				cocktail: null,
			});
		}
	}, [cocktailId]);

	useEffect(() => {
		getCocktail();
	}, [getCocktail]);

	return cocktailState;
};
