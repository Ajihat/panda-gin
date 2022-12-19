import { useState, useEffect, useCallback } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_COCKTAILS_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { CocktailsState } from './useGetCocktails.types';
import { CocktailsCategories } from 'context/CocktailsContext/CocktailsContext.types';

export const useGetCocktails = (cocktailsCategory: CocktailsCategories) => {
	const [cocktailsState, setCocktailsState] = useState<CocktailsState>({
		cocktails: [],
		isLoading: true,
		apiErrorText: '',
	});

	const getCocktails = useCallback(async () => {
		setCocktailsState({ cocktails: [], isLoading: true, apiErrorText: '' });
		try {
			const response = await axios({
				method: 'POST',
				url: GET_COCKTAILS_URL,
				data: cocktailsCategory,
			});
			if (response.status === 200) {
				setCocktailsState({ cocktails: response.data.requestedCocktails, isLoading: false, apiErrorText: '' });
			}
		} catch (error) {
			setCocktailsState({
				cocktails: [],
				isLoading: false,
				apiErrorText: drawApiErrorText(error, GET_COCKTAILS_URL),
			});
		}
	}, [cocktailsCategory]);

	useEffect(() => {
		getCocktails();
	}, [getCocktails]);

	return cocktailsState;
};
