import { Routes, Route } from 'react-router-dom'
//components
import TopSlider from './components/TopSlider';
import Navigation from './components/Navigation';
import Main from './components/Main';
import InnerContainer from './components/InnerContainer'
import Newsletter from './components/Newsletter'
import Curtain from './components/Curtain';
//pages
import Shop from './pages/Shop'
//styles
import './css/App.css';


function App() {
  return (
    <div className="app">
      <TopSlider />
      <Main>
        <Navigation />
        <InnerContainer>
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
        </InnerContainer>
        <Newsletter />
        <h1>Footer</h1>
      </Main>
      <Curtain />
    </div>
  );
}

export default App;
