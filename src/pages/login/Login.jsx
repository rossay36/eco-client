import { useState } from "react";
import "./Login.css";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className="login__wrap">
        <h1 className="login__title">SIGN IN</h1>
        <form className="login__form">
          <input
            className="login__input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="login__input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="login__btn"
            onClick={handleLogin}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && (
            <p style={{ color: "red", display: "flex", textAlign: "center" }}>
              somthing went wrong...
            </p>
          )}
          <p className="login__link">FORGOTTON PASSWORD</p>
          <p className="login__link">CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
