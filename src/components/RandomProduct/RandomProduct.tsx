import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { ProductTile } from "../ProductTile/ProductTile";
import { ApiError } from "../ApiError/ApiError";

import { useGetRandomProducts } from "./useGetRandomProducts";

import { RandomProductProps } from "./RandomProduct.types";

import "./RandomProduct.sass";

export const RandomProduct = ({ currentProductId }: RandomProductProps) => {
    const { randomProducts, isLoading, apiError, abortControler } =
        useGetRandomProducts(currentProductId);
    return (
        <div className="randomproduct">
            <Header
                bigTitle="You may also like"
                smallTitle="Panda fan shop"
                alignment="left"
            />
            <div className="randomproduct__inner">
                {randomProducts.map((randomProduct, index) => {
                    const {
                        id,
                        title,
                        description,
                        price,
                        outOfStock,
                        discount,
                        images,
                    } = randomProduct;
                    return (
                        <ProductTile
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            outOfStock={outOfStock}
                            discount={discount}
                            mainPictureUrl={images[0]}
                            index={index}
                            openInNewTab={true}
                        />
                    );
                })}
                {isLoading && <Loader />}
                {apiError && <ApiError text={apiError} />}
            </div>
        </div>
    );
};
