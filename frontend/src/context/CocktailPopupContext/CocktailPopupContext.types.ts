export interface CocktailPopupProviderProps {
	children: React.ReactNode;
}

export interface ICocktailPopupContext {
	isCocktailPopupOpen: boolean;
	setIsCocktailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setCocktailId: React.Dispatch<React.SetStateAction<number | null>>;
}
