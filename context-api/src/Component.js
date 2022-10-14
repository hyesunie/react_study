import React, { useContext } from "react";
import ColorContext from "./ColorContext";

function Component() {
  const { state } = useContext(ColorContext);

  return (
    <div
      style={{
        backgroundColor: state.backgroundColor,
        color: state.color,
      }}
    >
      안녕하쎄여
    </div>
  );
}

export default Component;
