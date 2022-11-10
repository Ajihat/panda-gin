import { useState } from 'react';

import { Header } from 'components/Header/Header';
import { ActualPriceCalculation } from 'components/ActualPriceCalculation/ActualPriceCalculation';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { OpacityLayer } from 'components/OpacityLayer/OpacityLayer';
import { Link } from 'react-router-dom';

import { useShoppingCartContext } from 'context/ShoppingCartContext/useShoppingCartContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { DashboardProps, ActualPriceCalculationData } from './Dashboard.types';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './Dashboard.sass';

const BOTTLES_PER_CASE = 6;

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

	const handleClick = (type: string, promotion = false) => {
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				format: {
					type,
					promotion,
				},
			};
		});
	};

	const increaseQuantity = () =>
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				quantity: prevState.quantity + 1,
			};
		});

	const decreaseQuantity = () => {
		setProductDashboardData((prevState) => {
			return {
				...prevState,
				quantity: Math.max(prevState.quantity - 1, 1),
			};
		});
	};

	const basePriceCalculation = (isCaseFormat: boolean) => {
		return isCaseFormat ? BOTTLES_PER_CASE * Number(product.price) : Number(product.price);
	};

	const actualPriceCalculation = (actualPriceCalculationData: ActualPriceCalculationData) => {
		const { regularPrice, discount, formatPromotion } = actualPriceCalculationData;
		let calculatedPrice = regularPrice;
		if (formatPromotion) {
			calculatedPrice = calculatedPrice * BOTTLES_PER_CASE;
		}
		if (discount !== 0) {
			calculatedPrice = calculatedPrice * ((100 - discount) / 100);
		}
		if (formatPromotion) {
			calculatedPrice = calculatedPrice * 0.9; // 10% discount for case format
		}

		return calculatedPrice;
	};

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
					<div className='dashboard__formats'>
						{product.formats.map((format) => (
							<button
								className={`dashboard__formats-btn ${
									productDashboardData.format.type === format.text
										? 'dashboard__formats-btn--active'
										: ''
								}`}
								key={format.id}
								onClick={() => handleClick(format.text, format.promotion)}
							>
								{format.text}
							</button>
						))}
					</div>
				</>
			)}
			<label className='dashboard__label'>Quantity</label>
			<div className='dashboard__quantity'>
				<button onClick={decreaseQuantity} className='dashboard__quantity-button'>
					-
				</button>
				<div className='dashboard__quantity-output'>{productDashboardData.quantity}</div>
				<button onClick={increaseQuantity} className='dashboard__quantity-button'>
					+
				</button>
			</div>

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
						{basePriceCalculation(productDashboardData.format.promotion).toFixed(2)}
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
