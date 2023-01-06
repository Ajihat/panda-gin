export const getTotalShoppingCartSummary = (args: {
	numberOfProductsInCart: number;
	shoppingCartValue: number;
	shippingCost: number;
}) => {
	switch (args.numberOfProductsInCart) {
		case 0:
			return '0.00';
		default:
			return (args.shoppingCartValue + args.shippingCost).toFixed(2);
	}
};

export const drawNumberOfItems = (numberOfProductsInCart: number) => {
	return numberOfProductsInCart === 1 ? '1 ITEM' : numberOfProductsInCart + ' ITEMS';
};

export const drawShippingCost = (shippingCost: number) => {
	return shippingCost === 0 ? 'FREE' : `${shippingCost}€`;
};
