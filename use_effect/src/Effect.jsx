import React, { useEffect } from "react";

function Unit({ value, onRemove }) {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => onRemove(value)}>삭제</button>
    </div>
  );
}

function Effect({ list, onRemove }) {
  return (
    <div>
      {list.map((value) => {
        return <Unit value={value} onRemove={onRemove} key={value} />;
      })}
    </div>
  );
}

export default Effect;
