import { useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { Submenu } from "../../components/Submenu/Submenu";
import { Loader } from "../../components/Loader/Loader";
import { ProductTile } from "../../components/ProductTile/ProductTile";
import { Pagination } from "../../components/Pagination/Pagination";
import { ApiError } from "../../components/ApiError/ApiError";

import { shopSubmenu } from "../../data/shopSubmenu/shopSubmenu";

import { useProductsContext } from "../../context/ProductsContext/useProductsContext";

import "./Shop.sass";

export const Shop = () => {
    const {
        productsCategory,
        changeProductsCategory,
        productsLoading,
        products,
        productsPage,
        setProductsPage,
        apiError,
    } = useProductsContext();
    useEffect(() => {
        document.title = "Shop | Panda Gin";
        changeProductsCategory("all");
        setProductsPage(0);
    }, [changeProductsCategory, setProductsPage]);

    return (
        <div className="shop">
            <Header smallTitle="Shop Panda Gin" bigTitle="Find your Panda" />
            <Submenu data={shopSubmenu} activeCategory={productsCategory} />
            <div className="shop__listing" id="products-listing">
                {productsLoading && <Loader />}
                {products.length !== 0 &&
                    products[productsPage].map((product, index) => {
                        const {
                            id,
                            title,
                            description,
                            price,
                            outOfStock,
                            discount,
                            images,
                        } = product;
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
                                openInNewTab={false}
                            />
                        );
                    })}
                {apiError && <ApiError text={apiError} />}
            </div>
            <Pagination />
        </div>
    );
};
