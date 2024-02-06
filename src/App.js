import Header from './components/header/Header';
import Valentine from './components/items/valentine/Valentine';
import './App.css';
import Gift from './components/items/gift-occasion/GiftOccasion';
import Inspiration from './components/items/inspiration/Inspiration';
import Cookie from './components/items/news/Cookie';
import VeganAd from './components/items/vegan-ad/VeganAd';
import InstagramPart from './components/items/Instagram-part/InstagramPart';
import Footer from './components/footer/Footer';
import AboutUs from './components/items/about-us/AboutUs';


function App() {
  return (
    <div className="App">
      <Header />
      <Valentine />
      <Gift />
      <Inspiration />
      <Cookie />
      <VeganAd />
      <AboutUs/>
      <InstagramPart />
      <Footer/>
     

    </div>
  );
}

export default App;
