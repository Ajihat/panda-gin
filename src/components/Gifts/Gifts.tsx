import { useEffect } from "react";

import { Link } from "react-router-dom";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { OpacityLayer } from "../OpacityLayer/OpacityLayer";

import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";

import { ShoppingCartProduct } from "../../context/ShoppingCartContext/ShoppingCartContext.types";

import { giftProducts } from "../../data/giftProducts/giftProducts";

import "./Gifts.sass";

export const Gifts = () => {
    const {
        shoppingCartValue,
        choosenGiftId,
        productsInCart,
        addProductToCart,
        deleteProductFromCart,
        setGiftIsChoosen,
        setGiftIsNotChoosen,
    } = useShoppingCartContext();

    const handleClick = (giftProduct: ShoppingCartProduct) => {
        if (shoppingCartValue >= 140 && !choosenGiftId) {
            const { id, title, quantity, format, unitPrice, mainImage } =
                giftProduct;
            addProductToCart({
                id,
                title,
                quantity,
                format,
                unitPrice,
                mainImage,
            });
            setGiftIsChoosen(id);
        }
    };
    useEffect(() => {
        if (shoppingCartValue < 140 && choosenGiftId) {
            setGiftIsNotChoosen();
            deleteProductFromCart(choosenGiftId, "gift");
        }
    }, [
        shoppingCartValue,
        setGiftIsNotChoosen,
        choosenGiftId,
        deleteProductFromCart,
    ]);
    return (
        <div className="gifts">
            {shoppingCartValue < 140 && (
                <p
                    className="gifts__info"
                    data-order={`${
                        productsInCart.length === 0
                            ? 4
                            : 3 + productsInCart.length
                    }`}
                >
                    Another {(140 - shoppingCartValue).toFixed(2)} &euro; and
                    you can choose one of these gifts:
                </p>
            )}
            {shoppingCartValue >= 140 && !choosenGiftId && (
                <p
                    className="gifts__info"
                    data-order={`${
                        productsInCart.length === 0
                            ? 4
                            : 3 + productsInCart.length
                    }`}
                >
                    Congratulations! you can choose one of these gifts:
                </p>
            )}
            {shoppingCartValue >= 140 && choosenGiftId && (
                <p
                    className="gifts__info"
                    data-order={`${
                        productsInCart.length === 0
                            ? 4
                            : 3 + productsInCart.length
                    }`}
                >
                    Congratulations! You chose your panda gift:
                </p>
            )}
            <div className="gifts__products">
                {giftProducts.map((giftProduct, index, format) => {
                    const { id, title, mainImage } = giftProduct;
                    return (
                        <div
                            className={`gifts__product ${
                                id === choosenGiftId &&
                                "gifts__product--choosen"
                            }`}
                            key={id}
                            data-order={`${
                                productsInCart.length === 0
                                    ? 5 + index
                                    : 4 + productsInCart.length + index
                            }`}
                        >
                            <Link to={`/product/${id}`} target="_blank">
                                <img
                                    src={mainImage}
                                    alt="product-pic"
                                    className="gifts__product-img"
                                />
                            </Link>
                            <h4 className="gifts__product-title">{title}</h4>
                            <p className="gifts__product-price">FREE</p>
                            <div
                                onClick={() => handleClick(giftProduct)}
                                className="gifts__product-btn-holder"
                            >
                                <PrimaryButton
                                    text="choose"
                                    type="button"
                                    isDisabled={shoppingCartValue < 140}
                                />
                                {id === choosenGiftId && (
                                    <OpacityLayer zIndex="2" />
                                )}
                            </div>

                            {(shoppingCartValue < 140 ||
                                (choosenGiftId && id !== choosenGiftId)) && (
                                <OpacityLayer zIndex="2" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
