import { useEffect, useRef } from "react";

import { randomPicture } from "../../data/randomPicture/randomPicture";

import "./RandomPicture.sass";

export const RandomPicture = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (divRef.current) {
            const randomIndex = Math.floor(
                Math.random() * randomPicture.length
            );
            const choosenPicture = randomPicture[randomIndex];
            divRef.current.style.backgroundImage = `url(${choosenPicture})`;
        }
    }, []);

    return <div ref={divRef} className="randompicture"></div>;
};
