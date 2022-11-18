import { Product } from 'context/ProductsContext/ProductsContext.types';

export interface DashboardProps {
	product: Product;
}

export interface ActualPriceCalculationData {
	regularPrice: number;
	discount: number;
	formatPromotion: boolean;
}
