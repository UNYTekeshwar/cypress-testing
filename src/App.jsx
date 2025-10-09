import React, { useState } from "react";
import RouteList from "../src/Routes/RouteList.jsx";


function App() {
  const [inputValue, setInputValue] = useState("");
  const options = ["Option A", "Option B", "Option C"];
  const [selected, setSelected] = useState(null);
  const handleClick = () => {
    alert("Button clicked!ss");
  };
  return (
    <div className="App">
      <RouteList/>
    {/* <UnyForm /> */}
    </div>
  );
}

export default App;
