import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  return <Counter number={number} increase={increase} decrease={decrease} />;
}

const mapStateProp = (state) => {
  return {
    number: state.counter.number,
  };
};

const mapDispatchProp = (dispatch) => {
  return {
    // increase: () => dispatch(increase()),
    // decrease: () => dispatch(decrease()),
    //TODO: saga
    increase: () => dispatch(increaseAsync()),
    decrease: () => dispatch(decreaseAsync()),
  };
};

export default connect(mapStateProp, mapDispatchProp)(CounterContainer);
