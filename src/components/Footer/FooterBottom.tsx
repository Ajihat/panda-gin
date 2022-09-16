import paymentMethods from "../../assets/payment-methods.png";

export const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <img
                src={paymentMethods}
                alt="payment-methods"
                className="footer__payments"
            />
            <p className="footer__orginals">
                2017 - 2022 Panda Gin &copy; All rights belong to their
                respective owners
            </p>
        </div>
    );
};
