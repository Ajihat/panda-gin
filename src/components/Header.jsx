import PropTypes from 'prop-types';

function Header({ smallTitle, bigTitle, text, alignment }) {

    let modifier = "";
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

Header.propTypes = {
    smallTitle: PropTypes.string.isRequired,
    bigTitle: PropTypes.string.isRequired,
    text: PropTypes.string,
    alignment: PropTypes.string
}


export default Header