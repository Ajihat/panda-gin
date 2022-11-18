import { Link } from 'react-router-dom';

import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';
import { QuantitySelector } from 'components/QuantitySelector/QuantitySelector';

import closeBtn from 'assets/close-btn.svg';

import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';
import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { quantityAndPriceToTotalPriceLabel } from './cartListingHelpers';

import { CartListingProps } from './CartListing.types';

import './CartListing.sass';

export const CartListing = ({ productsInCart }: CartListingProps) => {
	const { closeCartPopup } = useCartPopupContext();
	const { openCurtain } = useCurtainContext();
	const { deleteProductFromCart, deleteGiftFromCart, increaseProductQuantity, decreaseProductQuantity } =
		useShoppingCartContext();

	const handleLinkClick = () => {
		openCurtain();
		closeCartPopup();
	};

	const handleDeletion = (id: number, format: string | null) => {
		deleteProductFromCart(id, format);
		if (format === 'gift') {
			deleteGiftFromCart();
		}
	};

	if (productsInCart.length === 0)
		return (
			<p className='cartlisting__text' data-animation='animation-item'>
				There are no more items in your cart
			</p>
		);

	return (
		<ul className='cartlisting'>
			{productsInCart.map((productInCart) => {
				const { mainImage, id, title, format, quantity, unitPrice } = productInCart;

				return (
					<li key={format ? format + id : id} className='cartlisting__item' data-animation='animation-item'>
						<div className='cartlisting__inner'>
							<Link className='cartlisting__link' to={`/product/${id}`} onClick={handleLinkClick}>
								<img src={mainImage} alt='product-img' className='cartlisting__item-img' />
							</Link>
							<Link className='cartlisting__link' to={`/product/${id}`} onClick={handleLinkClick}>
								<h3 className='cartlisting__item-title'>
									{title}
									{format && <p className='cartlisting__format'>({format})</p>}
								</h3>
							</Link>
						</div>
						<div className='cartlisting__inner-right'>
							<QuantitySelector
								quantity={quantity}
								increaseQuantity={() => increaseProductQuantity(productInCart)}
								decreaseQuantity={() => decreaseProductQuantity(productInCart)}
								isGift={format === 'gift'}
							/>
							<p className='cartlisting__item-price'>
								{quantityAndPriceToTotalPriceLabel(quantity, unitPrice)}
							</p>
						</div>
						<div className='cartlisting__deletion'>
							<button onClick={() => handleDeletion(id, format)} className='cartlisting__delete-btn'>
								<img src={closeBtn} alt='delete-sign' className='cartlisting__delete-img' />
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
