import { useContext } from 'react';
import { CocktailPopupContext } from './CocktailPopupContext';

export const useCocktailPopupContext = () => {
	const ctx = useContext(CocktailPopupContext);
	if (!ctx) throw new Error('useCocktailPopupContext can only be used inside ContextProvider');
	return ctx;
};
