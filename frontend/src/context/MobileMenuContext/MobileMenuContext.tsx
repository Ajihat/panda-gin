import { createContext, useState, useCallback } from 'react';

import { useTopSliderContext } from 'context/TopSliderContext/useTopSliderContext';
import { useNavBarsContext } from 'context/NavBarsContext/useNavBarsContext';

import { NO_SCROLL } from 'data/specialClasses/specialClasses';

import { MobileMenuProviderProps, IMobileMenuContext } from './MobileMenuContext.types';

export const MobileMenuContext = createContext<IMobileMenuContext | null>(null);

const TOP_SLIDER_HEIGHT = 65;

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { isTopSliderClosed, closeTopSlider, openTopSlider } = useTopSliderContext();
	const { hideNavbars, showNavbars } = useNavBarsContext();

	const openMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(true);
		document.body.classList.add(NO_SCROLL);
		hideNavbars();
		if (!isTopSliderClosed && window.pageYOffset < TOP_SLIDER_HEIGHT) {
			closeTopSlider();
		}
	}, [closeTopSlider, isTopSliderClosed, hideNavbars]);

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(false);
		document.body.classList.remove(NO_SCROLL);
		showNavbars();
		if (isTopSliderClosed && window.pageYOffset < TOP_SLIDER_HEIGHT) {
			openTopSlider();
		}
	}, [openTopSlider, isTopSliderClosed, showNavbars]);

	return (
		<MobileMenuContext.Provider
			value={{
				isMobileMenuOpen,
				openMobileMenu,
				closeMobileMenu,
			}}
		>
			{children}
		</MobileMenuContext.Provider>
	);
};
