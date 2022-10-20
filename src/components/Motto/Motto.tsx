import { useRef, useEffect } from "react";

import "./Motto.sass";

export const Motto = () => {
    const mottoRef = useRef<HTMLHeadingElement | null>(null);

    const checkIfMottoIsCentered = () => {
        const motto = mottoRef.current as HTMLHeadingElement;
        const mottoDistanceFromTop = motto.getBoundingClientRect()
            .top as number;
        const mottoDistanceFromBottom = motto.getBoundingClientRect()
            .bottom as number;
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        if (
            mottoDistanceFromTop < 0.7 * windowHeight &&
            mottoDistanceFromBottom > 0.7 * windowHeight
        ) {
            Array.from(motto.children).forEach((child) =>
                child.classList.add("motto__word--animate")
            );
        }
        if (
            mottoDistanceFromTop > windowHeight ||
            mottoDistanceFromBottom < 0
        ) {
            Array.from(motto.children).forEach((child) =>
                child.classList.remove("motto__word--animate")
            );
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", checkIfMottoIsCentered);
        return () =>
            window.removeEventListener("scroll", checkIfMottoIsCentered);
    }, []);
    return (
        <div className="motto">
            <div className="motto__inner">
                <h2 ref={mottoRef} className="motto__text">
                    <span className="motto__word motto__word--think">
                        Think
                    </span>{" "}
                    Panda.{" "}
                    <span className="motto__word motto__word--drink">
                        Drink
                    </span>{" "}
                    Panda.
                    <br />
                    <span className="motto__word motto__word--be">Be</span>{" "}
                    Panda.
                </h2>
                <div className="motto__line motto__line--right"></div>
                <div className="motto__line motto__line--left"></div>
            </div>
        </div>
    );
};
