import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useProductsContext } from "context/ProductsContext/useProductsContext";

import "./Pagination.sass";

export const Pagination = () => {
    const {
        products,
        productsPage,
        increaseProductsPage,
        decreaseProductsPage,
        setProductsPage,
    } = useProductsContext();

    const isLastPage = productsPage === products.length - 1;

    if (products.length <= 1) return null;
    return (
        <div className="pagination">
            <div className="pagination__inner">
                {productsPage !== 0 && (
                    <a href="#header" className="pagination__link">
                        <BsArrowLeft
                            className="pagination__arrow"
                            onClick={decreaseProductsPage}
                        />
                    </a>
                )}
                <ul className="pagination__list">
                    {products.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="pagination__list-item"
                                onClick={() => setProductsPage(index)}
                            >
                                <a className="pagination__link" href="#header">
                                    {String(index + 1).padStart(2, "0")}
                                </a>
                                {productsPage === index && (
                                    <div className="pagination__line"></div>
                                )}
                            </li>
                        );
                    })}
                </ul>
                {!isLastPage && (
                    <a href="#header" className="pagination__link">
                        <BsArrowRight
                            className="pagination__arrow"
                            onClick={increaseProductsPage}
                        />
                    </a>
                )}
            </div>
        </div>
    );
};
