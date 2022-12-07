import { createContext, useState } from 'react';

import { CocktailsContextProps, ICocktailsContext } from './CocktailsContext.types';

export const CocktailsContext = createContext<null | ICocktailsContext>(null);

export const CocktailsProvider = ({ children }: CocktailsContextProps) => {
	const [cocktails, setCocktails] = useState(null);
	const [cocktailsCategory, setCocktailsCategory] = useState<'all' | 'classic' | 'signature'>('all');

	<CocktailsContext.Provider
		value={{
			cocktails,
			setCocktails,
			cocktailsCategory,
			setCocktailsCategory,
		}}
	>
		{children}
	</CocktailsContext.Provider>;
};
