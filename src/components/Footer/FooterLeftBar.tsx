import { Socials } from "components/Socials/Socials";
import fullLogo from "assets/logo-full.png";

import "./Footer.sass";

export const FooterLeftBar = () => {
    return (
        <>
            <img
                src={fullLogo}
                alt="Panda-logo"
                className="footer__logo-full"
            />
            <div className="footer__contact">
                <div className="footer__contact-phones">
                    <a href="tel:{+32 478.04.85.45}" className="footer__phone">
                        +32 478.04.85.45
                    </a>
                    <span className="footer__slash">/</span>
                    <a href="tel:{+32 471.08.32.75}" className="footer__phone">
                        +32 471.08.32.75
                    </a>
                </div>
                <div className="footer__contact-address">
                    <a
                        href="mailto:info@panda-gin.com"
                        className="footer__address"
                    >
                        info@panda-gin.com
                    </a>
                    <span className="footer__address-text">
                        The head office (9 a.m. to 5 p.m.)
                        <br />
                        31 Drève de la Meute
                        <br />
                        1410 Waterloo, Belgium
                    </span>
                </div>
                <Socials />
                <p className="footer__company">
                    Yespirits Company SRL / TVA
                    <br /> 0673.501.385
                </p>
                <div className="footer__line"></div>
            </div>
        </>
    );
};
