import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { PageLink } from "../../components/PageLink/PageLink";
import { FancyLink } from "../../components/FancyLink/FancyLink";
import { Gallery } from "../../components/Gallery/Gallery";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { Loader } from "../../components/Loader/Loader";
import { RandomProduct } from "../../components/RandomProduct/RandomProduct";
import { ApiError } from "../../components/ApiError/ApiError";
import { RandomPicture } from "../../components/RandomPicture/RandomPicture";

import { useGetProduct } from "./useGetProduct";

import { appRoutes } from "../../data/appRoutes/appRoutes";

import "./ProductPage.sass";

export const ProductPage = () => {
    const { id } = useParams<string>();

    const { product, productLoading, apiError, abortControler } = useGetProduct(
        id as string
    );

    useEffect(() => {
        if (product !== null) {
            document.title = `${product.title} | Panda Gin`;
        }
    }, [product]);

    useEffect(() => {
        const controler = abortControler.current;
        return () => controler?.abort();
    }, [abortControler]);

    return (
        <div className="productpage">
            <div className="productpage__inner">
                <div className="productpage__link-holder">
                    <PageLink
                        text="Back to products"
                        textColor="black"
                        arrowPosition="left"
                        url={appRoutes.shop}
                    />
                </div>
                <div className="productpage__product-holder">
                    {product && (
                        <Gallery
                            images={product.images}
                            outOfStock={product.outOfStock}
                            discount={product.discount}
                        />
                    )}
                    {product && <Dashboard product={product} />}
                    {productLoading && <Loader />}
                    {apiError && <ApiError text={apiError} />}
                </div>
            </div>
            <RandomProduct currentProductId={id as string} />
            <FancyLink />
            <RandomPicture />
        </div>
    );
};
