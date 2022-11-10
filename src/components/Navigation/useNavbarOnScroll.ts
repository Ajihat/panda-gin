import { useRef, useEffect, useCallback } from 'react';
import { useNavBarsContext } from 'context/NavBarsContext/useNavBarsContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';

export const useNavbarOnScroll = () => {
	const { hideNavbars, showNavbars } = useNavBarsContext();
	const { scrollingDirectionIsBeingChecked } = useCartPopupContext();
	const lastScrollPositionRef = useRef<number>(0);

	const checkScrollingDirection = useCallback(() => {
		if (!scrollingDirectionIsBeingChecked) return;
		const scroll: number = window.pageYOffset;
		if (scroll > lastScrollPositionRef.current && scroll >= 120) {
			hideNavbars();
		} else {
			showNavbars();
		}
		lastScrollPositionRef.current = scroll <= 0 ? 0 : scroll;
	}, [hideNavbars, showNavbars, scrollingDirectionIsBeingChecked]);

	useEffect(() => {
		window.addEventListener('scroll', checkScrollingDirection);
		return () => window.removeEventListener('scroll', checkScrollingDirection);
	}, [checkScrollingDirection]);
};
