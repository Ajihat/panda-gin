import { useState } from "react";

import { Header } from "../Header/Header";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { OpacityLayer } from "../OpacityLayer/OpacityLayer";

import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";
import { useAppContext } from "../../context/AppContext/useAppContext";

import { DashboardProps } from "./Dashboard.types";

import "./Dashboard.sass";

export const Dashboard = ({ product }: DashboardProps) => {
    const { openCartPopup } = useAppContext();
    const {
        id,
        title,
        description,
        text,
        formats,
        price,
        discount,
        outOfStock,
        imageThumbnail,
    } = product;
    const [productFormat, setProductFormat] = useState<string | null>(() => {
        if (formats.length > 0) {
            return formats[0].text;
        } else return null;
    });
    const [formatPromotion, setFormatPromotion] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const { addProductToCart } = useShoppingCartContext();

    const handleClick = (format: string, promotion?: boolean) => {
        setProductFormat(format);
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

    const handleButtonClick = () => {
        if (!outOfStock) {
            addProductToCart({
                id,
                title,
                quantity,
                format: productFormat,
                unitPrice: Number(
                    actualPriceCalculation(
                        Number(price),
                        Number(discount),
                        formatPromotion
                    )
                ),
                mainImage: imageThumbnail,
            });
            setQuantity(1);
            openCartPopup();
        }
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
                                    productFormat === format.text
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
                <div
                    className="dashboard__btn-holder"
                    onClick={handleButtonClick}
                >
                    <PrimaryButton
                        text="Add to cart"
                        type="button"
                        isDisabled={outOfStock}
                    />
                    {outOfStock && <OpacityLayer zIndex="2" />}
                </div>
            </div>
        </section>
    );
};
