import pandaLogo from "../../assets/panda-logo.jpg";
import subLogo from "../../assets/organic-gin.png";
import account from "../../assets/account.jpg";
import cart from "../../assets/cart.jpg";

import NavLinks from "../NavLinks/NavLinks";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

import { useAppContext } from "../../context/AppContext/useAppContext";
import { useNavbarOnScroll } from "./useNavbarOnScroll";

import "./Navigation.sass";

const Navigation = () => {
    const { navBarsAreHidden, isUserLoggedIn, openLoginPopup } =
        useAppContext();
    useNavbarOnScroll();

    function handleAccountClick() {
        if (!isUserLoggedIn) {
            openLoginPopup();
        } else {
            //TODO: Tutaj otwarcie panelu użytkownika jeśli jest zalogowany
        }
    }

    return (
        <nav className="navigation">
            <div className="navigation__wrapper">
                <div className="navigation__inner navigation__inner--left">
                    <FaFacebookF className="navigation__social-icon" />
                    <SiInstagram className="navigation__social-icon" />
                    <FaPinterestP className="navigation__social-icon" />
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
                    <img
                        src={cart}
                        alt="cart-icon"
                        className="navigation__utils-icon"
                    />
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

export default Navigation;
