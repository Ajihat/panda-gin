import { useState, createContext, useCallback } from 'react';

import { NavBarsProviderProps, INavBarsContext } from './NavBarsContext.types';

export const NavBarsContext = createContext<INavBarsContext | null>(null);

export const NavBarsProvider = ({ children }: NavBarsProviderProps) => {
	const [navBarsAreHidden, setNavBarsAreHidden] = useState(false);
	const [scrollingDirectionIsBeingChecked, setScrollingDirectionIsBeingChecked] = useState(true);

	const showNavbars = useCallback(() => {
		setNavBarsAreHidden(false);
	}, []);

	const hideNavbars = useCallback(() => {
		setNavBarsAreHidden(true);
	}, []);

	const enableScrollingDirectionCheck = useCallback(() => {
		setScrollingDirectionIsBeingChecked(true);
	}, []);

	const disableScrollingDirectionCheck = useCallback(() => {
		setScrollingDirectionIsBeingChecked(false);
	}, []);

	return (
		<NavBarsContext.Provider
			value={{
				navBarsAreHidden,
				showNavbars,
				hideNavbars,
				scrollingDirectionIsBeingChecked,
				enableScrollingDirectionCheck,
				disableScrollingDirectionCheck,
			}}
		>
			{children}
		</NavBarsContext.Provider>
	);
};
