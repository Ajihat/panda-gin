import ReactDom from 'react-dom';

import closeBtn from 'assets/close-btn.svg';

import { useCocktailPopupContext } from 'context/CocktailPopupContext/useCocktailPopupContext';
import { useNoScrollingWhilePopup } from 'common/useNoScrollingWhilePopup/useNoScrollingWhilePopup';

import './CocktailPopup.sass';

export const CocktailPopup = () => {
	const { setIsCocktailPopupOpen, setCocktailId } = useCocktailPopupContext();
	useNoScrollingWhilePopup();

	const closeCocktailPopup = () => {
		setIsCocktailPopupOpen(false);
		setCocktailId(null);
	};

	return ReactDom.createPortal(
		<div className='cocktailpopup'>
			<div className='cocktailpopup__black-layer' onClick={closeCocktailPopup}></div>
			<div className='cocktailpopup__content'>
				<img onClick={closeCocktailPopup} src={closeBtn} alt='close-btn' className='cocktailpopup__close-btn' />
			</div>
		</div>,
		document.getElementById('portal')!
	);
};
