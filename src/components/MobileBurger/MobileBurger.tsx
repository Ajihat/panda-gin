import { useMobileMenuContext } from 'context/MobileMenuContext/useMobileMenuContext';

import './MobileBurger.sass';

export const MobileBurger = () => {
	const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useMobileMenuContext();
	return (
		<div
			onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
			className={`mobileburger ${isMobileMenuOpen ? 'mobileburger--active' : ''}`}
		>
			<div className='mobileburger__inner'>
				<span className='mobileburger__bar'></span>
				<span className='mobileburger__bar'></span>
				<span className='mobileburger__bar'></span>
			</div>
		</div>
	);
};
