import { Link } from "react-router-dom";

import { OpacityLayer } from "../OpacityLayer/OpacityLayer";

import closeBtn from "../../assets/close-btn.svg";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";

import { CartListingProps } from "./CartListing.types";
import { ShoppingCartProduct } from "../../context/ShoppingCartContext/ShoppingCartContext.types";

import "./CartListing.sass";

export const CartListing = ({ productsInCart }: CartListingProps) => {
    const { openCurtain, closeCartPopup } = useAppContext();
    const {
        deleteProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        setGiftIsNotChoosen,
    } = useShoppingCartContext();

    const handleLinkClick = () => {
        openCurtain();
        closeCartPopup();
    };

    const handleDeletion = (id: number, format: string | null) => {
        deleteProductFromCart(id, format);
        if (format === "gift") {
            setGiftIsNotChoosen();
        }
    };

    return (
        <ul className="cartlisting">
            {productsInCart.map((productInCart, index) => {
                const { mainImage, id, title, format, quantity, unitPrice } =
                    productInCart;

                return (
                    <li
                        key={format ? format + id : id}
                        className="cartlisting__item"
                        data-order={`${3 + index}`}
                    >
                        <div className="cartlisting__inner">
                            <Link
                                className="cartlisting__link"
                                to={`/product/${id}`}
                                onClick={handleLinkClick}
                            >
                                <img
                                    src={mainImage}
                                    alt="product-img"
                                    className="cartlisting__item-img"
                                />
                            </Link>
                            <Link
                                className="cartlisting__link"
                                to={`/product/${id}`}
                                onClick={handleLinkClick}
                            >
                                <h3 className="cartlisting__item-title">
                                    {title}
                                    {format && (
                                        <p className="cartlisting__format">
                                            ({format})
                                        </p>
                                    )}
                                </h3>
                            </Link>
                        </div>
                        <div className="cartlisting__inner-right">
                            <div
                                className={`cartlisting__quantity ${
                                    format === "gift" &&
                                    "cartlisting__quantity--inactive"
                                }`}
                            >
                                <div
                                    className="cartlisting__quantity-button"
                                    onClick={() =>
                                        decreaseProductQuantity(productInCart)
                                    }
                                >
                                    -
                                </div>
                                <div className="cartlisting__quantity-output">
                                    {quantity}
                                </div>
                                <div
                                    className="cartlisting__quantity-button"
                                    onClick={() =>
                                        increaseProductQuantity(productInCart)
                                    }
                                >
                                    +
                                </div>
                                {format === "gift" && (
                                    <OpacityLayer zIndex="1" />
                                )}
                            </div>
                            <p className="cartlisting__item-price">
                                {unitPrice === 0
                                    ? "FREE"
                                    : `€${(quantity * unitPrice).toFixed(2)}`}
                            </p>
                        </div>
                        <div className="cartlisting__deletion">
                            <img
                                onClick={() => handleDeletion(id, format)}
                                src={closeBtn}
                                alt="delete-btn"
                                className="cartlisting__delete-btn"
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
