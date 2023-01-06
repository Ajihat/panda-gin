export const quantityAndPriceToTotalPriceLabel = (quantity: number, unitPrice: number) => {
	const totalPriceLabel = unitPrice === 0 ? 'FREE' : `€${(quantity * unitPrice).toFixed(2)}`;
	return totalPriceLabel;
};
