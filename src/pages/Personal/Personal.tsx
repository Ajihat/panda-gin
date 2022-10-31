import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { ApiError } from 'components/ApiError/ApiError';
import { PersonalNav } from 'components/PersonalNav/PersonalNav';

import { useGetUserData } from './useGetUserData';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './Personal.sass';

export const Personal = () => {
	const userJwtToken = useOutletContext<string>();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const headerBigTitles = {
		'/personal/user-info': 'Your personal information',
		'/personal/orders': 'Your orders',
		'/personal/manage-products': 'Manage products',
	};

	const { user, isLoading, abortControler, apiError } = useGetUserData(userJwtToken);

	useEffect(() => {
		document.title = `Personal | Panda Gin`;
		navigate(appRoutes.personal_userInfo);
	}, []);

	useEffect(() => {
		const controler = abortControler.current;
		return () => controler?.abort();
	}, [abortControler]);
	return (
		<div className='personal'>
			<div className='personal__inner'>
				{!isLoading && !apiError && (
					<div className='personal__container'>
						<Header
							bigTitle={headerBigTitles[pathname as keyof typeof headerBigTitles] || 'You are editing'}
							smallTitle={`Welcome ${user?.firstname}`}
						/>
						<div className='personal__content'>
							<div className='personal__left'>
								<PersonalNav />
							</div>
							<div className='personal__right'>
								<Outlet context={user} />
							</div>
						</div>
					</div>
				)}
				{isLoading && <Loader />}
				{apiError && <ApiError text={apiError} />}
			</div>
		</div>
	);
};
