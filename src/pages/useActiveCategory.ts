import { useState, useEffect, useCallback } from "react";

export const useActiveCategory = (querySelector: string) => {
    const [activeCategory, setActiveCategory] = useState<string>("");

    const checkActiveCategory = useCallback(() => {
        const categorySections = Array.from(
            document.querySelectorAll(querySelector)
        );
        categorySections.forEach((categorySection) => {
            const windowHeight = window.innerHeight;
            const distanceOfCategorySectionToTop =
                categorySection.getBoundingClientRect().top;

            if (distanceOfCategorySectionToTop <= 0.3 * windowHeight) {
                const faqCategorySectionId =
                    categorySection.getAttribute("id")!;
                setActiveCategory(faqCategorySectionId);
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", checkActiveCategory);
        return () => window.removeEventListener("scroll", checkActiveCategory);
    }, [checkActiveCategory]);

    return { activeCategory };
};
