import { createContext, useState, useCallback } from 'react';

import { TopSliderProviderProps, ITopSliderContext } from './TopSliderContext.types';

export const TopSliderContext = createContext<ITopSliderContext | null>(null);

export const TopSliderProvider = ({ children }: TopSliderProviderProps) => {
	const [isTopSliderClosed, setIsTopSliderClosed] = useState(false);
	const [isTopSliderClosedByUser, setIsTopSliderClosedByUser] = useState(false);

	const openTopSlider = useCallback(() => {
		setIsTopSliderClosed(false);
	}, []);

	const closeTopSlider = useCallback(() => {
		setIsTopSliderClosed(true);
	}, []);

	const closeTopSliderByUser = useCallback(() => {
		setIsTopSliderClosedByUser(true);
	}, []);
	return (
		<TopSliderContext.Provider
			value={{
				isTopSliderClosed,
				isTopSliderClosedByUser,
				openTopSlider,
				closeTopSlider,
				closeTopSliderByUser,
			}}
		>
			{children}
		</TopSliderContext.Provider>
	);
};
