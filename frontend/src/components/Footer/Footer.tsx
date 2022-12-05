import { FooterLeftBar } from "./FooterLeftBar";
import { FooterTop } from "./FooterTop";
import { FooterMid } from "./FooterMid";
import { FooterBottom } from "./FooterBottom";

import "./Footer.sass";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left-side">
                <FooterLeftBar />
            </div>
            <div className="footer__right-side">
                <FooterTop />
                <FooterMid />
                <FooterBottom />
            </div>
        </footer>
    );
};
