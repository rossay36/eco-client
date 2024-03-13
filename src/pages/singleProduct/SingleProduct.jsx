import "./SingleProduct.css";
import Navbar from "../../components/navbar/Navbar";
import Anoucement from "../../components/anoucement/Anoucement";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicReq } from "../../ReqMethod";
import { addProduct } from "../../redux/CartRedux";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [colors, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get("product/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQauntity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAdd = () => {
    dispatch(addProduct({ ...product, quantity, colors, size }));
    Navigate("/cart");
  };

  return (
    <div className="SingleProduct">
      <Navbar />
      <Anoucement />
      <div className="singleProduct__wrap">
        <div className="singleProduct__container-img">
          <img
            className="singleProduct__img"
            src={product.img}
            alt="Jacke for sale"
          />
        </div>
        <div className="singleProduct__container-info">
          <h1 className="singleProduct__info-title">{product?.title}</h1>
          <p className="singleProduct__info-desc">{product?.desc}</p>
          <span className="singleProduct__info-price">
            Price: {product?.price}
          </span>
          <div className="singleProduct__filter-container">
            <div className="singleProduct__filters">
              <div className="singleProduct__filters-title">Color</div>
              {product.color?.map((c) => (
                <div
                  style={{
                    backgroundColor: c,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                  }}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
            <div className="singleProduct__filters">
              <span className="singleProduct__filters-title">Size</span>
              <select
                className="singleProduct__filters-select"
                onChange={(e) => setSize(e.target.value)}
              >
                <option className="singleProduct__filters-option">sizes</option>
                {product.size?.map((s) => (
                  <option className="singleProduct__filters-option" key={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="singleProduct__add-container">
            <div className="singleProduct__add-amount">
              <button className="singleProduct__add-btnAmount">
                <IoMdRemove
                  className="singleProduct__add-icon"
                  onClick={() => handleQauntity("dec")}
                />
              </button>
              <div className="singleProduct__add-amountCounts">
                <span className="singleProduct__add-amountCount">
                  {quantity}
                </span>
              </div>
              <button className="singleProduct__add-btnAmount">
                <IoMdAdd
                  className="singleProduct__add-icon"
                  onClick={() => handleQauntity("inc")}
                />
              </button>
            </div>
            <button className="singleProduct__add-btn" onClick={handleAdd}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
