import award1 from "assets/awards/award1.jpg";
import award2 from "assets/awards/award2.png";
import award3 from "assets/awards/award3.png";
import award4 from "assets/awards/award4.png";
import award5 from "assets/awards/award5.png";
import award6 from "assets/awards/award6.png";

export const FooterTop = () => {
    return (
        <div className="footer__top">
            <div className="footer__motto">
                <h3 className="footer__motto-text">
                    Think Panda.
                    <br />
                    Drink Panda.
                    <br />
                    Be Panda.
                </h3>
            </div>
            <div className="footer__awards">
                <img src={award1} alt="award" className="footer__awards-img" />
                <img src={award2} alt="award" className="footer__awards-img" />
                <img src={award3} alt="award" className="footer__awards-img" />
                <img src={award4} alt="award" className="footer__awards-img" />
                <img src={award5} alt="award" className="footer__awards-img" />
                <img src={award6} alt="award" className="footer__awards-img" />
            </div>
        </div>
    );
};
