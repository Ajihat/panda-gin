import { createContext, useState } from 'react';

import { CocktailPopupProviderProps, ICocktailPopupContext } from './CocktailPopupContext.types';

export const CocktailPopupContext = createContext<ICocktailPopupContext | null>(null);

export const CocktailPopupProvider = ({ children }: CocktailPopupProviderProps) => {
	const [isCocktailPopupOpen, setIsCocktailPopupOpen] = useState(false);
	const [cocktailId, setCocktailId] = useState<null | number>(null);

	return (
		<CocktailPopupContext.Provider value={{ isCocktailPopupOpen, setIsCocktailPopupOpen, setCocktailId }}>
			{children}
		</CocktailPopupContext.Provider>
	);
};
