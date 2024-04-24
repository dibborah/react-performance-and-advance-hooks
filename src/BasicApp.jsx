import ExtraComponent from "./ExtraComponent";
import InputForm from "./InputForm";
const BasicApp = () => {
  console.log("BasicApp Rendered");

  // Children props render nhi hote unke parent component ke state change hone ke baat v render nhi hote
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm>
      <ExtraComponent/>
      </InputForm>
    </div>
  );
};

export default BasicApp;
