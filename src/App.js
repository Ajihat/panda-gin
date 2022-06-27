import { Routes, Route } from 'react-router-dom'
//components
import TopSlider from './components/TopSlider';
import Navigation from './components/Navigation';
import Main from './components/Main';
import InnerContainer from './components/InnerContainer'
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
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </InnerContainer>
        <h1>Newsletter</h1>
        <h1>Footer</h1>
      </Main>
    </div>
  );
}

export default App;
