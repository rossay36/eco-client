import "./ProductList.css";
import Navbar from "../../components/navbar/Navbar";
import Anoucement from "../../components/anoucement/Anoucement";
import Products from "../../components/product/Products";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const handlFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="productList">
      <Navbar />
      <Anoucement />
      <h1 className="productList__title">{cat}</h1>
      <div className="productList__filter-container">
        <div className="productList__filter">
          <span className="productList__filter-text">Filter Products</span>
          <select
            className="productList__filter-select"
            name="color"
            onChange={handlFilters}
          >
            <option className="productList__filter-option">color</option>
            <option className="productList__filter-option ">white</option>
            <option className="productList__filter-option ">black</option>
            <option className="productList__filter-option ">red</option>
            <option className="productList__filter-option ">blue</option>
            <option className="productList__filter-option ">yellow</option>
            <option className="productList__filter-option ">green</option>
          </select>
          <select
            className="productList__filter-select"
            name="size"
            onChange={handlFilters}
          >
            <option className="productList__filter-option">Size</option>
            <option className="productList__filter-option ">XS</option>
            <option className="productList__filter-option ">S</option>
            <option className="productList__filter-option ">M</option>
            <option className="productList__filter-option ">L</option>
            <option className="productList__filter-option ">XL</option>
          </select>
        </div>
        <div className="productList__filter">
          <span className="productList__filter-text">Sort Products</span>
          <select
            className="productList__filter-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="productList__filter-option" value="newest">
              newest
            </option>
            <option className="productList__filter-option " value="asc">
              Price (asc)
            </option>
            <option className="productList__filter-option " value="desc">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
