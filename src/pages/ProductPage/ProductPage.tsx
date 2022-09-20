import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { PageLink } from "../../components/PageLink/PageLink";
import { FancyLink } from "../../components/FancyLink/FancyLink";
import { Gallery } from "../../components/Gallery/Gallery";
import { Loader } from "../../components/Loader/Loader";

import { useGetProduct } from "./useGetProduct";

import { appRoutes } from "../../data/appRoutes/appRoutes";

import "./ProductPage.sass";

export const ProductPage = () => {
    const { id } = useParams();
    const { product, productLoading } = useGetProduct(id);

    useEffect(() => {
        document.title = `${product?.title} | Panda Gin`;
    }, [product]);

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
                    {product && <Gallery images={product.images} />}
                    {productLoading && <Loader />}
                </div>
            </div>
            <FancyLink />
        </div>
    );
};
