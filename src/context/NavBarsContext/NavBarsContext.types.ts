export interface NavBarsProviderProps {
	children: React.ReactNode;
}

export interface INavBarsContext {
	navBarsAreHidden: boolean;
	showNavbars: () => void;
	hideNavbars: () => void;
	scrollingDirectionIsBeingChecked: boolean;
	enableScrollingDirectionCheck: () => void;
	disableScrollingDirectionCheck: () => void;
}
