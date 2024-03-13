import Navbar from "../../components/navbar/Navbar";
import Anoucement from "../../components/anoucement/Anoucement";
import "./Home.css";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/product/Products";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Anoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
