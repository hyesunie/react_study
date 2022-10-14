import { ColorConsumer } from "./ColorContext";

function ChangeButton({ onChangeColor }) {
  return (
    <ColorConsumer>
      {(value) => (
        <button
          style={{
            backgroundColor: value.state.backgroundColor,
            color: value.state.color,
          }}
          onClick={() => {
            if (value.state.backgroundColor === "black") {
              value.actions.setBackColor("red");
              value.actions.setColor("blue");
            } else {
              value.actions.setBackColor("black");
              value.actions.setColor("white");
            }
          }}
        >
          {value.state.backgroundColor === "black" ? "빨간색" : "검정색"}
        </button>
      )}
    </ColorConsumer>
  );
}

export default ChangeButton;
