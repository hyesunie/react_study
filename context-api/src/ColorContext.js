import { createContext, useState } from "react";

const initState = {
  state: { backgroundColor: "black", color: "white" },
  action: {
    setBackColor: () => {},
    setColor: () => {},
  },
};

const ColorContext = createContext(initState);

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [backgroundColor, setBackColor] = useState("white");

  const value = {
    state: { backgroundColor, color },
    actions: { setBackColor, setColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorConsumer, ColorProvider };

export default ColorContext;
