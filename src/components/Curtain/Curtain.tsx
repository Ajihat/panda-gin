import { useEffect, useRef } from "react";
import ReactDom from "react-dom";

import pandaHead from "../../assets/panda-head.png";

import { useAppContext } from "../../context/AppContext/useAppContext";

import "./Curtain.sass";

export const Curtain = () => {
    const { closeCurtain } = useAppContext();
    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

    const scrollToPageTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.scroll(0, 0);
        timeoutRef.current = setTimeout(() => {
            closeCurtain();
            window.scroll(0, 0);
        }, 1500);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [closeCurtain]);

    useEffect(() => {
        const htmlTag = document.getElementById("html")!;
        const bodyTag = document.getElementById("body")!;
        bodyTag.classList.add("no-scroll");
        htmlTag.classList.add("no-scroll");

        return () => {
            bodyTag.classList.remove("no-scroll");
            htmlTag.classList.remove("no-scroll");
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
