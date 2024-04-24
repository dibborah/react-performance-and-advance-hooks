const InputForm = ({ username, setUsername }) => {
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
    </form>
  );
};

export default InputForm;
