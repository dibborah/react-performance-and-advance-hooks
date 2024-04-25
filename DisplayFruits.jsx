import { memo } from "react";

const DisplayFruits = ({ fruits }) => {
  console.log("DisplayFruits is rendered");
  return (
    <div>
      {fruits &&
        fruits.map((fruit) => {
          return (
            <div key={fruit.name}>
              <span>{fruit.name}</span> <span>{fruit.emoji}</span>
            </div>
          );
        })}
    </div>
  );
};

export default memo(DisplayFruits);
