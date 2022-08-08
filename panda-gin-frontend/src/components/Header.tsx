import { FC } from 'react'

interface HeaderProps {
    smallTitle: string,
    bigTitle: string,
    text?: string,
    alignment?: "left" | "right"   //center is default
}

const Header: FC<HeaderProps> = ({ smallTitle, bigTitle, text, alignment }) => {

    let modifier: string = "";
    if (alignment === "left") modifier = "header--left";
    if (alignment === "right") modifier = "header--right";

    return (
        <header className={`header ${modifier}`}>
            <h3 className="header__small-title">
                {smallTitle}
                <div className="header__bottom-line"></div>
            </h3>
            <h2 className="header__big-title">
                {bigTitle}
            </h2>
            {text && <p className="header__text">
                {text}
            </p>}
        </header>
    )
}


export default Header