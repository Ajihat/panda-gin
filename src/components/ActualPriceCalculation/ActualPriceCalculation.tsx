import { ActualPriceCalculationProps } from './ActualPriceCalculation.types';

import './ActualPriceCalculation.sass';

export const ActualPriceCalculation = ({
	product,
	productDashboardData,
	actualPriceCalculation,
}: ActualPriceCalculationProps) => {
	return (
		<div className='actual-price-calculation'>
			{actualPriceCalculation({
				regularPrice: Number(product.price),
				discount: Number(product.discount),
				formatPromotion: productDashboardData.format.promotion,
			}).toFixed(2)}
			&euro;
		</div>
	);
};
