import { useContext } from 'react';
import { CurtainContext } from './CurtainContext';

export const useCurtainContext = () => {
	const ctx = useContext(CurtainContext);
	if (!ctx) {
		throw new Error('useCurtainContext can only be used inside ContextProvider');
	}
	return ctx;
};
