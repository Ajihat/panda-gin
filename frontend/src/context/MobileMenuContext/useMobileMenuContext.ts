import { useContext } from 'react';
import { MobileMenuContext } from './MobileMenuContext';

export const useMobileMenuContext = () => {
	const ctx = useContext(MobileMenuContext);
	if (!ctx) throw new Error('useMobileMenuContext can only be used inside ContextProvider');
	return ctx;
};
