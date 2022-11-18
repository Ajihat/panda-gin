import { Product } from 'context/ProductsContext/ProductsContext.types';
import { ActualPriceCalculationData } from 'components/Dashboard/Dashboard.types';

export interface ActualPriceCalculationProps {
	product: Product;
	productDashboardData: {
		format: {
			type: string;
			promotion: boolean;
		};
		quantity: number;
	};
	actualPriceCalculation: (data: ActualPriceCalculationData) => number;
}
