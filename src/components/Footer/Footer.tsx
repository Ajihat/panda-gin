import { Socials } from "../Socials/Socials";
import { ContactLink } from "../ContactLink/ContactLink";
import { NavLink, useLocation } from "react-router-dom";

import { useAppContext } from "../../context/AppContext/useAppContext";

import fullLogo from "../../assets/logo-full.svg";
import award1 from "../../assets/award1.jpg";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import award5 from "../../assets/award5.png";
import award6 from "../../assets/award6.png";
import paymentMethods from "../../assets/payment-methods.png";

import { navLinks } from "../../data/navLinks/navLinks";

import "./Footer.sass";

export const Footer = () => {
    const { openCurtain } = useAppContext();
    const { pathname } = useLocation();

    const handleClick = (url: string) => {
        if (url !== pathname) {
            openCurtain();
        }
    };
    return (
        <footer className="footer">
            <div className="footer__left-side">
                <img
                    src={fullLogo}
                    alt="Panda-logo"
                    className="footer__logo-full"
                />
                <div className="footer__contact">
                    <div className="footer__contact-phones">
                        <a
                            href="tel:{+32 478.04.85.45}"
                            className="footer__phone"
                        >
                            +32 478.04.85.45
                        </a>
                        <span className="footer__slash">/</span>
                        <a
                            href="tel:{+32 471.08.32.75}"
                            className="footer__phone"
                        >
                            +32 471.08.32.75
                        </a>
                    </div>
                    <div className="footer__contact-address">
                        <a
                            href="mailto:info@panda-gin.com"
                            className="footer__address"
                        >
                            info@panda-gin.com
                        </a>
                        <span className="footer__address-text">
                            The head office (9 a.m. to 5 p.m.)
                            <br />
                            31 Drève de la Meute
                            <br />
                            1410 Waterloo, Belgium
                        </span>
                    </div>
                    <Socials />
                    <p className="footer__company">
                        Yespirits Company SRL / TVA
                        <br /> 0673.501.385
                    </p>
                    <div className="footer__line"></div>
                </div>
            </div>
            <div className="footer__right-side">
                <div className="footer__top">
                    <div className="footer__motto">
                        <h3 className="footer__motto-text">
                            Think Panda.
                            <br />
                            Drink Panda.
                            <br />
                            Be Panda.
                        </h3>
                    </div>
                    <div className="footer__awards">
                        <img
                            src={award1}
                            alt="award"
                            className="footer__awards-img"
                        />
                        <img
                            src={award2}
                            alt="award"
                            className="footer__awards-img"
                        />
                        <img
                            src={award3}
                            alt="award"
                            className="footer__awards-img"
                        />
                        <img
                            src={award4}
                            alt="award"
                            className="footer__awards-img"
                        />
                        <img
                            src={award5}
                            alt="award"
                            className="footer__awards-img"
                        />
                        <img
                            src={award6}
                            alt="award"
                            className="footer__awards-img"
                        />
                    </div>
                </div>
                <div className="footer__mid">
                    <div className="footer__nav">
                        <div className="footer__nav-inner">
                            <h3 className="footer__nav-title">
                                Site map
                                <div className="footer__line footer__line--white"></div>
                            </h3>
                            <ul className="footer__nav-list">
                                {navLinks.map((navLink) => {
                                    const { id, name, url } = navLink;
                                    return (
                                        <li
                                            className="footer__nav-item"
                                            key={id}
                                        >
                                            <NavLink
                                                to={url}
                                                onClick={() => handleClick(url)}
                                                className="footer__nav-link"
                                            >
                                                {name}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer__nav-inner">
                            <h3 className="footer__nav-title">
                                More info
                                <div className="footer__line footer__line--white"></div>
                            </h3>
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a className="footer__nav-link">Awards</a>
                                </li>
                                <li className="footer__nav-item">
                                    <a className="footer__nav-link">
                                        Media / Press
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a className="footer__nav-link">
                                        Sustainability
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a className="footer__nav-link">
                                        Organic certification
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a className="footer__nav-link">
                                        Your event
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__professional">
                        <h3 className="footer__nav-title">
                            Are you professional?
                        </h3>
                        <span className="footer__address-text footer__address-text--small">
                            Are you a reseller, a wine merchant, a restaurant, a
                            bar or a delicatessen and wish to add our products
                            to your catalogue or your menu?
                        </span>
                        <ContactLink />
                    </div>
                </div>
                <div className="footer__bottom">
                    <img
                        src={paymentMethods}
                        alt="payment-methods"
                        className="footer__payments"
                    />
                    <p className="footer__orginals">
                        2017 - 2022 Panda Gin &copy; All rights belong to their
                        respective owners
                    </p>
                </div>
            </div>
        </footer>
    );
};
