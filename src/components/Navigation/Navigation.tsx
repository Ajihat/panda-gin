import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import pandaLogo from "../../assets/panda-logo.jpg";
import subLogo from "../../assets/organic-gin.png";
import account from "../../assets/account.jpg";
import cart from "../../assets/cart.jpg";

import { NavLinks } from "../NavLinks/NavLinks";
import { Socials } from "../Socials/Socials";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";
import { useNavbarOnScroll } from "./useNavbarOnScroll";

import { appRoutes } from "../../data/appRoutes/appRoutes";

import "./Navigation.sass";

export const Navigation = () => {
    const {
        navBarsAreHidden,
        openLoginPopup,
        openCurtain,
        isCartPopupOpen,
        openCartPopup,
        closeCartPopup,
    } = useAppContext();
    const { numberOfProductsInCart } = useShoppingCartContext();
    const { userJwtToken } = useAuthContext();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useNavbarOnScroll();

    const handleAccountClick = () => {
        if (!userJwtToken) {
            openLoginPopup();
        } else if (appRoutes.personal !== pathname) {
            closeCartPopup();
            openCurtain();
            navigate(appRoutes.personal);
        }
    };

    const handleCartClick = () => {
        if (isCartPopupOpen) {
            closeCartPopup();
        } else {
            openCartPopup();
        }
    };

    return (
        <nav className="navigation">
            <div className="navigation__wrapper">
                <div className="navigation__inner navigation__inner--left">
                    <Socials version="small" />
                </div>
                <div className="navigation__inner">
                    <img
                        src={pandaLogo}
                        alt="panda-gin-logo"
                        className="navigation__logo"
                    />
                </div>
                <div className="navigation__inner navigation__inner--right">
                    <img
                        src={account}
                        alt="account-icon"
                        className="navigation__utils-icon"
                        onClick={handleAccountClick}
                    />
                    <div
                        onClick={handleCartClick}
                        className="navigation__cart-holder"
                    >
                        <img
                            src={cart}
                            alt="cart-icon"
                            className="navigation__utils-icon"
                        />
                        <div className="navigation__cart-items-counter">
                            {numberOfProductsInCart}
                        </div>
                    </div>
                </div>
                <img
                    src={subLogo}
                    alt="sub-logo"
                    className={
                        navBarsAreHidden
                            ? "navigation__sublogo navigation__sublogo--hidden"
                            : "navigation__sublogo"
                    }
                />
            </div>
            <NavLinks navBarsAreHidden={navBarsAreHidden} />
        </nav>
    );
};
