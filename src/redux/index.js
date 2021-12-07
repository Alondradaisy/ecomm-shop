import { StarRateOutlined } from "@material-ui/icons";
import { Store } from "@mui/icons-material";
import { createStore } from "redux";

const ADD_TO_BAG_ACTION = "shoprutina.com/ADD_TO_BAG";
export const addToBagActionCreator = (addToBag) => {
  return {
    type: ADD_TO_BAG_ACTION,
    payload: { addToBag },
  };
};

const shoppingBagReducer = (state, action) => {
  if (action.type === ADD_TO_BAG_ACTION) {
    const { payload } = action;
    return;
  }
  return state;
};

const initialState = { shoppingBag: [] };

const store = createStore(
  shoppingBagReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
