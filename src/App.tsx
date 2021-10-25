import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const textBtn = btnColor === "red" ? "blue" : "red";
  return (
    <div className='App'>
      <button style={{ backgroundColor: btnColor }} onClick={() => setBtnColor(textBtn)}>
        Change to {textBtn}
      </button>
    </div>
  );
}

export default App;
