import Card from "./Card";
import { useState } from "react";

const Demo = ({children}) => {
  console.log("Demo Rendered");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <div style={{ backgroundColor: "#efefef", padding:"2rem" }}>
      <label htmlFor="state1">State1</label>
      <input
        type="checkbox"
        id="state1"
        name="state1"
        checked={state1}
        onChange={() => setState1(!state1)}
      />
      <label htmlFor="state2">State2</label>
      <input
        type="checkbox"
        id="state2"
        name="state2"
        checked={state2}
        onChange={() => setState2(!state2)}
      />

      <Card state1={state1}/>
      {
        // Yaha pe card decision le rahi hain ki 
        // isko render karna hain ki nhi karna'
        // Purane props kiya the
        // naye props kya hain
        // kuch change to nhi hain
        // Ye decisions and computation karne main react time leti hain 
        // Isiliye ye react ka by default behaviour nhi hain (memoization)
      }
      {children}
    </div>
  );
};

export default Demo;
