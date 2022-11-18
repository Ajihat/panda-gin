import { ActualPriceCalculationData } from './Dashboard.types';

const BOTTLES_PER_CASE = 6;

export const basePriceCalculation = (isCaseFormat: boolean, productPrice: string) => {
	return isCaseFormat ? (BOTTLES_PER_CASE * Number(productPrice)).toFixed(2) : Number(productPrice).toFixed(2);
};

export const actualPriceCalculation = (actualPriceCalculationData: ActualPriceCalculationData) => {
	const { regularPrice, discount, formatPromotion } = actualPriceCalculationData;
	let calculatedPrice = regularPrice;
	if (formatPromotion) {
		calculatedPrice = calculatedPrice * BOTTLES_PER_CASE;
	}
	if (discount !== 0) {
		calculatedPrice = calculatedPrice * ((100 - discount) / 100);
	}
	if (formatPromotion) {
		calculatedPrice = calculatedPrice * 0.9; // 10% discount for case format
	}

	return calculatedPrice;
};
