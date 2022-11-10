import { useState, createContext, useCallback } from 'react';

import { NavBarsProviderProps, INavBarsContext } from './NavBarsContext.types';

export const NavBarsContext = createContext<INavBarsContext | null>(null);

export const NavBarsProvider = ({ children }: NavBarsProviderProps) => {
	const [navBarsAreHidden, setNavBarsAreHidden] = useState(false);

	const showNavbars = useCallback(() => {
		setNavBarsAreHidden(false);
	}, []);

	const hideNavbars = useCallback(() => {
		setNavBarsAreHidden(true);
	}, []);

	return (
		<NavBarsContext.Provider
			value={{
				navBarsAreHidden,
				showNavbars,
				hideNavbars,
			}}
		>
			{children}
		</NavBarsContext.Provider>
	);
};
