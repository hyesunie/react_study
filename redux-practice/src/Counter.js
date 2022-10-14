function Counter({ number, onIncrease, onDecrease }) {
  return (
    <section>
      <div>{number}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </section>
  );
}

export default Counter;
