import { useState } from "react";
import ChangeButton from "./ChangeButton";
import ColorContext, { ColorProvider } from "./ColorContext";
import Component from "./Component";

export default function App() {
  const [colorState, setColorState] = useState({
    backgroundColor: "black",
    color: "white",
  });

  const onChangeColor = (newColorState) => {
    setColorState((prevColorState) => {
      return {
        ...prevColorState,
        backgroundColor: newColorState.backgroundColor,
        color: newColorState.color,
      };
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ColorProvider>
        <Component />
        <div>hello</div>
        <ChangeButton onChangeColor={onChangeColor} />
      </ColorProvider>
    </div>
  );
}
