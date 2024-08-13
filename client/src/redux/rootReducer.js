import { combineReducers } from "@reduxjs/toolkit";
import usersSlicer from "../redux/test/slicer";
const rootReducer = combineReducers({
  users: usersSlicer,
});
export default rootReducer;
