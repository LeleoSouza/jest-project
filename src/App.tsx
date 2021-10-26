import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [btnState, setBtnState] = useState(false);
  const textColor = btnColor === "red" ? "blue" : "red";

  const setColor = () => {
    btnColor === "red" ? setBtnColor("blue") : setBtnColor("red");
  };
  const setDisable = () => {
    setBtnState(!btnState);
  };

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: btnState ? "gray" : btnColor, color: "white" }}
        onClick={() => setColor()}
        disabled={btnState}
      >
        Change to {textColor}
      </button>
      <input type='checkbox' id='enable-disable-checkbox' onClick={() => setDisable()} />
      <label htmlFor='enable-disable-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
