import { createContext, useState, useCallback, useEffect, useMemo } from 'react';

import { useGetProducts } from './useGetProducts';

import { IProductsContext, ProductsProviderProps, ProductsCategories } from './ProductsContext.types';

export const ProductsContext = createContext<IProductsContext | null>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [productsCategory, setProductsCategory] = useState<ProductsCategories>('all');
	const [productsPage, setProductsPage] = useState(0);

	const { productsLoading, products, apiErrorText } = useGetProducts(productsCategory);

	const changeProductsCategory = useCallback((category: ProductsCategories) => {
		setProductsCategory(category);
	}, []);

	const increaseProductsPage = useCallback(() => {
		setProductsPage((prevState) => {
			return Math.min(products.length - 1, prevState + 1);
		});
	}, [products.length]);

	const decreaseProductsPage = useCallback(() => {
		setProductsPage((prevState) => {
			return Math.max(prevState - 1, 0);
		});
	}, []);

	const ProductsContextValue = useMemo(() => {
		return {
			productsCategory,
			changeProductsCategory,
			products,
			productsLoading,
			productsPage,
			increaseProductsPage,
			decreaseProductsPage,
			setProductsPage,
			apiErrorText,
		};
	}, [
		productsCategory,
		changeProductsCategory,
		products,
		productsLoading,
		productsPage,
		increaseProductsPage,
		decreaseProductsPage,
		setProductsPage,
		apiErrorText,
	]);
	return <ProductsContext.Provider value={ProductsContextValue}>{children}</ProductsContext.Provider>;
};
