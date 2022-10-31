import { useEffect } from 'react';

import { Header } from 'components/Header/Header';
import { PageLink } from 'components/PageLink/PageLink';

import notFoundBg from 'assets/notFound.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './NoMatchPage.sass';

export const NoMatchPage = () => {
	useEffect(() => {
		document.title = 'Error | Panda Gin';
	}, []);
	return (
		<div className='nomatchpage' style={{ backgroundImage: `url(${notFoundBg})` }}>
			<Header bigTitle='Error 404' smallTitle="This URL doesn't exist" />
			<div className='nomatchpage__link'>
				<PageLink
					text='Back to home'
					textColor='black'
					arrowPosition='right'
					url={appRoutes.shop}
					shouldOpenCurtain={true}
				/>
			</div>
		</div>
	);
};
