import { Link, useLocation } from 'react-router-dom';

import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { appRoutes } from 'data/appRoutes/appRoutes';

import pLetter from 'assets/p-letter.png';

import { AnimatedPageLinkProps } from './AnimatedPageLink.types';

import './AnimatedPageLink.sass';

export const AnimatedPageLink = ({ alignment }: AnimatedPageLinkProps) => {
	const { pathname } = useLocation();
	const { handleLinkClick } = useCurtainContext();
	return (
		<div
			style={{
				justifyContent: alignment,
			}}
			className='animatedpagelink'
		>
			<Link
				to={appRoutes.shop}
				className='animatedpagelink__link'
				onClick={() => handleLinkClick(appRoutes.shop, pathname, true)}
			>
				<div className='animatedpagelink__left'>
					<div className='animatedpagelink__circle'></div>
					<div className='animatedpagelink__circle animatedpagelink__circle--white'>
						<img src={pLetter} alt='p-letter' className='animatedpagelink__letter' />
					</div>
				</div>
				<div className='animatedpagelink__right'>
					<p className='animatedpagelink__cta'>See all products</p>
				</div>
			</Link>
		</div>
	);
};
