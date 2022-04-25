import './App.css';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Products from './components/Products'

function Home() {
  return (
    <div className="Home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
