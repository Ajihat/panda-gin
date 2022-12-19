import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { Submenu } from 'components/Submenu/Submenu';
import { CocktailTile } from 'components/CocktailTile/CocktailTile';
import { Loader } from 'components/Loader/Loader';

import { useCocktailsContext } from 'context/CocktailsContext/useCocktailsContext';

import { cocktailsSubmenu } from 'data/cocktailsSubmenu/cocktailsSubmenu';

import './Cocktails.sass';

export const Cocktails = () => {
	const { cocktailsCategory, cocktails, isLoading } = useCocktailsContext();
	return (
		<div className='cocktails'>
			<Helmet>
				<title>Cocktails | Panda Gin</title>
				<meta name='description' content='Discover the complete collection of Panda Gin based cocktails' />
			</Helmet>
			<Header smallTitle='Need a cocktail recipe?' bigTitle='Panda Gin Cocktails' />
			<Submenu data={cocktailsSubmenu} activeCategory={cocktailsCategory} />
			<div className='cocktails__listing'>
				{cocktails?.map((cocktail, index) => (
					<CocktailTile
						key={cocktail.id}
						id={cocktail.id}
						index={index}
						title={cocktail.title}
						subtitle={cocktail.subtitle}
						imageUrl={cocktail.firstImage}
					/>
				))}
				{isLoading && <Loader />}
			</div>
		</div>
	);
};
