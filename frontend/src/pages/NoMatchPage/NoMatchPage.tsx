import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header/Header';
import { PageLink } from 'components/PageLink/PageLink';

import notFoundBg from 'assets/notFound.jpg';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './NoMatchPage.sass';

export const NoMatchPage = () => {
	return (
		<div className='nomatchpage' style={{ backgroundImage: `url(${notFoundBg})` }}>
			<Helmet>
				<title>Error | Panda Gin</title>
				<meta
					name='description'
					content='Discover the Panda Gin history, our philosophy, processus and sustainabilty'
				/>
			</Helmet>
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
