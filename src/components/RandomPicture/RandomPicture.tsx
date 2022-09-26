import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

    return (
        <motion.div
            ref={divRef}
            className="randompicture"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
        ></motion.div>
    );
};
