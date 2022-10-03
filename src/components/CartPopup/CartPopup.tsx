import { useEffect } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

import { CartListing } from "../CartListing/CartListing";
import { Gifts } from "../Gifts/Gifts";
import { CartSummary } from "../CartSummary/CartSummary";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

import closeBtn from "../../assets/close-btn.svg";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";
import { useNoScrollingWhilePopup } from "../../common/useNoScrollingWhilePopup/useNoScrollingWhilePopup";

import "./CartPopup.sass";

export const CartPopup = () => {
    const { hideNavbars, showNavbars, isTopSliderClosed, closeCartPopup } =
        useAppContext();
    const { numberOfProductsInCart, productsInCart } = useShoppingCartContext();

    useNoScrollingWhilePopup();

    useEffect(() => {
        const mainTag = document.querySelector<HTMLElement>(".main");
        if (mainTag && !isTopSliderClosed && window.pageYOffset < 65) {
            mainTag.classList.add("main--notopslider");
        }
        document.body.classList.add("no-scroll");
        hideNavbars();
        return () => {
            showNavbars();
            document.body.classList.remove("no-scroll");
            if (mainTag && !isTopSliderClosed && window.pageYOffset < 65) {
                mainTag.classList.remove("main--notopslider");
            }
        };
    }, [hideNavbars, showNavbars, isTopSliderClosed]);

    useEffect(() => {
        const items = Array.from(
            document.querySelectorAll("[data-order]")
        ) as Array<HTMLElement>;
        items.forEach((item) => {
            item.style.transitionDelay = `${Number(item.dataset.order) / 10}s`;
            item.style.bottom = "0px";
            item.style.opacity = "1";
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
                        <h3 className="cartpopup__small" data-order="1">
                            {numberOfProductsInCart} articles
                            <div className="cartpopup__small-line"></div>
                        </h3>
                        <h1 className="cartpopup__big" data-order="2">
                            Shopping Cart
                        </h1>
                    </div>
                    <div className="cartpopup__container">
                        <div className="cartpopup__left">
                            {numberOfProductsInCart > 0 ? (
                                <CartListing productsInCart={productsInCart} />
                            ) : (
                                <p className="cartpopup__text" data-order="3">
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
