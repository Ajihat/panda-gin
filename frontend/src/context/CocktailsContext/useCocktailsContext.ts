import { useContext } from 'react';
import { CocktailsContext } from './CocktailsContext';

export const useCocktailsContext = () => {
	const ctx = useContext(CocktailsContext);
	if (!ctx) {
		throw new Error('useCocktailsContext can only be used inside ContextProvider');
	}
	return ctx;
};
