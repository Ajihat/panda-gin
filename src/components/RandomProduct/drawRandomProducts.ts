import { Product } from "../../context/ProductsContext/ProductsContext.types";

export const drawRandomProducts = (
    products: Product[],
    count: number,
    omittedProductId: string
) => {
    const arrayOfRandomProducts: Product[] = [];
    while (arrayOfRandomProducts.length < count) {
        const randomIndex = Math.floor(Math.random() * products.length);

        const randomProduct = products[randomIndex];
        if (
            randomProduct.id !== Number(omittedProductId) &&
            !randomProduct.outOfStock &&
            arrayOfRandomProducts.findIndex(
                (item) => item.id === randomProduct.id
            ) === -1
        ) {
            arrayOfRandomProducts.push(randomProduct);
        }
    }
    return arrayOfRandomProducts;
};
