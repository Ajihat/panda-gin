interface Cocktail {
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
	setCocktails: React.Dispatch<React.SetStateAction<null>>;
	cocktailsCategory: 'all' | 'classic' | 'signature';
	setCocktailsCategory: React.Dispatch<React.SetStateAction<'signature' | 'classic' | 'all'>>;
}

export interface CocktailsContextProps {
	children: React.ReactNode;
}
