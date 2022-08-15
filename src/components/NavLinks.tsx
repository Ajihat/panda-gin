import { FC } from 'react'
import { NavLink, useLocation } from "react-router-dom"
//data
import navLinks from "../data/navLinks"
//customhooks
import { useAppContext } from "../customhooks/useAppContext"


interface NavLinksProps {
    navBarsAreHidden: boolean
}

const NavLinks: FC<NavLinksProps> = ({ navBarsAreHidden }) => {

    const { openCurtain }: any = useAppContext(); // ANY
    const { pathname } = useLocation(); // Czy powinno się to typowac?


    function handleClick(url: string): void {
        if (url !== pathname) {
            openCurtain();
        } else return
    }



    return (
        <div className={navBarsAreHidden ? "navlinks navlinks--hidden" : "navlinks"}>
            <ul className={navBarsAreHidden ? "navlinks__list navlinks__list--hidden" : "navlinks__list"}>
                {navLinks.map(navLink => {
                    const { id, name, url } = navLink;
                    return (
                        <NavLink
                            key={id}
                            to={url}
                            className={({ isActive }) => isActive ? "navlink navlink--active" : "navlink"}
                            onClick={() => handleClick(url)}
                        >
                            {name}
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavLinks