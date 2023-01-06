import { useContext } from 'react';
import { SubscribePopupContext } from './SubscribePopupContext';

export const useSubscribePopupContext = () => {
	const ctx = useContext(SubscribePopupContext);
	if (!ctx) {
		throw new Error('useSubscribePopupContext can only be used inside ContextProvider');
	}
	return ctx;
};
