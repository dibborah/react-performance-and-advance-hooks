import { useEffect, useMemo, useState } from "react";
import { fibonacci } from "./fibonacci";
import { useTime } from "./useTime";
import { format } from "date-fns";

const ExampleUseMemo1 = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const time = useTime(); // Ye line har ek sec main meri state ko change kar rahi hain
  // Ye time state mere component ko bar bar re-render kar rahi hain
  // To mujhe meri calculation ya phir meri heavy computation v bar bar karni paredi
  // To isliye hum useMemo use kar lete hain
  console.log(time);

  const fibNums = useMemo(() => {
    const result = [];
    for (let i = 1; i <= selectedNumber; i++) {
      console.log("calculating fibonacci numbers");
      result.push(fibonacci(i));
    }
    return result;
  }, [selectedNumber]);

  return (
    <div>
      <h1>ExampleUseMemo</h1>
      <div>
        <h3>Time : {format(time, "hh:mm:ss a")}</h3>
      </div>
      <input
        type="number"
        id="number"
        name="number"
        value={selectedNumber}
        onChange={(e) => setSelectedNumber(e.target.value)}
      />
      <h2>
        First {selectedNumber} fibonacci numbers are :{fibNums.join(", ")}
      </h2>
    </div>
  );
};

export default ExampleUseMemo1;
