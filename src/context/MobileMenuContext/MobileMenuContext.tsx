import { createContext, useState, useCallback } from 'react';

import { MobileMenuProviderProps, IMobileMenuContext } from './MobileMenuContext.types';

export const MobileMenuContext = createContext<IMobileMenuContext | null>(null);

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen((prevState) => !prevState);
	}, []);

	return (
		<MobileMenuContext.Provider
			value={{
				isMobileMenuOpen,
				toggleMobileMenu,
			}}
		>
			{children}
		</MobileMenuContext.Provider>
	);
};
