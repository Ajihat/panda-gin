import { AppRoutes } from './appRoutes.types';

export const appRoutes: AppRoutes = {
	shop: '/',
	about: '/about',
	faq: '/faq',
	contact: '/contact',
	personal: '/personal',
	personal_userInfo: '/personal/user-info',
	personal_manageProducts: '/personal/manage-products',
	personal_manageProducts_editProduct: '/personal/manage-products/product-:id',
	personal_orders: '/personal/orders',
	productPage: '/product/:id',
	noMatch: '/*',
};
