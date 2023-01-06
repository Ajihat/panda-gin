import { motion } from 'framer-motion';

import arrow from 'assets/long-arrow.png';

import { useCocktailPopupContext } from 'context/CocktailPopupContext/useCocktailPopupContext';

import { CocktailTileProps } from './CocktailTile.types';

import './CocktailTile.sass';

export const CocktailTile = ({ id, index, imageUrl, title, subtitle }: CocktailTileProps) => {
	const { setIsCocktailPopupOpen, setCocktailId } = useCocktailPopupContext();

	const handleClick = () => {
		setIsCocktailPopupOpen(true);
		setCocktailId(id);
	};
	return (
		<motion.article
			onClick={handleClick}
			className='cocktailtile'
			initial={{
				opacity: 0,
				transform: 'scale(0.95)',
			}}
			animate={{
				opacity: 1,
				transform: 'scale(1)',
			}}
			transition={{ duration: 0.5, delay: index / 10 }}
		>
			<img src={imageUrl} alt={title} className='cocktailtile__img' />
			<div className='cocktailtile__content'>
				<div className='cocktailtile__up'>
					<h3 className='cocktailtile__title'>
						{title}
						<span className='cocktailtile__title-line'></span>
					</h3>
					<img src={arrow} alt='click-arrow' className='cocktailtile__arrow' />
				</div>
				<p className='cocktailtile__subtitle'>{subtitle}</p>
			</div>
		</motion.article>
	);
};
