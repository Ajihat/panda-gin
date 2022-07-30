import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
//components
import TopSlider from './components/TopSlider';
import Main from './components/Main'
import Navigation from './components/Navigation';
import InnerContainer from './components/InnerContainer';
import Curtain from './components/Curtain';
//pages
import Shop from './pages/Shop';
import Faq from './pages/Faq';
//styles
import './css/App.css'

const App: FC = () => {
  return (
    <>
      <TopSlider />
      <Main>
        <Navigation />
        <InnerContainer>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </InnerContainer>
      </Main>
      <Curtain />
    </>
  );
}

export default App;
