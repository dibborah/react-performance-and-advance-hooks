import { useState } from "react";

const InputForm = ({ children }) => {
  const [username, setUsername] = useState("");
  console.log("InputForm Rendered");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
      />

    {
      //### Children props never re-renders even if its home component or parent component is rendered where it is in!!!
    }
      {children}
      <div>
        <button
          onClick={(e) => {
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
