import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer=combineReducers({
    usersList:reducer
});

export default rootReducer;