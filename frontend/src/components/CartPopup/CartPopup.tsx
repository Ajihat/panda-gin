import { useEffect } from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';

import { CartListing } from 'components/CartListing/CartListing';
import { Gifts } from 'components/Gifts/Gifts';
import { CartSummary } from 'components/CartSummary/CartSummary';
import { PopupContent } from 'components/PopupContent/PopupContent';

import closeBtn from 'assets/close-btn.svg';

import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';
import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';

import { drawNumberOfArticles } from './cartPopupHelpers';

import './CartPopup.sass';

export const CartPopup = () => {
	const { closeCartPopup } = useCartPopupContext();
	const { numberOfProductsInCart, productsInCart } = useShoppingCartContext();

	useEffect(() => {
		const animationItems = Array.from(document.querySelectorAll('[data-animation]')) as Array<HTMLElement>;
		animationItems.forEach((animationItem, index) => {
			animationItem.style.transitionDelay = `${index / 10}s`;
			animationItem.style.bottom = '0px';
			animationItem.style.opacity = '1';
		});
	}, [productsInCart]);

	return ReactDom.createPortal(
		<PopupContent>
			<motion.div
				key='cart-popup'
				className='cartpopup'
				exit={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{ duration: 0.3 }}
			>
				<div className='cartpopup__inner'>
					<div className='cartpopup__black-line'></div>
					<div className='cartpopup__wrapper'>
						<div className='cartpopup__header'>
							<h3 className='cartpopup__small' data-animation='animation-item'>
								{drawNumberOfArticles(numberOfProductsInCart)}
								<div className='cartpopup__small-line'></div>
							</h3>
							<h1 className='cartpopup__big' data-animation='animation-item'>
								Shopping Cart
							</h1>
						</div>
						<div className='cartpopup__container'>
							<div className='cartpopup__left'>
								<CartListing productsInCart={productsInCart} />
								<Gifts />
							</div>
							<div className='cartpopup__right'>
								<CartSummary />
							</div>
						</div>
						<button onClick={() => closeCartPopup()} className='cartpopup__close-btn'>
							<img src={closeBtn} alt='close-btn' className='cartpopup__close-btn-icon' />
						</button>
					</div>
				</div>
			</motion.div>
		</PopupContent>,
		document.getElementById('portal')!
	);
};
