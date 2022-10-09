import { useEffect } from "react";

import { NO_SMOOTH_SCROLLING } from "../../data/specialClasses/specialClasses";

export const useNoScrollingWhilePopup = () => {
    useEffect(() => {
        if (document.documentElement.classList.contains(NO_SMOOTH_SCROLLING))
            return;
        const topScroll =
            window.pageYOffset || document.documentElement.scrollTop;
        const leftScroll =
            window.pageXOffset || document.documentElement.scrollLeft;

        const scroll = () => {
            window.scrollTo(leftScroll, topScroll);
        };
        document.documentElement.classList.add(NO_SMOOTH_SCROLLING);
        window.addEventListener("scroll", scroll);

        return () => {
            document.documentElement.classList.remove(NO_SMOOTH_SCROLLING);
            window.removeEventListener("scroll", scroll);
        };
    }, []);
};
