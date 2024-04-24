import ExtraComponent from "./ExtraComponent";
import InputForm from "./InputForm";
import { useState } from "react";
const BasicApp = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm username={username} setUsername={setUsername} />
      <button onClick={() => setUsername("")}>Clear</button>
      <ExtraComponent />
    </div>
  );
};

export default BasicApp;
