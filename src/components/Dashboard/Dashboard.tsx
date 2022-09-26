import { useState } from "react";

import { Header } from "../Header/Header";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

import { DashboardProps } from "./Dashboard.types";

import "./Dashboard.sass";

export const Dashboard = ({ product }: DashboardProps) => {
    const [productFormat, setProductFormat] = useState<number | null>(1);
    const [formatPromotion, setFormatPromotion] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const { title, description, text, formats, price, discount, outOfStock } =
        product;

    const handleClick = (id: number, promotion?: boolean) => {
        setProductFormat(id);
        if (promotion) {
            setFormatPromotion(true);
        } else {
            setFormatPromotion(false);
        }
    };

    const increaseQuantity = () => setQuantity((prevState) => prevState + 1);

    const decreaseQuantity = () => {
        setQuantity((prevState) => {
            return Math.max(prevState - 1, 1);
        });
    };

    const actualPriceCalculation = (
        regularPrice: number,
        discount: number,
        formatPromotion: boolean
    ) => {
        let calculatedPrice: number = formatPromotion
            ? 6 * regularPrice
            : regularPrice;
        if (discount !== 0) {
            calculatedPrice = calculatedPrice * ((100 - discount) / 100);
        }
        if (formatPromotion) {
            calculatedPrice = calculatedPrice * 0.9; // 10% discont for case format
        }
        return calculatedPrice.toFixed(2);
    };

    return (
        <section className="dashboard">
            <Header bigTitle={title} text={description} alignment="left" />
            <p className="dashboard__text">{text}</p>
            <a href="" className="dashboard__link">
                Know more
            </a>
            {formats.length > 0 && (
                <>
                    <label className="dashboard__label">Format</label>
                    <div className="dashboard__formats">
                        {formats.map((format) => (
                            <button
                                className={`dashboard__formats-btn ${
                                    productFormat === format.id
                                        ? "dashboard__formats-btn--active"
                                        : ""
                                }`}
                                key={format.id}
                                onClick={() =>
                                    handleClick(format.id, format.promotion)
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
                <div className="dashboard__quantity-output">{quantity}</div>
                <div
                    onClick={increaseQuantity}
                    className="dashboard__quantity-button"
                >
                    +
                </div>
            </div>

            {formatPromotion && (
                <p className="dashboard__promotion">
                    Additional 10% promotion by purchasing a case
                </p>
            )}

            <div className="dashboard__checkout">
                <div className="dashboard__prices">
                    <div
                        className={`dashboard__price ${
                            formatPromotion || discount
                                ? "dashboard__price--gray"
                                : ""
                        }`}
                    >
                        {formatPromotion ? 6 * Number(price) : price}
                        &euro;
                    </div>
                    {(formatPromotion || discount) && (
                        <div className="dashboard__price">
                            {actualPriceCalculation(
                                Number(price),
                                Number(discount),
                                formatPromotion
                            )}
                            &euro;
                        </div>
                    )}
                </div>
                <div className="dashboard__btn-holder">
                    <PrimaryButton
                        text="Add to cart"
                        type="button"
                        isDisabled={outOfStock}
                    />
                    {outOfStock && (
                        <div className="dashboard__gray-layer"></div>
                    )}
                </div>
            </div>
        </section>
    );
};
