import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

import { SocialsProps } from "./Socials.types";

import "./Socials.sass";

export const Socials = ({ version }: SocialsProps) => {
    return (
        <div
            className={`socials ${version === "small" ? "socials--small" : ""}`}
        >
            <a
                href="https://www.facebook.com/PandaGinBio/"
                rel="noreferrer"
                target="_blank"
                className="socials__link"
            >
                <FaFacebookF className="socials__icon" />
            </a>
            <a
                href="https://www.instagram.com/panda.gin/"
                rel="noreferrer"
                target="_blank"
                className="socials__link"
            >
                <SiInstagram className="socials__icon" />
            </a>
            <a
                href="https://www.pinterest.fr/pandagin/"
                rel="noreferrer"
                target="_blank"
                className="socials__link"
            >
                <FaPinterestP className="socials__icon" />
            </a>
        </div>
    );
};
