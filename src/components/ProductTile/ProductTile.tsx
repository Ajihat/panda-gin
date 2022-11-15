import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';

import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { getProductPriceAfterDiscount } from './productTileHelpers';

import { ProductTileProps } from './ProductTile.types';

import './ProductTile.sass';

export const ProductTile = ({
	id,
	title,
	description,
	price,
	outOfStock,
	discount,
	mainPictureUrl,
	index,
	openInNewTab,
}: ProductTileProps) => {
	const { handleLinkClick } = useCurtainContext();
	const { pathname } = useLocation();

	return (
		<motion.article
			initial={{
				opacity: 0,
				transform: 'scale(0.95)',
			}}
			animate={{
				opacity: 1,
				transform: 'scale(1)',
			}}
			transition={{ duration: 0.5, delay: index / 10 }}
			className='producttile'
		>
			<Link
				to={`/product/${id}`}
				className='producttile__link'
				onClick={() => handleLinkClick(`/product-${id}`, pathname, true)}
				target={openInNewTab ? '_blank' : ''}
			>
				<img src={mainPictureUrl} alt='panda-gin-product' className='producttile__picture' />
				<div className='producttile__content'>
					<div className='producttile__content-left'>
						<h3 className='producttile__header'>
							{title}
							<span className='producttile__line'></span>
						</h3>
						<p className='producttile__desc'>{description}</p>
					</div>
					<div className='producttile__content-right'>
						<p
							className={
								discount ? 'producttile__price producttile__price--dashed' : 'producttile__price'
							}
						>
							{price}&euro;
						</p>
						{discount && (
							<p className='producttile__price'>
								{getProductPriceAfterDiscount(price, discount)}
								&euro;
							</p>
						)}
					</div>
					{outOfStock && <OpacityLayer zIndex='2' />}
				</div>
				{outOfStock && <p className='producttile__out-of-stock'>Out of stock</p>}
				{discount && <p className='producttile__out-of-stock'>{`${discount}% off`}</p>}
			</Link>
		</motion.article>
	);
};
