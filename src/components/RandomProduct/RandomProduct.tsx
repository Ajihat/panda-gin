import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { ProductTile } from 'components/ProductTile/ProductTile';
import { ApiError } from 'components/ApiError/ApiError';

import { useGetRandomProducts } from './useGetRandomProducts';

import { RandomProductProps } from './RandomProduct.types';

import './RandomProduct.sass';

export const RandomProduct = ({ currentProductId }: RandomProductProps) => {
	const { randomProducts, isLoading, apiError } = useGetRandomProducts(currentProductId);
	return (
		<div className='randomproduct'>
			<Header bigTitle='You may also like' smallTitle='Panda fan shop' alignment='left' />
			<div className='randomproduct__inner'>
				{randomProducts.map((randomProduct, index) => {
					const { id, title, description, price, outOfStock, discount, images } = randomProduct;
					return (
						<ProductTile
							key={id}
							id={id}
							title={title}
							description={description}
							price={price}
							outOfStock={outOfStock}
							discount={discount}
							mainPictureUrl={images[0]}
							index={index}
							openInNewTab={true}
						/>
					);
				})}
				{isLoading && <Loader />}
				{apiError && <ApiError text={apiError} />}
			</div>
		</div>
	);
};
