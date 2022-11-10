import { useContext } from 'react';
import { CartPopupContext } from './CartPopupContext';

export const useCartPopupContext = () => {
	const ctx = useContext(CartPopupContext);
	if (!ctx) throw new Error('useCartPopupContext can only be used inside ContextProvider');
	return ctx;
};
