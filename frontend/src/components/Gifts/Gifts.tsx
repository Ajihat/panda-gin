import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';

import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';

import { ShoppingCartProduct } from 'context/ShoppingCartContext/ShoppingCartContext.types';

import { giftProducts } from 'data/giftProducts/giftProducts';

import './Gifts.sass';

export const Gifts = () => {
	const { shoppingCartValue, choosenGiftId, addGiftToCart, deleteGiftFromCart } = useShoppingCartContext();

	const handleClick = (giftProduct: ShoppingCartProduct) => {
		if (shoppingCartValue >= 140 && !choosenGiftId) {
			addGiftToCart(giftProduct);
		}
	};
	useEffect(() => {
		if (shoppingCartValue < 140 && choosenGiftId) {
			deleteGiftFromCart();
		}
	}, [shoppingCartValue, choosenGiftId, deleteGiftFromCart]);
	return (
		<div className='gifts'>
			{shoppingCartValue < 140 && (
				<p className='gifts__info' data-animation='animation-item'>
					Another {(140 - shoppingCartValue).toFixed(2)} &euro; and you can choose one of these gifts:
				</p>
			)}
			{shoppingCartValue >= 140 && !choosenGiftId && (
				<p className='gifts__info' data-animation='animation-item'>
					Congratulations! you can choose one of these gifts:
				</p>
			)}
			{shoppingCartValue >= 140 && choosenGiftId && (
				<p className='gifts__info' data-animation='animation-item'>
					Congratulations! You chose your panda gift:
				</p>
			)}
			<div className='gifts__wrapper'>
				<div className='gifts__products'>
					{giftProducts.map((giftProduct) => {
						const { id, title, mainImage } = giftProduct;
						return (
							<div
								className={`gifts__product ${id === choosenGiftId && 'gifts__product--choosen'}`}
								key={id}
								data-animation='animation-item'
							>
								<Link to={`/product/${id}`} target='_blank'>
									<img src={mainImage} alt='product-pic' className='gifts__product-img' />
								</Link>
								<h4 className='gifts__product-title'>{title}</h4>
								<p className='gifts__product-price'>FREE</p>
								<div className='gifts__product-btn-holder'>
									<PrimaryButton
										onClick={() => handleClick(giftProduct)}
										text='choose'
										type='button'
										isDisabled={shoppingCartValue < 140}
									/>
									{id === choosenGiftId && <OpacityLayer zIndex='2' />}
								</div>

								{(shoppingCartValue < 140 || (choosenGiftId && id !== choosenGiftId)) && (
									<OpacityLayer zIndex='2' />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
