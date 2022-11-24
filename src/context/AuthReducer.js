const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "SAVE_NEW_ACCESS_TOKEN":
      console.log({
        state: state,
        user: state.user,
        action: action.payload,
      });
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.payload,
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
