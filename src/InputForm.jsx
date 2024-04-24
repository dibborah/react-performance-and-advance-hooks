import { useState } from "react";

const InputForm = () => {
  const [username, setUsername] = useState("");
  console.log("InputForm Rendered");
  return (
    <form>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default InputForm;
