import { createContext, useState, useCallback } from 'react';

import { CartPopupProviderProps, ICartPopupContext } from './CartPopupContext.types';

import { useTopSliderContext } from 'context/TopSliderContext/useTopSliderContext';
import { useNavBarsContext } from 'context/NavBarsContext/useNavBarsContext';

import { NO_SCROLL } from 'data/specialClasses/specialClasses';

export const CartPopupContext = createContext<null | ICartPopupContext>(null);

const TOP_SLIDER_HEIGHT = 65;

export const CartPopupProvider = ({ children }: CartPopupProviderProps) => {
	const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

	const { isTopSliderClosed, closeTopSlider, openTopSlider } = useTopSliderContext();
	const { hideNavbars, showNavbars } = useNavBarsContext();

	const openCartPopup = useCallback(() => {
		setIsCartPopupOpen(true);
		if (!isTopSliderClosed && window.pageYOffset < TOP_SLIDER_HEIGHT) {
			closeTopSlider();
		}
		document.body.classList.add(NO_SCROLL);
		hideNavbars();
	}, [isTopSliderClosed, closeTopSlider, hideNavbars]);

	const closeCartPopup = useCallback(() => {
		setIsCartPopupOpen(false);
		showNavbars();
		document.body.classList.remove(NO_SCROLL);
		if (isTopSliderClosed && window.pageYOffset < TOP_SLIDER_HEIGHT) {
			openTopSlider();
		}
	}, [isTopSliderClosed, openTopSlider, showNavbars]);

	return (
		<CartPopupContext.Provider
			value={{
				isCartPopupOpen,
				openCartPopup,
				closeCartPopup,
			}}
		>
			{children}
		</CartPopupContext.Provider>
	);
};
