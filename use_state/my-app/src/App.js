// import { useState } from "react";
import MyReact from "./MyReact";
import "./App.css";

function App() {
  const [count1, setCount1] = MyReact.useState(0);
  const [count2, setCount2] = MyReact.useState(0);

  return (
    <div className="App" id="app">
      <div className="counter">
        <h4>1번</h4>
        <h2>{count1}</h2>
        <button onClick={() => setCount1(count1 + 1)}>PLUS</button>
      </div>
      <div className="counter">
        <h4>2번</h4>
        <h2>{count2}</h2>
        <button onClick={() => setCount2(count2 + 1)}>PLUS</button>
      </div>
    </div>
  );
}

export default App;
