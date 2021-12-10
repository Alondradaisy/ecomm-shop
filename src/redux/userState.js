import { logInUser } from "../ProductData";

// ACTIONS
export const LOG_IN_ACTION = "localhost:3020/LOG_IN";

// ACTION CREATORS
export const logInActionCreator =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log("logInActionCreator running");
    try {
      const user = await logInUser(email, password);
      dispatch({ type: LOG_IN_ACTION, payload: { user: user } });
    } catch (error) {
      console.log("error");
    }
  };

export const userReducer = (state = null, action) => {
  if (action.type === LOG_IN_ACTION) {
    const { payload } = action;

    return payload.user;
  }

  return state;
};
