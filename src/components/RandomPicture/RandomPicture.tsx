import { useRef } from "react";
import { motion } from "framer-motion";

import { randomPicture } from "data/randomPicture/randomPicture";

import "./RandomPicture.sass";

export const RandomPicture = () => {
    const randomIndex = useRef(
        Math.floor(Math.random() * randomPicture.length)
    );

    return (
        <motion.div
            style={{
                backgroundImage: `url(${randomPicture[randomIndex.current]})`,
            }}
            className="randompicture"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
        ></motion.div>
    );
};
