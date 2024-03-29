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
import { Orders } from 'components/Orders/Orders';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { CocktailPopup } from 'components/CocktailPopup/CocktailPopup';

import { useAuthContext } from 'context/AuthContext/useAuthContext';
import { useLoginPopupContext } from 'context/LoginPopupContext/useLoginPopupContext';
import { useSubscribePopupContext } from 'context/SubscribePopupContext/useSubscribePopupContext';
import { useCurtainContext } from 'context/CurtainContext/useCurtainContext';
import { useCartPopupContext } from 'context/CartPopupContext/useCartPopupContext';
import { useMobileMenuContext } from 'context/MobileMenuContext/useMobileMenuContext';
import { useCocktailPopupContext } from 'context/CocktailPopupContext/useCocktailPopupContext';

import { Shop } from 'pages/Shop/Shop';
import { About } from 'pages/About/About';
import { Cocktails } from 'pages/Cocktails/Cocktails';
import { Faq } from 'pages/Faq/Faq';
import { Personal } from 'pages/Personal/Personal';
import { Contact } from 'pages/Contact/Contact';
import { NoMatchPage } from 'pages/NoMatchPage/NoMatchPage';

import { appRoutes } from 'data/appRoutes/appRoutes';

import './sass/App.sass';

export const App = () => {
	const { isLegalDrinkingAge } = useAuthContext();
	const { isCartPopupOpen } = useCartPopupContext();
	const { isLoginPopupOpen } = useLoginPopupContext();
	const { isSubscribePopupOpen } = useSubscribePopupContext();
	const { isCurtainOpen } = useCurtainContext();
	const { isMobileMenuOpen } = useMobileMenuContext();
	const { isCocktailPopupOpen } = useCocktailPopupContext();

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
							<Route path={appRoutes.cocktails} element={<Cocktails />} />
							<Route path={appRoutes.faq} element={<Faq />} />
							<Route path={appRoutes.contact} element={<Contact />} />
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
				{isCocktailPopupOpen && <CocktailPopup />}
				<AnimatePresence>
					{!isLegalDrinkingAge && <LegalPopup />}
					{isCartPopupOpen && <CartPopup />}
					{isMobileMenuOpen && <MobileMenu />}
				</AnimatePresence>
			</HelmetProvider>
		</>
	);
};
