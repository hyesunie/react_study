import React, { useRef, useState } from "react";
import Effect from "./Effect";

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const onRemove = (value) => {
    console.log(value);
    setList(list.filter((e) => e !== value));
  };

  return <Effect list={list} onRemove={onRemove} />;
}

export default App;
