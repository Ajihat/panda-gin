import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { OpacityLayer } from "../OpacityLayer/OpacityLayer";

import { useShoppingCartContext } from "../../context/ShoppingCartContext/useShoppingCartContext";
import { useAppContext } from "../../context/AppContext/useAppContext";

import "./CartSummary.sass";

export const CartSummary = () => {
    const {
        numberOfProductsInCart,
        shoppingCartValue,
        shippingCost,
        productsInCart,
    } = useShoppingCartContext();
    const { closeCartPopup } = useAppContext();

    return (
        <div className="cartsummary">
            <div
                className="cartsummary__inner"
                data-order={`${
                    productsInCart.length === 0 ? 5 : 4 + productsInCart.length
                }`}
            >
                <div className="cartsummary__row">
                    <div className="cartsummary__row-left">
                        {numberOfProductsInCart} items
                    </div>
                    <div className="cartsummary__row-right">
                        {shoppingCartValue.toFixed(2)}&euro;
                    </div>
                </div>
                {numberOfProductsInCart > 0 && (
                    <div className="cartsummary__row">
                        <div className="cartsummary__row-left">Shipping</div>
                        <div className="cartsummary__row-right">
                            {shippingCost === 0 ? "FREE" : `${shippingCost}€`}
                        </div>
                    </div>
                )}
            </div>
            <div
                className="cartsummary__row moved"
                data-order={`${
                    productsInCart.length === 0 ? 6 : 5 + productsInCart.length
                }`}
            >
                <div className="cartsummary__row-left">Total (tax incl.)</div>
                <div className="cartsummary__row-right">
                    {numberOfProductsInCart === 0
                        ? (0).toFixed(2)
                        : (shoppingCartValue + shippingCost).toFixed(2)}
                    &euro;
                </div>
            </div>
            <div
                onClick={closeCartPopup}
                className="cartsummary__btn-holder"
                data-order={`${
                    productsInCart.length === 0 ? 7 : 6 + productsInCart.length
                }`}
            >
                <PrimaryButton text="Continue Shopping" type="button" />
            </div>
            <div
                className="cartsummary__btn-holder"
                data-order={`${
                    productsInCart.length === 0 ? 8 : 7 + productsInCart.length
                }`}
            >
                <PrimaryButton text="Proceed to checkout" type="button" />
                {numberOfProductsInCart === 0 && <OpacityLayer zIndex="2" />}
            </div>
        </div>
    );
};
