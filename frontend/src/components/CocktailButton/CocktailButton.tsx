import './CocktailButton.sass';

import { CocktailButtonProps } from './CocktailButton.types';

export const CocktailButton = ({ children, modifierClass, onClick }: CocktailButtonProps) => {
	return (
		<button onClick={onClick} className={`cocktailbutton ${modifierClass}`}>
			{children}
		</button>
	);
};
