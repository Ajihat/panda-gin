import { useContext } from 'react';
import { TopSliderContext } from './TopSliderContext';

export const useTopSliderContext = () => {
	const ctx = useContext(TopSliderContext);
	if (!ctx) {
		throw new Error('useTopSliderContext can only be used inside ContextProvider');
	}
	return ctx;
};
