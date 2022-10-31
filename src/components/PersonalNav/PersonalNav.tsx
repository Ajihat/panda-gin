import { useNavigate, NavLink } from 'react-router-dom';

import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';

import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { useAppContext } from 'context/AppContext/useAppContext';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './PersonalNav.sass';

export const PersonalNav = () => {
	const { setUserJwtToken } = useAuthContext();
	const { openCurtain } = useAppContext();
	const navigate = useNavigate();

	const scrollTop = () => {
		window.scrollTo(0, 0);
	};

	const handleSignOut = () => {
		setUserJwtToken(null);
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
			<div onClick={handleSignOut} className='personalnav__btn-holder'>
				<PrimaryButton text='Sign out' type='button' />
			</div>
		</div>
	);
};
