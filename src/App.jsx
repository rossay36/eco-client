import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import MissingPage from "./pages/missingPage/MissingPage";
import Success from "./pages/success/Success";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList/:category" element={<ProductList />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route path="*" element={<MissingPage />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
