import { useSelector } from "react-redux";
import Anoucement from "../../components/anoucement/Anoucement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userReq } from "../../ReqMethod";
import { useNavigate, Link } from "react-router-dom";

const KEY = import.meta.env.VITE_REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const Navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const stripeReq = async () => {
      try {
        const res = await userReq.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        Navigate("/success", { data: res.data });
      } catch (err) {
        console.log({ Error: err });
      }
    };
    stripeToken && cart.total >= 1 && stripeReq();
  }, [stripeToken, cart.total, Navigate]);

  return (
    <div className="cart">
      <Navbar />
      <Anoucement />
      <div className="cart__wrap">
        <h1 className="cart__title">YOUR BAG</h1>
        <div className="cart__top">
          <button className="cart__top-btn">
            <Link style={{ textDecoration: "none" }} to="/">
              CONTINUE SHOPPING
            </Link>
          </button>
          <div className="cart__top-texts">
            <p className="cart__top-text">Shopping Bag(2)</p>
            <p className="cart__top-text ">Your Wishlist</p>
          </div>
          <StripeCheckout
            name="Ross-Shop"
            image="../../../src/assets/avatar1.jpg"
            billingAddress
            shippingAddress
            description={`Your Total is ${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="cart__summary-btn">CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-info">
            {cart.products?.map((product) => (
              <div className="cart__info-produt" key={product._id}>
                <div className="cart__info-produt-details">
                  <div className="cart__info-produt-img">
                    <img
                      className="cart__info-produt-image"
                      src={product?.img}
                      alt=""
                    />
                  </div>
                  <div className="cart__info-produt-detail">
                    <p className="cart__info-produt-name">
                      <b>Product: </b>
                      {product.title}
                    </p>
                    <p className="cart__info-produt-userId">
                      <b>ID: </b>
                      {product._id}
                    </p>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: [product?.color],
                      }}
                    ></div>
                    <p className="cart__info-produt-size">
                      <b>Size: </b>
                      {product.size}
                    </p>
                  </div>
                </div>
                <div className="cart__info-produt-price">
                  <div className="cart__price-container">
                    <IoMdAdd className="cart__price-icon" />
                    <p className="cart__price-amount">{product.quantity}</p>
                    <IoMdRemove className="cart__price-icon" />
                  </div>
                  <p className="cart__price-prices">
                    Price: ${product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}

            <hr className="hr" />
          </div>
          <div className="cart__bottom-summary">
            <h1 className="cart__summary-title">ORDER SUMMARY</h1>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Subtotal</span>
              <span className="cart__summary-price">$ {cart.total}</span>
            </div>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Estimated Shipping</span>
              <span className="cart__summary-price">$ 5.90</span>
            </div>
            <div className="cart__summary-items">
              <span className="cart__summary-text">Shipping Discount</span>
              <span className="cart__summary-price">$ -5.90</span>
            </div>
            <div className="cart__summary-items total">
              <span className="cart__summary-text ">Total</span>
              <span className="cart__summary-price">$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Ross-Shop"
              image="../../../src/assets/avatar1.jpg"
              billingAddress
              shippingAddress
              description={`Your Total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="cart__summary-btn">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
