export const numberOfProductsPerPage = () => {
	const MOBILE_DEVICE_VIEWPORT_WIDTH = 600;
	const NUMBER_OF_PRODUCTS_PER_PAGE_ON_DESKTOP = 9;
	const NUMBER_OF_PRODUCTS_PER_PAGE_ON_MOBILE = 5;
	const actualViewPortWidth = window.innerWidth;

	return actualViewPortWidth > MOBILE_DEVICE_VIEWPORT_WIDTH
		? NUMBER_OF_PRODUCTS_PER_PAGE_ON_DESKTOP
		: NUMBER_OF_PRODUCTS_PER_PAGE_ON_MOBILE;
};
