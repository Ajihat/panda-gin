import { Link, useLocation } from 'react-router-dom';

import longArrowBlack from 'assets/long-arrow-black.svg';
import longArrowWhite from 'assets/long-arrow-white.svg';

import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';

import { PageLinkProps } from './PageLink.types';

import './PageLink.sass';

export const PageLink = ({ text, textColor, arrowPosition, url, shouldOpenCurtain }: PageLinkProps) => {
	const { handleLinkClick } = useCurtainContext();
	const { pathname } = useLocation();

	return (
		<div className={`pagelink ${textColor === 'black' ? 'pagelink--black' : ''}`}>
			<Link className='pagelink__link' to={url} onClick={() => handleLinkClick(url, pathname, shouldOpenCurtain)}>
				<p className='pagelink__text'>{text}</p>
				<img
					src={textColor === 'white' ? longArrowWhite : longArrowBlack}
					alt='arrow'
					className={`pagelink__arrow ${arrowPosition === 'left' ? 'pagelink__arrow--left' : ''}`}
				/>
			</Link>
		</div>
	);
};
