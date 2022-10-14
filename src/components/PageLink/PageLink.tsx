import { Link, useLocation } from "react-router-dom";

import longArrowBlack from "assets/long-arrow-black.svg";
import longArrowWhite from "assets/long-arrow-white.svg";

import { useAppContext } from "context/AppContext/useAppContext";

import { PageLinkProps } from "./PageLink.types";

import "./PageLink.sass";

export const PageLink = ({
    text,
    textColor,
    arrowPosition,
    url,
}: PageLinkProps) => {
    const { handleLinkClick } = useAppContext();
    const { pathname } = useLocation();

    return (
        <div
            className={`pagelink ${
                textColor === "black" ? "pagelink--black" : ""
            }`}
        >
            <Link
                className="pagelink__link"
                to={url}
                onClick={() => handleLinkClick(url, pathname)}
            >
                <p className="pagelink__text">{text}</p>
                <img
                    src={
                        textColor === "white" ? longArrowWhite : longArrowBlack
                    }
                    alt="arrow"
                    className={`pagelink__arrow ${
                        arrowPosition === "left" ? "pagelink__arrow--left" : ""
                    }`}
                />
            </Link>
        </div>
    );
};
