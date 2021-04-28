import "./App.css";

import Header from "./components/Header";
import SwitchLine from "./components/SwitchLine";
import Result from "./components/Result";

import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const result = switch1 && switch2 && switch3;

  return (
    <>
      <Header />
      <div className="container">
        <div className="frame">
          <SwitchLine sw={switch1} setSwitch={setSwitch1} />
          <SwitchLine sw={switch2} setSwitch={setSwitch2} />
          <SwitchLine sw={switch3} setSwitch={setSwitch3} />
        </div>
        <div className="frame">
          <Result result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
