import { useNavigate, NavLink } from 'react-router-dom';

import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';

import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './PersonalNav.sass';

export const PersonalNav = () => {
	const { setUserJwtToken, setUserData } = useAuthContext();
	const { openCurtain } = useCurtainContext();
	const navigate = useNavigate();

	const scrollTop = () => {
		window.scrollTo(0, 0);
	};

	const handleSignOut = () => {
		setUserJwtToken(null);
		setUserData(null);
		navigate(appRoutes.shop);
		openCurtain();
	};
	return (
		<div className='personalnav'>
			<nav className='personalnav__nav'>
				<ul className='personalnav__nav-list'>
					<li className='personalnav__nav-item'>
						<NavLink
							to={appRoutes.personal_userInfo}
							onClick={scrollTop}
							className={({ isActive }) =>
								isActive
									? 'personalnav__nav-link personalnav__nav-link--active'
									: 'personalnav__nav-link'
							}
						>
							User Information
						</NavLink>
					</li>
					<li className='personalnav__nav-item'>
						<NavLink
							to={appRoutes.personal_orders}
							onClick={scrollTop}
							className={({ isActive }) =>
								isActive
									? 'personalnav__nav-link personalnav__nav-link--active'
									: 'personalnav__nav-link'
							}
						>
							Orders
						</NavLink>
					</li>
					<li className='personal__nav-item'>
						<NavLink
							to={appRoutes.personal_manageProducts}
							onClick={scrollTop}
							className={({ isActive }) =>
								isActive
									? 'personalnav__nav-link personalnav__nav-link--active'
									: 'personalnav__nav-link'
							}
						>
							Manage Products
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className='personalnav__btn-holder'>
				<PrimaryButton onClick={handleSignOut} text='Sign out' type='button' />
			</div>
		</div>
	);
};
