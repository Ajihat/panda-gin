export interface TopSliderProviderProps {
	children: React.ReactNode;
}

export interface ITopSliderContext {
	isTopSliderClosed: boolean;
	isTopSliderClosedByUser: boolean;
	openTopSlider: () => void;
	closeTopSlider: () => void;
	closeTopSliderByUser: () => void;
}
