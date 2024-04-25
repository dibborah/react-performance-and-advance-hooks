import { useMemo, useState } from "react";
import DisplayFruits from "./DisplayFruits";

const ExampleUseMemo2 = () => {
  const [username, setUsername] = useState("");

  // #Note: Humme REFERENCE type ke case main useMemo() use karna padega
  const fruits = useMemo(() => {
    return [// array ka reference store hota hain // array ki address store hoti hain
    // component re-render pe naya array banega aur uski nayi address store hogi
      { name: "Apple", emoji: "🍎" },
      { name: "Grapes", emoji: "🍇" },
      { name: "mango", emoji: "🥭" },
    ];
  }, []);

// const fruits =  "mango";

// Number, string, boolean, null, undefined, symbol, BigInt 
// objects and function

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <DisplayFruits fruits={fruits} />
    </div>
  );
};

export default ExampleUseMemo2;
