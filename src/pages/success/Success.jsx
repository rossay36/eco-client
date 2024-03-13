import "./Success.css";
import { ImHappy } from "react-icons/im";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="success">
      <h1 className="success__payment">
        Payment Successful <ImHappy className="payment__icon" />
      </h1>
      <Link to="/">
        <p className="success__pay">
          Back to home page
          <RiArrowGoBackFill className="pay__icon" />
        </p>
      </Link>
    </div>
  );
};

export default Success;
