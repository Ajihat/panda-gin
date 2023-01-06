import { useContext } from 'react';
import { LoginPopupContext } from './LoginPopupContext';

export const useLoginPopupContext = () => {
	const ctx = useContext(LoginPopupContext);
	if (!ctx) {
		throw new Error('useLoginPopupContext can only be used inside ContextProvider');
	}
	return ctx;
};
