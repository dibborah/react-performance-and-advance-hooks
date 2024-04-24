import ExtraComponent from "./ExtraComponent";
import InputForm from "./InputForm";
const BasicApp = () => {
  console.log("BasicApp Rendered");
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm />
      <ExtraComponent />
    </div>
  );
};

export default BasicApp;
