import { useState } from "react";

import { Header } from "components/Header/Header";
import { PrimaryButton } from "components/PrimaryButton/PrimaryButton";
import { OpacityLayer } from "components/OpacityLayer/OpacityLayer";

import { useShoppingCartContext } from "context/ShoppingCartContext/useShoppingCartContext";
import { useAppContext } from "context/AppContext/useAppContext";

import { DashboardProps } from "./Dashboard.types";

import "./Dashboard.sass";

export const Dashboard = ({ product }: DashboardProps) => {
    const { openCartPopup } = useAppContext();
    const { addProductToCart } = useShoppingCartContext();
    const BOTTLES_PER_CASE = 6;
    const INITIAL_PRODUCT_DASHBOARD_DATA = {
        format: {
            type: product.formats[0]?.text ?? null,
            promotion: false,
        },
        quantity: 1,
    };
    const [productDashboardData, setProductDashboardData] = useState(
        INITIAL_PRODUCT_DASHBOARD_DATA
    );

    const handleClick = (type: string, promotion = false) => {
        setProductDashboardData({
            ...productDashboardData,
            format: {
                type,
                promotion,
            },
        });
    };

    const increaseQuantity = () =>
        setProductDashboardData((prevState) => {
            return {
                ...productDashboardData,
                quantity: prevState.quantity + 1,
            };
        });

    const decreaseQuantity = () => {
        setProductDashboardData((prevState) => {
            return {
                ...productDashboardData,
                quantity: Math.max(prevState.quantity - 1, 1),
            };
        });
    };

    const actualPriceCalculation = (
        regularPrice: number,
        discount: number,
        formatPromotion: boolean
    ) => {
        let calculatedPrice: number = formatPromotion
            ? BOTTLES_PER_CASE * regularPrice
            : regularPrice;
        if (discount !== 0) {
            calculatedPrice = calculatedPrice * ((100 - discount) / 100);
        }
        if (formatPromotion) {
            calculatedPrice = calculatedPrice * 0.9; // 10% discont for case format
        }

        return Number(calculatedPrice);
    };

    const handleButtonClick = () => {
        if (!product.outOfStock) {
            addProductToCart({
                id: product.id,
                title: product.title,
                quantity: productDashboardData.quantity,
                format: productDashboardData.format.type,
                unitPrice: actualPriceCalculation(
                    Number(product.price),
                    Number(product.discount),
                    productDashboardData.format.promotion
                ),
                mainImage: product.imageThumbnail,
            });
            setProductDashboardData(INITIAL_PRODUCT_DASHBOARD_DATA);
            openCartPopup();
        }
    };

    return (
        <section className="dashboard">
            <Header
                bigTitle={product.title}
                text={product.description}
                alignment="left"
            />
            <p className="dashboard__text">{product.text}</p>
            <a href="" className="dashboard__link">
                Know more
            </a>
            {product.formats.length > 0 && (
                <>
                    <label className="dashboard__label">Format</label>
                    <div className="dashboard__formats">
                        {product.formats.map((format) => (
                            <button
                                className={`dashboard__formats-btn ${
                                    productDashboardData.format.type ===
                                    format.text
                                        ? "dashboard__formats-btn--active"
                                        : ""
                                }`}
                                key={format.id}
                                onClick={() =>
                                    handleClick(format.text, format.promotion)
                                }
                            >
                                {format.text}
                            </button>
                        ))}
                    </div>
                </>
            )}
            <label className="dashboard__label">Quantity</label>
            <div className="dashboard__quantity">
                <div
                    onClick={decreaseQuantity}
                    className="dashboard__quantity-button"
                >
                    -
                </div>
                <div className="dashboard__quantity-output">
                    {productDashboardData.quantity}
                </div>
                <div
                    onClick={increaseQuantity}
                    className="dashboard__quantity-button"
                >
                    +
                </div>
            </div>

            {productDashboardData.format.promotion && (
                <p className="dashboard__promotion">
                    Additional 10% promotion by purchasing a case
                </p>
            )}

            <div className="dashboard__checkout">
                <div className="dashboard__prices">
                    <div
                        className={`dashboard__price ${
                            productDashboardData.format.promotion ||
                            product.discount
                                ? "dashboard__price--gray"
                                : ""
                        }`}
                    >
                        {productDashboardData.format.promotion
                            ? BOTTLES_PER_CASE * Number(product.price)
                            : product.price}
                        &euro;
                    </div>
                    {(productDashboardData.format.promotion ||
                        product.discount) && (
                        <div className="dashboard__price">
                            {actualPriceCalculation(
                                Number(product.price),
                                Number(product.discount),
                                productDashboardData.format.promotion
                            ).toFixed(2)}
                            &euro;
                        </div>
                    )}
                </div>
                <div
                    className="dashboard__btn-holder"
                    onClick={handleButtonClick}
                >
                    <PrimaryButton
                        text="Add to cart"
                        type="button"
                        isDisabled={product.outOfStock}
                    />
                    {product.outOfStock && <OpacityLayer zIndex="2" />}
                </div>
            </div>
        </section>
    );
};
