export const getProductPriceAfterDiscount = (productPrice: string, discount: string) => {
	return (Number(productPrice) * ((100 - Number(discount)) / 100)).toFixed(2);
};
