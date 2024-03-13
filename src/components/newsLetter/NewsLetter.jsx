import "./NewsLetter.css";
import { IoSend } from "react-icons/io5";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1 className="newsLetter__title">News Letter</h1>
      <p className="newsLetter__desc">
        Det time update from your favorite products.
      </p>
      <div className="newsLetter__input-container">
        <input className="newsLetter__input" placeholder="Your email" />
        <button className="newsLetter__btn">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
