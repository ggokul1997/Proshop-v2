import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} color="#f8e825" />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#f8e825" />);
    } else {
      stars.push(<FaRegStar key={i} color="#f8e825" />);
    }
  }

  return (
    <div className="rating" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {stars}
      {text && <span style={{ marginLeft: "8px" }}>{text}</span>}
    </div>
  );
};

export default Rating;
