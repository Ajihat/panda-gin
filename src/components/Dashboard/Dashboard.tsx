import { useState, useCallback } from 'react';

import { Header } from 'components/Header/Header';
import { ActualPriceCalculation } from 'components/ActualPriceCalculation/ActualPriceCalculation';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';
import { QuantitySelector } from 'components/QuantitySelector/QuantitySelector';
import { Formats } from 'components/Formats/Formats';
import { Link } from 'react-router-dom';

import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { DashboardProps } from './Dashboard.types';

import { basePriceCalculation, actualPriceCalculation } from './dashboardHelpers';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './Dashboard.sass';

export const Dashboard = ({ product }: DashboardProps) => {
	const { openCartPopup } = useCartPopupContext();
	const { openCurtain } = useCurtainContext();
	const { addProductToCart } = useShoppingCartContext();
	const INITIAL_PRODUCT_DASHBOARD_DATA = {
		format: {
			type: product.formats[0]?.text ?? null,
			promotion: false,
		},
		quantity: 1,
	};
	const [productDashboardData, setProductDashboardData] = useState(INITIAL_PRODUCT_DASHBOARD_DATA);

	const changeActiveFormat = useCallback((type: string, promotion = false) => {
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				format: {
					type,
					promotion,
				},
			};
		});
	}, []);

	const increaseQuantity = useCallback(() => {
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				quantity: prevState.quantity + 1,
			};
		});
	}, []);

	const decreaseQuantity = useCallback(() => {
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				quantity: Math.max(prevState.quantity - 1, 1),
			};
		});
	}, []);

	const handleButtonClick = () => {
		if (product.outOfStock) {
			return;
		}
		addProductToCart({
			id: product.id,
			title: product.title,
			quantity: productDashboardData.quantity,
			format: productDashboardData.format.type,
			unitPrice: actualPriceCalculation({
				regularPrice: Number(product.price),
				discount: Number(product.discount),
				formatPromotion: productDashboardData.format.promotion,
			}),
			mainImage: product.imageThumbnail,
		});
		setProductDashboardData(INITIAL_PRODUCT_DASHBOARD_DATA);
		openCartPopup();
	};

	return (
		<section className='dashboard'>
			<Header bigTitle={product.title} text={product.description} alignment='left' />
			<p className='dashboard__text'>{product.text}</p>
			<Link to={appRoutes.about} onClick={openCurtain} className='dashboard__link'>
				Know more
			</Link>
			{product.formats.length > 0 && (
				<>
					<label className='dashboard__label'>Format</label>
					<Formats
						formats={product.formats}
						activeFormat={productDashboardData.format.type}
						changeActiveFormat={changeActiveFormat}
					/>
				</>
			)}
			<label className='dashboard__label'>Quantity</label>
			<QuantitySelector
				quantity={productDashboardData.quantity}
				increaseQuantity={increaseQuantity}
				decreaseQuantity={decreaseQuantity}
				isGift={false}
			/>
			{productDashboardData.format.promotion && (
				<p className='dashboard__promotion'>Additional 10% promotion by purchasing a case</p>
			)}

			<div className='dashboard__checkout'>
				<div className='dashboard__prices'>
					<div
						className={`dashboard__price ${
							productDashboardData.format.promotion || product.discount ? 'dashboard__price--gray' : ''
						}`}
					>
						{basePriceCalculation(productDashboardData.format.promotion, product.price)}
						&euro;
					</div>
					{(productDashboardData.format.promotion || product.discount) && (
						<ActualPriceCalculation
							product={product}
							productDashboardData={productDashboardData}
							actualPriceCalculation={actualPriceCalculation}
						/>
					)}
				</div>
				<div className='dashboard__btn-holder' onClick={handleButtonClick}>
					<PrimaryButton text='Add to cart' type='button' isDisabled={product.outOfStock} />
					{product.outOfStock && <OpacityLayer zIndex='2' />}
				</div>
			</div>
		</section>
	);
};
