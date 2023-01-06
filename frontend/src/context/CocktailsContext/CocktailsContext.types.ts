export type CocktailsCategories = 'signature' | 'classic' | 'all';

export interface Cocktail {
	id: number;
	category: 'signature' | 'classic';
	title: string;
	subtitle: string;
	text: string;
	firstImage: string;
	secondImage: string;
	recipe: string[];
	garnish: string;
}

export interface ICocktailsContext {
	cocktails: Cocktail[] | null;
	cocktailsCategory: CocktailsCategories;
	isLoading: boolean;
	apiErrorText: string;
	setCocktailsCategory: React.Dispatch<React.SetStateAction<CocktailsCategories>>;
}

export interface CocktailsContextProps {
	children: React.ReactNode;
}
