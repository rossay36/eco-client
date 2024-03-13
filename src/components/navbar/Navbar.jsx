import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__left">
          <span className="nav__left-languages">EN</span>
          <div className="nav__left-searchContainer">
            <input className="nav__left-input" placeholder="Search" />
            <FiSearch className="nav__left-icon" />
          </div>
        </div>
        <div className="nav__center">
          <h1 className="nav__center-logo">ROSS</h1>
        </div>
        <div className="nav__right ">
          <button
            className="nav__hamburger"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
          <div
            className={toggle ? "nav__right-list active" : "nav__right-list"}
          >
            <button className="nav__signout">Sign Out</button>
            <h3 className="nav__right-menuItem">
              User: {currentUser?.username}
            </h3>
            {currentUser?.isAdmin === false ? (
              <p>dashboard</p>
            ) : (
              <Link to={"http://localhost:5173/login"} target="_blank">
                <div className="nav__right-menuItem">DASHBOARD</div>
              </Link>
            )}
            <Link to="/register">
              <div className="nav__right-menuItem">REGISTER</div>
            </Link>
            <Link to="/login">
              <div className="nav__right-menuItem">SIGN IN</div>
            </Link>
          </div>
          <div className="nav__right-badgeContainer">
            <Link to="/cart">
              <MdOutlineShoppingCart className="nav-right-icon" />
            </Link>
            <span className="nav__right-badge">{quantity}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
