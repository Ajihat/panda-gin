import ReactDom from 'react-dom';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

import { Socials } from 'components/Socials/Socials';

import { navLinks } from 'data/navLinks/navLinks';

import { useNoScrollingWhilePopup } from 'common/useNoScrollingWhilePopup/useNoScrollingWhilePopup';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';
import { useMobileMenuContext } from 'context/MobileMenuContext/useMobileMenuContext';

import './MobileMenu.sass';

export const MobileMenu = () => {
	const { handleLinkClick } = useCurtainContext();
	const { closeMobileMenu } = useMobileMenuContext();
	const { pathname } = useLocation();
	useNoScrollingWhilePopup();

	const handleClick = (url: string) => {
		handleLinkClick(url, pathname, true);
		closeMobileMenu();
	};
	return ReactDom.createPortal(
		<motion.div
			className='mobilemenu'
			exit={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{ duration: 0.3 }}
		>
			<nav className='mobilemenu__nav'>
				<ul className='mobilemenu__list'>
					{navLinks.map((navLink) => {
						return (
							<motion.li
								animate={{
									opacity: 1,
								}}
								key={navLink.id}
								className='mobilemenu__item'
							>
								<NavLink
									onClick={() => handleClick(navLink.url)}
									to={navLink.url}
									className={({ isActive }) =>
										isActive ? 'mobilemenu__link mobilemenu__link--active' : 'mobilemenu__link'
									}
								>
									{navLink.name}
								</NavLink>
							</motion.li>
						);
					})}
				</ul>
			</nav>
			<motion.div
				animate={{
					opacity: 1,
				}}
				className='mobilemenu__socials-holder'
			>
				<Socials />
			</motion.div>
		</motion.div>,
		document.getElementById('portal')!
	);
};
