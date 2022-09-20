import { Routes, Route } from "react-router-dom";

import { TopSlider } from "./components/TopSlider/TopSlider";
import { Main } from "./components/Main/Main";
import { Navigation } from "./components/Navigation/Navigation";
import { InnerContainer } from "./components/InnerContainer/InnerContainer";
import { Curtain } from "./components/Curtain/Curtain";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { SubscribePopup } from "./components/SubscribePopup/SubscribePopup";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ProductPage } from "./pages/ProductPage/ProductPage";

import { useAppContext } from "./context/AppContext/useAppContext";

import { Shop } from "./pages/Shop/Shop";
import { Faq } from "./pages/Faq/Faq";
import { Personal } from "./pages/Personal/Personal";

import { appRoutes } from "./data/appRoutes/appRoutes";

import "./sass/App.sass";

export const App = () => {
    const { isCurtainOpen, isLoginPopupOpen, isSubscribePopupOpen } =
        useAppContext();

    return (
        <>
            <TopSlider />
            <Main>
                <Navigation />
                <InnerContainer>
                    <Routes>
                        <Route path={appRoutes.shop} element={<Shop />} />
                        <Route path={appRoutes.faq} element={<Faq />} />
                        <Route
                            path={appRoutes.productPage}
                            element={<ProductPage />}
                        />
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path={appRoutes.personal}
                                element={<Personal />}
                            />
                        </Route>
                    </Routes>
                </InnerContainer>
                <Newsletter />
                <Footer />
            </Main>
            {isLoginPopupOpen && <LoginPopup />}
            {isSubscribePopupOpen && <SubscribePopup />}
            {isCurtainOpen && <Curtain />}
        </>
    );
};
