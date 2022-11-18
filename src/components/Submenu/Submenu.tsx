import { useEffect, useRef } from 'react';

import { SubmenuLink } from 'components/SubmenuLink/SubmenuLink';

import { useNavBarsContext } from 'context/NavBarsContext/useNavBarsContext';

import { SubmenuProps } from './Submenu.types';

import './Submenu.sass';

export const Submenu = ({ data, activeCategory }: SubmenuProps) => {
	const submenuList = useRef<HTMLUListElement | null>(null);
	const { navBarsAreHidden } = useNavBarsContext();

	const checkDistanceFromTop = () => {
		if (submenuList.current !== null) {
			const navLinks = document.querySelector('.navlinks') as HTMLDivElement;
			const navLinksHeight = navLinks.getBoundingClientRect().height;
			const navLinksDistanceToTop = navLinks.getBoundingClientRect().top;
			const submenuListDistanceTotop = submenuList.current.getBoundingClientRect().top;

			if (submenuListDistanceTotop - (navLinksHeight + navLinksDistanceToTop) <= 0) {
				submenuList.current.classList.add('submenu__list--moving');
			} else {
				submenuList.current.classList.remove('submenu__list--moving');
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkDistanceFromTop);
		return () => window.removeEventListener('scroll', checkDistanceFromTop);
	}, []);

	return (
		<div id='submenu' className={navBarsAreHidden ? 'submenu' : 'submenu submenu--down'}>
			<ul ref={submenuList} className='submenu__list'>
				{data.map((item) => {
					const { id, title, href } = item;
					return <SubmenuLink key={id} title={title} href={href} activeCategory={activeCategory} />;
				})}
			</ul>
		</div>
	);
};
