import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//components
import TopSlider from './components/TopSlider';
import Main from './components/Main'
import Navigation from './components/Navigation';
import InnerContainer from './components/InnerContainer';
import Curtain from './components/Curtain';
import LoginPopup from './components/LoginPopup';
import SubscribePopup from './components/SubscribePopup';
//customhooks
import { useAppContext } from './customhooks/useAppContext'
//pages
import Shop from './pages/Shop';
import Faq from './pages/Faq';
//styles
import './css/App.css'
//data
import appRoutes from './data/appRoutes';

const App: FC = () => {

  const { isCurtainOpen, isLoginPopupOpen, isSubscribePopupOpen }: any = useAppContext();  //ANY

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
}

export default App;
