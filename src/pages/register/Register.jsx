import "./Register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { publicReq } from "../../ReqMethod";

const Register = () => {
  const name = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity(
        "password didn't match, please try again! "
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await publicReq.post("auth/register", user);
        Navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="register__wrap">
        <h1 className="register__title">CREATE AN ACCOUNT</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            className="register__input"
            required
            ref={username}
            placeholder="Username"
          />
          <input
            className="register__input"
            required
            ref={email}
            placeholder="Email"
          />
          <input
            className="register__input"
            required
            ref={password}
            placeholder="Password"
            min="6"
          />
          <input
            className="register__input"
            required
            ref={confirmPassword}
            placeholder="Confirm Password"
          />
          <span className="register__agreement">
            By creating an account, I consent to the proccessing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="register__btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
