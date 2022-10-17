import { useEffect } from "react";
import { connect } from "react-redux";
import api from "../api";
import NotUseLibrary from "../components/NotUseLibrary";
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
} from "../modules/notUseLibraryModule";

function NotUseLibraryContainer({
  userList,
  error,
  loading,
  getUsers,
  getUsersSuccess,
  getUsersFailure,
}) {
  useEffect(() => {
    async function loadUsers() {
      getUsers();
      try {
        const response = await api.getUsers();
        if (response.ok) {
          const data = await response.json();
          getUsersSuccess(data);
        }
      } catch (e) {
        getUsersFailure(e);
      }
    }

    loadUsers();
  }, [getUsers, getUsersSuccess, getUsersFailure]);

  return (
    <NotUseLibrary userList={userList} isLoading={loading} errorMsg={error} />
  );
}

const mapStateProps = (state) => ({
  userList: state.sample.data.user,
  loading: state.sample.loading.GET_USERS,
  error: state.sample.error.user,
});

const mapDispatchProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  getUsersSuccess: (payload) => dispatch(getUsersSuccess(payload)),
  getUsersFailure: (error) => dispatch(getUsersFailure(error)),
});

export default connect(mapStateProps, mapDispatchProps)(NotUseLibraryContainer);
