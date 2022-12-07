import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';

import './Cocktails.sass';

export const Cocktails = () => {
	return (
		<div className='cocktails'>
			<Helmet>
				<title>Cocktails | Panda Gin</title>
				<meta name='description' content='Discover the complete collection of Panda Gin based cocktails' />
			</Helmet>
			<Header smallTitle='Need a cocktail recipe?' bigTitle='Panda Gin Cocktails' />
		</div>
	);
};
