import { useState, useEffect } from 'react';

import { axiosInstance as axios } from 'api/axios';
import { GET_COCKTAILS_URL } from 'api/apiEndpoints';

import { drawApiErrorText } from 'common/drawApiErrorText/drawApiErrorText';

import { Cocktail } from './CocktailsContext.types';
import { CocktailsCategories } from 'context/CocktailsContext/CocktailsContext.types';

export const useGetCocktails = (cocktailsCategory: CocktailsCategories) => {
	type CocktailsState =
		| {
				cocktails: []; //loading
				isLoading: true;
				apiErrorText: '';
		  }
		| {
				cocktails: Cocktail[]; // success
				isLoading: false;
				apiErrorText: '';
		  }
		| {
				cocktails: []; // error
				isLoading: false;
				apiErrorText: string;
		  };

	const [cocktailsState, setCocktailsState] = useState<CocktailsState>({
		cocktails: [],
		isLoading: true,
		apiErrorText: '',
	});

	useEffect(() => {
		setCocktailsState({ cocktails: [], isLoading: true, apiErrorText: '' });
		axios({
			method: 'POST',
			url: GET_COCKTAILS_URL,
			data: cocktailsCategory,
		})
			.then((res) => {
				if (res.status === 200) {
					setCocktailsState({ cocktails: res.data.requestedCocktails, isLoading: false, apiErrorText: '' });
				}
			})
			.catch((error) => {
				setCocktailsState({
					cocktails: [],
					isLoading: false,
					apiErrorText: drawApiErrorText(error, GET_COCKTAILS_URL),
				});
			});
	}, [cocktailsCategory]);

	return cocktailsState;
};
