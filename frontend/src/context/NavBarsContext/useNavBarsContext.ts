import { useContext } from 'react';
import { NavBarsContext } from './NavBarsContext';

export const useNavBarsContext = () => {
	const ctx = useContext(NavBarsContext);
	if (!ctx) {
		throw new Error('useNavBarsContext can only be used inside ContextProvider');
	}
	return ctx;
};
