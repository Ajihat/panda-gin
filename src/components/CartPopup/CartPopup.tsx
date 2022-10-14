import { useEffect } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

import { CartListing } from "components/CartListing/CartListing";
import { Gifts } from "components/Gifts/Gifts";
import { CartSummary } from "components/CartSummary/CartSummary";

import closeBtn from "assets/close-btn.svg";

import { useAppContext } from "context/AppContext/useAppContext";
import { useShoppingCartContext } from "context/ShoppingCartContext/useShoppingCartContext";

import { useNoScrollingWhilePopup } from "common/useNoScrollingWhilePopup/useNoScrollingWhilePopup";

import "./CartPopup.sass";

export const CartPopup = () => {
    const { closeCartPopup } = useAppContext();
    const { numberOfProductsInCart, productsInCart } = useShoppingCartContext();

    useNoScrollingWhilePopup();

    useEffect(() => {
        const animationItems = Array.from(
            document.querySelectorAll("[data-animation]")
        ) as Array<HTMLElement>;

        animationItems.forEach((animationItem, index) => {
            animationItem.style.transitionDelay = `${index / 10}s`;
            animationItem.style.bottom = "0px";
            animationItem.style.opacity = "1";
        });
    }, [productsInCart]);

    return ReactDom.createPortal(
        <motion.div
            key="cart-popup"
            className="cartpopup"
            exit={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 0.2 }}
        >
            <div className="cartpopup__inner">
                <div className="cartpopup__black-line"></div>
                <div className="cartpopup__wrapper">
                    <div className="cartpopup__header">
                        <h3
                            className="cartpopup__small"
                            data-animation="animation-item"
                        >
                            {numberOfProductsInCart} articles
                            <div className="cartpopup__small-line"></div>
                        </h3>
                        <h1
                            className="cartpopup__big"
                            data-animation="animation-item"
                        >
                            Shopping Cart
                        </h1>
                    </div>
                    <div className="cartpopup__container">
                        <div className="cartpopup__left">
                            {numberOfProductsInCart > 0 ? (
                                <CartListing productsInCart={productsInCart} />
                            ) : (
                                <p
                                    className="cartpopup__text"
                                    data-animation="animation-item"
                                >
                                    There are no more items in your cart
                                </p>
                            )}
                            <Gifts />
                        </div>
                        <div className="cartpopup__right">
                            <CartSummary />
                        </div>
                    </div>

                    <img
                        onClick={() => closeCartPopup()}
                        src={closeBtn}
                        alt="close-btn"
                        className="cartpopup__close-btn"
                    />
                </div>
            </div>
        </motion.div>,
        document.getElementById("portal")!
    );
};
