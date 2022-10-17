import { useEffect } from "react";
import { connect } from "react-redux";
import ThunckExample from "../components/ThunkExample";
import { getPosts } from "../modules/thunkModule";

function ThunkContainer({ post, loading, error, getPosts }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return <ThunckExample post={post} isLoading={loading} errorMsg={error} />;
}

export default connect(
  ({ thunkModule }) => ({
    post: thunkModule.data,
    loading: thunkModule.loading,
    error: thunkModule.error,
  }),
  { getPosts }
)(ThunkContainer);
