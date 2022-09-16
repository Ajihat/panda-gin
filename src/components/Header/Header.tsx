import { HeaderProps, ModifierObj } from "./Header.types";

import "./Header.sass";

const modifierObj: ModifierObj = {
    left: "header--left",
    right: "header--right",
};

export const Header = ({
    smallTitle,
    bigTitle,
    text,
    alignment,
}: HeaderProps) => {
    return (
        <header
            id="header"
            className={`header ${alignment && modifierObj[alignment]}`}
        >
            <h3 className="header__small-title">
                {smallTitle}
                <div className="header__bottom-line"></div>
            </h3>
            <h2 className="header__big-title">{bigTitle}</h2>
            {text && <p className="header__text">{text}</p>}
        </header>
    );
};
