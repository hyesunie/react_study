import App from "./App";
import { root } from "./index";

const MyReact = {
  stateList: [],
  currentIdx: 0,
  useState: function (initValue) {
    if (this.currentIdx === this.stateList.length) {
      const state = {
        value: initValue,
        setState(newValue) {
          state.value = newValue;
          MyReact.currentIdx = 0;
          root.render(<App />);
        },
      };

      this.stateList.push(state);
    }

    const currentState = this.stateList[this.currentIdx];
    this.currentIdx++;

    return [currentState.value, currentState.setState];
  },
};

export default MyReact;
