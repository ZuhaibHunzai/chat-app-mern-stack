import { combineReducers } from "@reduxjs/toolkit";
import inboxSlicer from "../redux/inbox/slicer";
import sendMessageSlicer from "../redux/sendMessage/sendMessage.slicer";
const rootReducer = combineReducers({
  users: inboxSlicer,
  sendMessage: sendMessageSlicer,
});
export default rootReducer;
