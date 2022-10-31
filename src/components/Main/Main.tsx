import { useAppContext } from 'context/AppContext/useAppContext';

import { MainProps } from './Main.types';

import './Main.sass';

export const Main = ({ children }: MainProps) => {
	const { isTopSliderClosed, isTopSliderClosedByUser } = useAppContext();
	return (
		<main className={isTopSliderClosed || isTopSliderClosedByUser ? 'main main--notopslider' : 'main'}>
			{children}
		</main>
	);
};
