import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Under20 from './components/Under20';
import HeroCarousel from './components/HeroCarousel';
import Under40 from './components/Under40';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import SinglePage from './components/SinglePage';
import AutoPlayMethods from './components/AutoPlayMethods';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingredients from './components/Ingredients';
import Journal from './components/Journal';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' exact element={<>   <NavBar /> <HeroCarousel /> <HeroSection /><OurBestSellers /> <Ingredients /> <Journal />
          <FollowUs/> <Footer/>
          </>} />
          <Route path='/:id' exact element={<> <NavBar /> <SinglePage /></>} />
          <Route path='/journal/april' element={<> <NavBar /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <Cart /></>} />
          <Route path='/under20' element={<> <NavBar />  <Under20 /> </>} />
          <Route path='/under40' element={<> <NavBar />  <Under40 /> </>} />
          <Route path='/forHer' element={<> <NavBar />  <ForHer /> </>} />
          <Route path='/forHim' element={<> <NavBar />  <ForHim /> </>} />
          <Route path='/auto' element={<> <AutoPlayMethods /> </>} />
          <Route path='/OurBestSellers' element={<> <OurBestSellers /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
