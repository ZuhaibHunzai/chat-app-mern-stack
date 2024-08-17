import { combineReducers } from "@reduxjs/toolkit";
import inboxSlicer from "../redux/inbox/slicer";
const rootReducer = combineReducers({
  users: inboxSlicer,
});
export default rootReducer;
