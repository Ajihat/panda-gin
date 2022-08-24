import { useRef, useEffect } from "react";
import { useAppContext } from "../../context/AppContext/useAppContext";

export const useNavbarOnScroll = () => {
    const { hideNavbars, showNavbars } = useAppContext();
    const lastScrollPositionRef = useRef<number>(0);

    const checkScrollingDirection = () => {
        const scroll: number = window.pageYOffset;
        if (scroll > lastScrollPositionRef.current && scroll >= 120) {
            hideNavbars();
        } else {
            showNavbars();
        }
        lastScrollPositionRef.current = scroll <= 0 ? 0 : scroll;
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollingDirection);
        return () =>
            window.removeEventListener("scroll", checkScrollingDirection);
    }, []);
};
