import { Routes, Route } from "react-router-dom";
//components
import TopSlider from "./components/TopSlider/TopSlider";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import InnerContainer from "./components/InnerContainer/InnerContainer";
import Curtain from "./components/Curtain/Curtain";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import SubscribePopup from "./components/SubscribePopup/SubscribePopup";
//customhooks
import { useAppContext } from "./context/AppContext/useAppContext";
//pages
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
//styles
import "./sass/App.sass";
//data
import { appRoutes } from "./data/appRoutes/appRoutes";

const App = () => {
    const { isCurtainOpen, isLoginPopupOpen, isSubscribePopupOpen }: any =
        useAppContext(); //ANY

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
            </Main>
            {isLoginPopupOpen && <LoginPopup />}
            {isSubscribePopupOpen && <SubscribePopup />}
            {isCurtainOpen && <Curtain />}
        </>
    );
};

export default App;
