import { Link } from "react-router-dom";

import { appRoutes } from "../../data/appRoutes/appRoutes";

import pLetter from "../../assets/p-letter.png";

import "./FancyLink.sass";

export const FancyLink = () => {
    return (
        <div className="fancylink">
            <Link to={appRoutes.shop} className="fancylink__link">
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
