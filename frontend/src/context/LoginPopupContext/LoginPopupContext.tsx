import { createContext, useState, useCallback } from 'react';

import { LoginPopupProviderProps, ILoginPopupContext } from './LoginPopupContext.types';

export const LoginPopupContext = createContext<ILoginPopupContext | null>(null);

export const LoginPopupProvider = ({ children }: LoginPopupProviderProps) => {
	const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

	const openLoginPopup = useCallback(() => {
		setIsLoginPopupOpen(true);
	}, []);

	const closeLoginPopup = useCallback(() => {
		setIsLoginPopupOpen(false);
	}, []);

	return (
		<LoginPopupContext.Provider
			value={{
				isLoginPopupOpen,
				closeLoginPopup,
				openLoginPopup,
			}}
		>
			{children}
		</LoginPopupContext.Provider>
	);
};
