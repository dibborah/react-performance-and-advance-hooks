import Demo from "./Demo";
import Extra from "./Extra";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>React Memo Demo</h1>
      <Demo>
        <Extra />
      </Demo>
    </div>
  );
};

export default App;
