import { useEffect, useRef } from "react";
import ReactDom from "react-dom";

import pandaHead from "../../assets/panda-head.png";

import { useAppContext } from "../../context/AppContext/useAppContext";

import {
    NO_SCROLL,
    NO_SMOOTH_SCROLLING,
} from "../../data/specialClasses/specialClasses";

import "./Curtain.sass";

export const Curtain = () => {
    const { closeCurtain } = useAppContext();
    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

    const scrollToPageTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToPageTop();
        timeoutRef.current = setTimeout(() => {
            closeCurtain();
            scrollToPageTop();
        }, 1500);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [closeCurtain]);

    useEffect(() => {
        document.body.classList.add(NO_SCROLL);
        document.documentElement.classList.add(NO_SMOOTH_SCROLLING);

        return () => {
            document.body.classList.remove(NO_SCROLL);
            document.documentElement.classList.remove(NO_SMOOTH_SCROLLING);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollToPageTop);
        return () => window.removeEventListener("scroll", scrollToPageTop);
    }, []);

    return ReactDom.createPortal(
        <div className="curtain">
            <img src={pandaHead} alt="panda-icon" className="curtain__icon" />
        </div>,
        document.getElementById("portal")!
    );
};
