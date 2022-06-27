import { NavLink } from "react-router-dom"
//data
import navLinks from "../data/navLinks"

function NavLinks({ navBarsAreHidden }) {
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