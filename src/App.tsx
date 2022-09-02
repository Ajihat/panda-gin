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

import { useAppContext } from "./context/AppContext/useAppContext";

import { Shop } from "./pages/Shop";
import { Faq } from "./pages/Faq";

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
