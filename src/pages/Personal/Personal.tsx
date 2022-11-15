import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { ApiError } from 'components/ApiError/ApiError';
import { PersonalNav } from 'components/PersonalNav/PersonalNav';

import { useGetUserData } from './useGetUserData';
import { useAuthContext } from 'context/AuthContext/useAuthContext';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './Personal.sass';

const headerBigTitles = {
	'/personal/user-info': 'Your personal information',
	'/personal/orders': 'Your orders',
	'/personal/manage-products': 'Manage products',
};

export const Personal = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { userData } = useAuthContext();
	const { isLoading, apiErrorText } = useGetUserData();

	useEffect(() => {
		navigate(appRoutes.personal_userInfo);
	}, []);

	return (
		<div className='personal'>
			<Helmet>
				<title>Personal | Panda Gin</title>
				<meta name='description' content='Manage your account, watch orders and many more' />
			</Helmet>
			<div className='personal__inner'>
				{!isLoading && !apiErrorText && (
					<div className='personal__container'>
						<Header
							bigTitle={headerBigTitles[pathname as keyof typeof headerBigTitles] || 'You are editing'}
							smallTitle={`Welcome ${userData?.firstname}`}
						/>
						<div className='personal__content'>
							<div className='personal__left'>
								<PersonalNav />
							</div>
							<div className='personal__right'>
								<Outlet />
							</div>
						</div>
					</div>
				)}
				{isLoading && <Loader />}
				{apiErrorText && <ApiError text={apiErrorText} />}
			</div>
		</div>
	);
};
