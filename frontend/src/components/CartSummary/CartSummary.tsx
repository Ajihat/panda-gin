import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';

import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';

import { getTotalShoppingCartSummary, drawNumberOfItems, drawShippingCost } from './cartSummaryHelpers';

import './CartSummary.sass';

export const CartSummary = () => {
	const { numberOfProductsInCart, shoppingCartValue, shippingCost } = useShoppingCartContext();
	const { closeCartPopup } = useCartPopupContext();

	return (
		<div className='cartsummary'>
			<div className='cartsummary__inner' data-animation='animation-item'>
				<div className='cartsummary__row'>
					<div className='cartsummary__row-left'>{drawNumberOfItems(numberOfProductsInCart)}</div>
					<div className='cartsummary__row-right'>{shoppingCartValue.toFixed(2)}&euro;</div>
				</div>
				{numberOfProductsInCart > 0 && (
					<div className='cartsummary__row'>
						<div className='cartsummary__row-left'>Shipping</div>
						<div className='cartsummary__row-right'>{drawShippingCost(shippingCost)}</div>
					</div>
				)}
			</div>
			<div className='cartsummary__row moved' data-animation='animation-item'>
				<div className='cartsummary__row-left'>Total (tax incl.)</div>
				<div className='cartsummary__row-right'>
					{getTotalShoppingCartSummary({ numberOfProductsInCart, shoppingCartValue, shippingCost })}
					&euro;
				</div>
			</div>
			<div className='cartsummary__btn-holder' data-animation='animation-item'>
				<PrimaryButton onClick={closeCartPopup} text='Continue Shopping' type='button' />
			</div>
			<div className='cartsummary__btn-holder' data-animation='animation-item'>
				<PrimaryButton text='Proceed to checkout' type='button' />
				{numberOfProductsInCart === 0 && <OpacityLayer zIndex='2' />}
			</div>
		</div>
	);
};
