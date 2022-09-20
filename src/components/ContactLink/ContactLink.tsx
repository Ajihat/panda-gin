import { NavLink, useLocation } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import { useAppContext } from "../../context/AppContext/useAppContext";

import { appRoutes } from "../../data/appRoutes/appRoutes";

import "./ContactLink.sass";

export const ContactLink = () => {
    const { openCurtain } = useAppContext();
    const { pathname } = useLocation();

    const handleClick = (url: string) => {
        if (url !== pathname) {
            openCurtain();
        }
    };
    return (
        <div className="contactlink">
            <NavLink
                className="contactlink__link"
                to="/contact"
                onClick={() => handleClick(appRoutes.contact)}
            >
                <p className="contactlink__text">Contact us</p>
                <BsArrowRight className="contactlink__arrow" />
            </NavLink>
        </div>
    );
};
