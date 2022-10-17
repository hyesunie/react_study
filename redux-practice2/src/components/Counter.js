function Counter({ number, increase, decrease }) {
  return (
    <>
      <section>
        <h1>{number}</h1>
        <button onClick={() => increase()}>+1</button>
        <button onClick={() => decrease()}>-1</button>
      </section>
      <br />
      <hr />
    </>
  );
}

export default Counter;
