import { useState, useEffect, useCallback } from 'react';

export const useActiveCategory = (querySelector: string) => {
	const [activeCategory, setActiveCategory] = useState<string>('');

	const checkActiveCategory = useCallback(() => {
		const categorySections = Array.from(document.querySelectorAll(querySelector));
		categorySections.forEach((categorySection) => {
			const windowHeight = window.innerHeight;
			const distanceOfCategorySectionToTop = categorySection.getBoundingClientRect().top;

			if (distanceOfCategorySectionToTop <= 0.15 * windowHeight && distanceOfCategorySectionToTop > 0) {
				const faqCategorySectionId = categorySection.getAttribute('id')!;
				setActiveCategory(faqCategorySectionId);
			}
		});
	}, [querySelector]);

	const scrollToActiveCategoryLink = useCallback(() => {
		const submenuLinkElement = document.querySelector(`[href="#${activeCategory}"]`)?.parentElement as HTMLElement;
		const submenuList = document.querySelector('.submenu__list-wrapper') as HTMLElement;

		if (submenuLinkElement && submenuList) {
			const submenuLinkElementLeft = submenuLinkElement.offsetLeft;
			const submenuLinkElementWidth = submenuLinkElement.getBoundingClientRect().width;

			submenuList.scroll(submenuLinkElementLeft - 1.5 * submenuLinkElementWidth, 0);
		}
	}, [activeCategory]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			scrollToActiveCategoryLink();
		}, 200);
		return () => clearTimeout(timeoutId);
	}, [activeCategory, scrollToActiveCategoryLink]);

	useEffect(() => {
		window.addEventListener('scroll', checkActiveCategory);
		return () => {
			window.removeEventListener('scroll', checkActiveCategory);
		};
	}, [checkActiveCategory]);

	return { activeCategory };
};
