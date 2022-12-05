import { createContext, useState, useCallback } from 'react';

import { SubscribePopupProviderProps, ISubscribePopupContext } from './SubscribePopupContext.types';

export const SubscribePopupContext = createContext<ISubscribePopupContext | null>(null);

export const SubscribeProvider = ({ children }: SubscribePopupProviderProps) => {
	const [isSubscribePopupOpen, setIsSubscribePopupOpen] = useState(false);

	const openSubscribePopup = useCallback(() => {
		setIsSubscribePopupOpen(true);
	}, []);

	const closeSubscribePopup = useCallback(() => {
		setIsSubscribePopupOpen(false);
	}, []);
	return (
		<SubscribePopupContext.Provider
			value={{
				isSubscribePopupOpen,
				openSubscribePopup,
				closeSubscribePopup,
			}}
		>
			{children}
		</SubscribePopupContext.Provider>
	);
};
