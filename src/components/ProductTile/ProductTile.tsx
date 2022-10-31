import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';

import { useAppContext } from 'context/AppContext/useAppContext';

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
	const productTileRef = useRef<HTMLElement | null>(null);
	const { handleLinkClick } = useAppContext();
	const { pathname } = useLocation();
	useEffect(() => {
		const delay = (index + 1) * 100;
		const timeoutId = setTimeout(() => {
			productTileRef.current?.classList.remove('producttile--invisible');
		}, delay);
		return () => clearTimeout(timeoutId);
	}, [index]);

	return (
		<article ref={productTileRef} className='producttile producttile--invisible'>
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
								{(Number(price) * ((100 - Number(discount)) / 100)).toFixed(2)}
								&euro;
							</p>
						)}
					</div>
					{outOfStock && <OpacityLayer zIndex='2' />}
				</div>
				{outOfStock && <p className='producttile__out-of-stock'>Out of stock</p>}
				{discount && <p className='producttile__out-of-stock'>{`${discount}% off`}</p>}
			</Link>
		</article>
	);
};
