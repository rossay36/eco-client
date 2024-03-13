import "./Footer.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h1 className="footer__left-logo">ROSS</h1>
        <p className="footer__left-desc">
          there are many variation of passages of lorem ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          ramdomised words which don't even look slightly believable
        </p>
        <div className="footer__left-container">
          <div className="footer__left-social-icon">
            <FaFacebookSquare className="footer__social-icons" />
          </div>
          <div className="footer__left-social-icon">
            <FaInstagramSquare className="footer__social-icons" />
          </div>
          <div className="footer__left-social-icon">
            <BsTwitterX className="footer__left-social-icons" />
          </div>
          <div className="footer__left-social-icon">
            <SiPinterest className="footer__left-social-icons" />
          </div>
        </div>
      </div>
      <div className="footer__center">
        <h3 className="footer__center-title">Useful Link</h3>
        <ul className="footer__center-list">
          <li className="footer__center-lists">Home</li>
          <li className="footer__center-lists">Cart</li>
          <li className="footer__center-lists">Man Fashion</li>
          <li className="footer__center-lists">Woman Fashion</li>
          <li className="footer__center-lists">Accessories</li>
          <li className="footer__center-lists">My Account</li>
          <li className="footer__center-lists">Order Tracking</li>
          <li className="footer__center-lists">Wishlist</li>
          <li className="footer__center-lists">Terms</li>
        </ul>
      </div>
      <div className="footer__right">
        <h3 className="footer__right-title">Contact</h3>
        <p className="footer__right-conItems">
          <FaMapMarkerAlt style={{ marginRight: "10px" }} />
          622 Dixie path, South Tobinchester 98336
        </p>
        <p className="footer__right-conItems">
          <FaPhoneAlt style={{ marginRight: "10px" }} />
          +1 234 345 456
        </p>
        <p className="footer__right-conItems">
          <CiMail style={{ marginRight: "10px" }} />
          contact@ross.com
        </p>
        <img
          className="footer__right-img"
          src="../../../src/assets/payment.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
