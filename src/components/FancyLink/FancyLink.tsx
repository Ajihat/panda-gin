import { Link, useLocation } from "react-router-dom";

import { useAppContext } from "context/AppContext/useAppContext";

import { appRoutes } from "data/appRoutes/appRoutes";

import pLetter from "assets/p-letter.png";

import { FancyLinkProps } from "./FancyLink.types";

import "./FancyLink.sass";

export const FancyLink = ({ alignment }: FancyLinkProps) => {
    const { pathname } = useLocation();
    const { handleLinkClick } = useAppContext();
    return (
        <div
            style={{
                justifyContent: alignment,
            }}
            className="fancylink"
        >
            <Link
                to={appRoutes.shop}
                className="fancylink__link"
                onClick={() => handleLinkClick(appRoutes.shop, pathname)}
            >
                <div className="fancylink__left">
                    <div className="fancylink__circle"></div>
                    <div className="fancylink__circle fancylink__circle--white">
                        <img
                            src={pLetter}
                            alt="p-letter"
                            className="fancylink__letter"
                        />
                    </div>
                </div>
                <div className="fancylink__right">
                    <p className="fancylink__cta">See all products</p>
                </div>
            </Link>
        </div>
    );
};
