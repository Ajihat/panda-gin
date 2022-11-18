import { useTopSliderContext } from 'context/TopSliderContext/useTopSliderContext';

import { MainProps } from './Main.types';

import './Main.sass';

export const Main = ({ children }: MainProps) => {
	const { isTopSliderClosed, isTopSliderClosedByUser } = useTopSliderContext();
	return (
		<main className={isTopSliderClosed || isTopSliderClosedByUser ? 'main main--notopslider' : 'main'}>
			{children}
		</main>
	);
};
