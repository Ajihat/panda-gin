import { useEffect } from 'react';

import { useNavBarsContext } from 'context/NavBarsContext/useNavBarsContext';

import { NO_SMOOTH_SCROLLING } from 'data/specialClasses/specialClasses';

export const useNoScrollingWhilePopup = () => {
	const { disableScrollingDirectionCheck, enableScrollingDirectionCheck } = useNavBarsContext();
	useEffect(() => {
		if (document.documentElement.classList.contains(NO_SMOOTH_SCROLLING)) return;
		const topScroll = window.pageYOffset || document.documentElement.scrollTop;
		const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;

		const scroll = () => {
			window.scrollTo(leftScroll, topScroll);
		};
		document.documentElement.classList.add(NO_SMOOTH_SCROLLING);
		window.addEventListener('scroll', scroll);
		disableScrollingDirectionCheck();

		return () => {
			document.documentElement.classList.remove(NO_SMOOTH_SCROLLING);
			window.removeEventListener('scroll', scroll);
			enableScrollingDirectionCheck();
		};
	}, []);
};
