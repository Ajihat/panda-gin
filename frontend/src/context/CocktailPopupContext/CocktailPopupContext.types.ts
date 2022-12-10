export interface CocktailPopupProviderProps {
	children: React.ReactNode;
}

export interface ICocktailPopupContext {
	isCocktailPopupOpen: boolean;
	setIsCocktailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cocktailId: number;
	setCocktailId: React.Dispatch<React.SetStateAction<number>>;
}
