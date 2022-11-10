export interface NavBarsProviderProps {
	children: React.ReactNode;
}

export interface INavBarsContext {
	navBarsAreHidden: boolean;
	showNavbars: () => void;
	hideNavbars: () => void;
}
