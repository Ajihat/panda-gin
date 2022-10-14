import { useLocation } from "react-router-dom";

import { useProductsContext } from "context/ProductsContext/useProductsContext";

import { SubmenuLinkProps } from "./SubmenuLink.types";

import "./SubmenuLink.sass";

export const SubmenuLink = ({
    title,
    href,
    activeCategory,
}: SubmenuLinkProps) => {
    const { changeProductsCategory, setProductsPage } = useProductsContext();
    const { pathname } = useLocation();

    const handleClick = () => {
        if (pathname === "/") {
            changeProductsCategory(title);
            setProductsPage(0);
        }
    };

    return (
        <li className="submenulink" onClick={handleClick}>
            <a
                href={`#${href}`}
                className={
                    activeCategory === href || activeCategory === title
                        ? "submenulink__link submenulink__link--active"
                        : "submenulink__link"
                }
            >
                {title}
            </a>
            {(activeCategory === href || activeCategory === title) && (
                <div className="submenulink__border-top"></div>
            )}
            {(activeCategory === href || activeCategory === title) && (
                <div className="submenulink__border-bottom"></div>
            )}
        </li>
    );
};
