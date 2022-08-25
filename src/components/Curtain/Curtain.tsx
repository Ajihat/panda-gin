import { useEffect, useRef } from "react";
import ReactDom from "react-dom";

import pandaHead from "../../assets/panda-head.svg";

import { useAppContext } from "../../context/AppContext/useAppContext";

import "./Curtain.sass";

export const Curtain = () => {
    const { closeCurtain } = useAppContext();
    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

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

    return ReactDom.createPortal(
        <div className="curtain">
            <img src={pandaHead} alt="panda-icon" className="curtain__icon" />
        </div>,
        document.getElementById("portal")!
    );
};
