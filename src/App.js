import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import SimplyChocolate from './pages/main-page/SimplyChocolate';
import BusinessSolutions from './pages/business-solutions/BusinessSolutions';
import GiftIdeas from './pages/gift-ideas/GiftIdeas';
import Brand from './pages/brand/Brand';
import ShopBars from './pages/shop/shop-bars/ShopBars';
import ShopCubs from './pages/shop/shop-cubes/ShopCubes';
import ShopProtein from './pages/shop/shop-protein/ShopProtein';
import ValentineGifts from './pages/gift-ideas/valentine-gifts/ValentineGifts';
import ConfiramtionGifts from './pages/gift-ideas/confirmation-gifts/ConfirmationGifts';
import HostessGifts from './pages/gift-ideas/hostess-gifts/HostessGifts';
import Basket from './pages/basket/Basket';
import Search from './pages/search/Search';
import ViewCookies from './pages/view-cookies/ViewCookies';
import Vegan from './pages/vegan/Vegan';
import GlutenFree from './pages/gluten-free/GlutenFree';
import Detail from './pages/detail/Detail';
import Learn from './pages/learn/Learn';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SimplyChocolate />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/business-solutions' element={<BusinessSolutions />} />
          <Route path='/gift-ideas' element={<GiftIdeas />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/shop-bars' element={<ShopBars />} />
          <Route path='/shop-cubes' element={<ShopCubs />} />
          <Route path='/shop-protein' element={<ShopProtein />} />
          <Route path='/valentine-gifts' element={<ValentineGifts />} />
          <Route path='/confirmation-gifts' element={<ConfiramtionGifts />} />
          <Route path='/hostess-gifts' element={<HostessGifts />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/search' element={<Search />} />
          <Route path='/view-cookies' element={<ViewCookies />} />
          <Route path='/see-vegan-selection' element={<Vegan />} />
          <Route path='/see-gluten-free-seleciton' element={<GlutenFree />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/learn' element={<Learn/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
