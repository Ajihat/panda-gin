import { NavLink, useLocation } from 'react-router-dom';

import { navLinks } from 'data/navLinks/navLinks';

import { useAppContext } from 'context/AppContext/useAppContext';

import { NavLinksProps } from './NavLinks.type';

import './NavLinks.sass';
import './NavLink.sass';

export const NavLinks = ({ navBarsAreHidden }: NavLinksProps) => {
	const { handleLinkClick } = useAppContext();
	const { pathname } = useLocation();

	return (
		<div className={navBarsAreHidden ? 'navlinks navlinks--hidden' : 'navlinks'}>
			<ul className={navBarsAreHidden ? 'navlinks__list navlinks__list--hidden' : 'navlinks__list'}>
				{navLinks.map((navLink) => {
					const { id, name, url } = navLink;
					return (
						<NavLink
							key={id}
							to={url}
							className={({ isActive }) => (isActive ? 'navlink navlink--active' : 'navlink')}
							onClick={() => handleLinkClick(url, pathname, true)}
						>
							{name}
						</NavLink>
					);
				})}
			</ul>
		</div>
	);
};
