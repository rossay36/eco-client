import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <div className="category__image">
        <img className="category__img" src={item.img} />
      </div>
      <div className="category__info">
        <h1 className="category__title">{item.title}</h1>
        <button className="category__btn">
          <Link
            style={{ textDecoration: "none" }}
            to={`/productList/${item.cat}`}
          >
            SHOP NOW
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
