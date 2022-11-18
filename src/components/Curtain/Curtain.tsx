import { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

import pandaHead from 'assets/panda-head.png';

import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';
import { useTimeout } from 'common/useTimeout/useTimeout';

import { NO_SCROLL, NO_SMOOTH_SCROLLING } from 'data/specialClasses/specialClasses';

import './Curtain.sass';

export const Curtain = () => {
	const { closeCurtain } = useCurtainContext();

	const scrollToPageTop = () => {
		window.scrollTo(0, 0);
	};

	useTimeout(closeCurtain, 1500);

	useEffect(() => {
		scrollToPageTop();
		window.addEventListener('scroll', scrollToPageTop);
		return () => window.removeEventListener('scroll', scrollToPageTop);
	}, []);

	useEffect(() => {
		document.body.classList.add(NO_SCROLL);
		document.documentElement.classList.add(NO_SMOOTH_SCROLLING);

		return () => {
			document.body.classList.remove(NO_SCROLL);
			document.documentElement.classList.remove(NO_SMOOTH_SCROLLING);
		};
	}, []);

	return ReactDom.createPortal(
		<div className='curtain'>
			<img src={pandaHead} alt='panda-icon' className='curtain__icon' />
		</div>,
		document.getElementById('portal')!
	);
};
