import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?category=${cat}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (err) {
        console.log({ Error: err });
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="products">
      {cat
        ? filterproducts.map((item) => <Product key={item._id} item={item} />)
        : products
            .slice(0, 8)
            .map((item) => <Product key={item._id} item={item} />)}
    </div>
  );
};

export default Products;
