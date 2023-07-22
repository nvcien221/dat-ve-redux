import { createStore, combineReducers } from "redux";
import DatVeReducer from "./dat-ve/dat-ve.reducer";


const rootReducer = combineReducers({
  DatVeReducer,
});

// redux store. tập trung tất cả state của ứng dụng.

export const store = createStore(
  rootReducer,
  // extension cho redux.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);