import { FC, useEffect, useRef } from 'react'
//assets
import pandaLogo from '../assets/panda-logo.jpg'
import subLogo from '../assets/organic-gin.png'
import account from '../assets/account.jpg'
import cart from '../assets/cart.jpg'
//components
import NavLinks from './NavLinks'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
//customhooks
import { useAppContext } from '../customhooks/useAppContext'
//actions
import { HIDE_NAVBARS, SHOW_NAVBARS, OPEN_LOGINPOPUP } from '../actions/appStateActions'

const Navigation: FC = () => {

    const { dispatch, navBarsAreHidden, isUserLoggedIn }: any = useAppContext(); //ANY
    const lastScrollPositionRef = useRef<number>(0);


    function checkScrollingDirection() {
        const scroll: number = window.pageYOffset;
        if (scroll > lastScrollPositionRef.current && scroll >= 120) {
            dispatch({ type: HIDE_NAVBARS })
        } else {
            dispatch({ type: SHOW_NAVBARS })
        }
        lastScrollPositionRef.current = scroll <= 0 ? 0 : scroll;
    }

    function handleAccountClick() {
        if (!isUserLoggedIn) {
            dispatch({ type: OPEN_LOGINPOPUP })
        } else {
            //TUTAJ OTWARCIE PANELU UŻYTKOWNIKA JEŚLI JEST ZALOGOWANY
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScrollingDirection);
        return () => window.removeEventListener("scroll", checkScrollingDirection);
    }, [])


    return (
        <nav className="navigation">
            <div className="navigation__wrapper">
                <div className="navigation__inner navigation__inner--left">
                    <FaFacebookF className="navigation__social-icon" />
                    <SiInstagram className="navigation__social-icon" />
                    <FaPinterestP className="navigation__social-icon" />
                </div>
                <div className="navigation__inner">
                    <img src={pandaLogo} alt="panda-gin-logo" className="navigation__logo" />
                </div>
                <div className="navigation__inner navigation__inner--right">
                    <img src={account} alt="account-icon" className="navigation__utils-icon" onClick={handleAccountClick} />
                    <img src={cart} alt="cart-icon" className="navigation__utils-icon" />
                </div>
                <img src={subLogo} alt="sub-logo" className={navBarsAreHidden ? "navigation__sublogo navigation__sublogo--hidden" : "navigation__sublogo"} />
            </div>
            <NavLinks
                navBarsAreHidden={navBarsAreHidden}
            />
        </nav>
    )
}

export default Navigation