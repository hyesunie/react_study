function ThunckExample({ post, isLoading, errorMsg }) {
  return (
    <>
      <section>
        <h2>ThunckExample</h2>
        {isLoading && "loading 중"}
        {!isLoading && !errorMsg && post && (
          <>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </>
        )}
      </section>
      <br />
      <hr />
    </>
  );
}

export default ThunckExample;
