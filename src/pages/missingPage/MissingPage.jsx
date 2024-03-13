import { Link } from "react-router-dom";
import { FaRegFaceSadTear, FaFaceSadCry } from "react-icons/fa6";

import "./MissingPage.css";

const MissingPage = () => {
  return (
    <div className="missingPage">
      <h1 className="missingPage__title">Ross-Shop</h1>
      <span className="missingPage__icons">
        Awww sorry missing page!
        <FaFaceSadCry className="missingPage__icon" />
      </span>
      <span className="missingPage__icons">
        We are sorry for that!
        <FaRegFaceSadTear className="missingPage__icon" />
      </span>
      <p className="missingPage__text">
        <Link to="/">back to home Page</Link>
      </p>
    </div>
  );
};

export default MissingPage;
