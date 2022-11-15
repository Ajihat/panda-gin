export interface ProductsProviderProps {
	children: React.ReactNode;
}

export type ProductsCategories =
	| 'all'
	| 'spirits'
	| 'giftbox'
	| 'goodies'
	| 'clothing'
	| 'limited edition'
	| 'promotions';

export interface IProductsContext {
	productsCategory: ProductsCategories;
	changeProductsCategory: (category: ProductsCategories) => void;
	products: Product[][];
	productsLoading: boolean;
	productsPage: number;
	increaseProductsPage: () => void;
	decreaseProductsPage: () => void;
	setProductsPage: React.Dispatch<React.SetStateAction<number>>;
	apiErrorText: string;
}

export interface Product {
	id: number;
	category: ProductsCategories;
	title: string;
	description: string;
	price: string;
	outOfStock: boolean;
	discount: string;
	limitedEdition: boolean;
	images: string[];
	imageThumbnail: string;
	text: string;
	formats: { id: number; text: string; promotion?: boolean }[];
}
