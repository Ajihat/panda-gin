import { PageLink } from "components/PageLink/PageLink";
import { NavLink, useLocation } from "react-router-dom";

import { useAppContext } from "context/AppContext/useAppContext";

import { navLinks } from "data/navLinks/navLinks";
import { appRoutes } from "data/appRoutes/appRoutes";

export const FooterMid = () => {
    const { openCurtain } = useAppContext();
    const { pathname } = useLocation();

    const handleClick = (url: string) => {
        if (url !== pathname) {
            openCurtain();
        }
    };
    return (
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
                                <li className="footer__nav-item" key={id}>
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
                            <button className="footer__nav-link">Awards</button>
                        </li>
                        <li className="footer__nav-item">
                            <button className="footer__nav-link">
                                Media / Press
                            </button>
                        </li>
                        <li className="footer__nav-item">
                            <button className="footer__nav-link">
                                Sustainability
                            </button>
                        </li>
                        <li className="footer__nav-item">
                            <button className="footer__nav-link">
                                Organic certification
                            </button>
                        </li>
                        <li className="footer__nav-item">
                            <button className="footer__nav-link">
                                Your event
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__professional">
                <h3 className="footer__nav-title">Are you professional?</h3>
                <span className="footer__address-text footer__address-text--small">
                    Are you a reseller, a wine merchant, a restaurant, a bar or
                    a delicatessen and wish to add our products to your
                    catalogue or your menu?
                </span>
                <PageLink
                    text="Contact us"
                    textColor="white"
                    arrowPosition="right"
                    url={appRoutes.contact}
                />
            </div>
        </div>
    );
};
