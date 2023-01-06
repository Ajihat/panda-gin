import ReactDom from 'react-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { ApiError } from 'components/ApiError/ApiError';
import { PopupContent } from 'components/PopupContent/PopupContent';
import { CocktailButton } from 'components/CocktailButton/CocktailButton';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import closeBtn from 'assets/close-btn.svg';

import { useCocktailPopupContext } from 'context/CocktailPopupContext/useCocktailPopupContext';
import { useGetCocktail } from './useGetCocktail';

import './CocktailPopup.sass';

export const CocktailPopup = () => {
	const { setIsCocktailPopupOpen, cocktailId, setCocktailId } = useCocktailPopupContext();
	const { cocktail, isLoading, apiErrorText } = useGetCocktail(cocktailId);

	const closeCocktailPopup = () => {
		setIsCocktailPopupOpen(false);
	};

	const nextCocktail = () => {
		setCocktailId((prevId) => {
			if (prevId !== null) {
				return prevId + 1;
			}
			return prevId;
		});
	};

	const prevCocktail = () => {
		setCocktailId((prevId) => {
			if (prevId !== null) {
				return prevId - 1;
			}
			return prevId;
		});
	};

	return ReactDom.createPortal(
		<PopupContent>
			<div className='cocktailpopup'>
				<div className='cocktailpopup__black-layer' onClick={closeCocktailPopup}></div>
				<div className='cocktailpopup__content'>
					{cocktail && (
						<motion.div
							initial={{
								opacity: 0,
							}}
							exit={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{ duration: 0.5 }}
							className='cocktailpopup__inner'
						>
							<Helmet>
								<title>{cocktail.data.title} | Panda Gin</title>
							</Helmet>
							<div className='cocktailpopup__left'>
								<img
									src={cocktail.data.secondImage}
									alt={cocktail.data.title}
									className='cocktailpopup__img'
								/>
							</div>
							<div className='cocktailpopup__right'>
								<Header
									bigTitle={cocktail.data.title}
									alignment='left'
									smallTitle={cocktail.data.subtitle}
								/>
								<div className='cocktailpopup__details'>
									<div className='cocktailpopup__recipe'>
										<p className='cocktailpopup__minor-heading'>Recipe</p>
										{cocktail.data.recipe.map((recipeText, index) => (
											<p className='cocktailpopup__text' key={index}>
												{recipeText}
											</p>
										))}
									</div>
									<div className='cocktailpopup__garnish'>
										<p className='cocktailpopup__minor-heading'>Garnish</p>
										<p className='cocktailpopup__text'>{cocktail.data.garnish}</p>
									</div>
								</div>
							</div>
							{cocktail.isPrevCocktail && (
								<CocktailButton onClick={prevCocktail}>
									<MdOutlineKeyboardArrowLeft />
								</CocktailButton>
							)}
							{cocktail.isNextCocktail && (
								<CocktailButton onClick={nextCocktail} modifierClass='cocktailbutton--right'>
									<MdOutlineKeyboardArrowRight />
								</CocktailButton>
							)}
						</motion.div>
					)}
					<img
						onClick={closeCocktailPopup}
						src={closeBtn}
						alt='close-btn'
						className='cocktailpopup__close-btn'
					/>
					{isLoading && <Loader />}
					{apiErrorText.length > 0 && <ApiError text={apiErrorText} />}
				</div>
			</div>
		</PopupContent>,
		document.getElementById('portal')!
	);
};
