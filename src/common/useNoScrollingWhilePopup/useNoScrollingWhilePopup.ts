import { useEffect } from "react";

export const useNoScrollingWhilePopup = () => {
    useEffect(() => {
        const topScroll =
            window.pageYOffset || document.documentElement.scrollTop;
        const leftScroll =
            window.pageXOffset || document.documentElement.scrollLeft;

        const scroll = () => {
            window.scrollTo(leftScroll, topScroll);
        };
        document.documentElement.classList.add("no-smooth-scrolling");
        window.addEventListener("scroll", scroll);

        return () => {
            document.documentElement.classList.remove("no-smooth-scrolling");
            window.removeEventListener("scroll", scroll);
        };
    }, []);
};
