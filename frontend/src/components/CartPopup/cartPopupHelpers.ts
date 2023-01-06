export const drawNumberOfArticles = (numberOfProductsInCart: number) => {
	return numberOfProductsInCart === 1 ? '1 ARTICLE' : numberOfProductsInCart + ' ARTICLES';
};
