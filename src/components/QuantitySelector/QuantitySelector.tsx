import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';

import './QuantitySelector.sass';

import { QuantitySelectorProps } from './QuantitySelector.types';

export const QuantitySelector = ({ quantity, increaseQuantity, decreaseQuantity, isGift }: QuantitySelectorProps) => {
	return (
		<div className={`quantityselector ${isGift && 'quantityselector--inactive'}`}>
			<button onClick={decreaseQuantity} className='quantityselector__quantity-button'>
				-
			</button>
			<div className='quantityselector__quantity-output'>{quantity}</div>
			<button onClick={increaseQuantity} className='quantityselector__quantity-button'>
				+
			</button>
			{isGift && <OpacityLayer zIndex='1' />}
		</div>
	);
};
