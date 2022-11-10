import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import { TopSlider } from 'components/TopSlider/TopSlider';
import { Main } from 'components/Main/Main';
import { Navigation } from 'components/Navigation/Navigation';
import { InnerContainer } from 'components/InnerContainer/InnerContainer';
import { Curtain } from 'components/Curtain/Curtain';
import { LoginPopup } from 'components/LoginPopup/LoginPopup';
import { SubscribePopup } from 'components/SubscribePopup/SubscribePopup';
import { Newsletter } from 'components/Newsletter/Newsletter';
import { Footer } from 'components/Footer/Footer';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { ProductPage } from 'pages/ProductPage/ProductPage';
import { LegalPopup } from 'components/LegalPopup/LegalPopup';
import { CartPopup } from 'components/CartPopup/CartPopup';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ManageProducts } from 'components/ManageProducts/ManageProducts';
import { EditProduct } from 'components/EditProduct/EditProduct';

import { useAppContext } from 'context/AppContext/useAppContext';
import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { useLoginPopupContext } from 'context/LoginPopupContext/useLoginPopupContext';
import { useSubscribePopupContext } from 'context/SubscribePopupContext/useSubscribePopupContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';

import { Shop } from 'pages/Shop/Shop';
import { About } from 'pages/About/About';
import { Faq } from 'pages/Faq/Faq';
import { Personal } from 'pages/Personal/Personal';
import { NoMatchPage } from 'pages/NoMatchPage/NoMatchPage';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './sass/App.sass';
import { Orders } from 'components/Orders/Orders';

export const App = () => {
	const { isLegalDrinkingAge } = useAuthContext();
	const { isCartPopupOpen } = useCartPopupContext();
	const { isLoginPopupOpen } = useLoginPopupContext();
	const { isSubscribePopupOpen } = useSubscribePopupContext();
	const { isCurtainOpen } = useCurtainContext();

	return (
		<>
			<HelmetProvider>
				<TopSlider />
				<Main>
					<Navigation />
					<InnerContainer>
						<Routes>
							<Route path={appRoutes.shop} element={<Shop />} />
							<Route path={appRoutes.about} element={<About />} />
							<Route path={appRoutes.faq} element={<Faq />} />
							<Route path={appRoutes.productPage} element={<ProductPage />} />
							<Route element={<ProtectedRoute />}>
								<Route path={appRoutes.personal} element={<Personal />}>
									<Route index element={<UserInfo />} />
									<Route path={appRoutes.personal_userInfo} element={<UserInfo />} />
									<Route path={appRoutes.personal_orders} element={<Orders />} />
									<Route path={appRoutes.personal_manageProducts} element={<ManageProducts />} />
									<Route
										path={appRoutes.personal_manageProducts_editProduct}
										element={<EditProduct />}
									/>
								</Route>
							</Route>
							<Route path={appRoutes.noMatch} element={<NoMatchPage />} />
						</Routes>
					</InnerContainer>
					<Newsletter />
					<Footer />
				</Main>
				{isLoginPopupOpen && <LoginPopup />}
				{isSubscribePopupOpen && <SubscribePopup />}
				{isCurtainOpen && <Curtain />}
				<AnimatePresence>
					{!isLegalDrinkingAge && <LegalPopup />}
					{isCartPopupOpen && <CartPopup />}
				</AnimatePresence>
			</HelmetProvider>
		</>
	);
};
