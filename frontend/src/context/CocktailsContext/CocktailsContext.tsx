import { createContext, useState } from 'react';

import { useGetCocktails } from './useGetCocktails';

import { CocktailsContextProps, ICocktailsContext, CocktailsCategories } from './CocktailsContext.types';

export const CocktailsContext = createContext<null | ICocktailsContext>(null);

export const CocktailsProvider = ({ children }: CocktailsContextProps) => {
	const [cocktailsCategory, setCocktailsCategory] = useState<CocktailsCategories>('all');
	const { cocktails, isLoading, apiErrorText } = useGetCocktails(cocktailsCategory);

	return (
		<CocktailsContext.Provider
			value={{
				cocktails,
				isLoading,
				apiErrorText,
				cocktailsCategory,
				setCocktailsCategory,
			}}
		>
			{children}
		</CocktailsContext.Provider>
	);
};
