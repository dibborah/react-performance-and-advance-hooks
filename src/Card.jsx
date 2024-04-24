import { memo } from "react";

const Card = ({ state1 }) => {
  console.log("Card Rendered");
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        background: state1 ? "green" : "red",
        color: "#ffffff",
        padding: "2rem",
        margin: "1rem",
        fontSize: "20px",
        fontWeight: "20px",
      }}
    >
      <span>Card based on state 1</span>
    </div>
  );
};

export default memo(Card);
