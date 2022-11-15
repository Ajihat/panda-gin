import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { PageLink } from 'components/PageLink/PageLink';
import { FancyLink } from 'components/FancyLink/FancyLink';
import { Gallery } from 'components/Gallery/Gallery';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Loader } from 'components/Loader/Loader';
import { RandomProduct } from 'components/RandomProduct/RandomProduct';
import { ApiError } from 'components/ApiError/ApiError';
import { RandomPicture } from 'components/RandomPicture/RandomPicture';

import { useGetProduct } from './useGetProduct';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './ProductPage.sass';

export const ProductPage = () => {
	const { id } = useParams<string>();
	if (!id) {
		throw new Error('ProductPage component should be rendered inside route with `id` param');
	}

	const { product, productLoading, apiErrorText } = useGetProduct(id);

	return (
		<div className='productpage'>
			<Helmet>
				<title>{`${product?.title || 'Product not found'} | Panda Gin`}</title>
				<meta name='description' content={product?.text} />
			</Helmet>
			<div className='productpage__inner'>
				<div className='productpage__link-holder'>
					<PageLink
						text='Back to products'
						textColor='black'
						arrowPosition='left'
						url={appRoutes.shop}
						shouldOpenCurtain={true}
					/>
				</div>
				<div className='productpage__product-holder'>
					{product && (
						<Gallery images={product.images} outOfStock={product.outOfStock} discount={product.discount} />
					)}
					{product && <Dashboard product={product} />}
					{productLoading && <Loader />}
					{apiErrorText && <ApiError text={apiErrorText} />}
				</div>
			</div>
			<RandomProduct currentProductId={id as string} />
			<FancyLink alignment='center' />
			<RandomPicture />
		</div>
	);
};
