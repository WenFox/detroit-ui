import {combineReducers} from "redux";
import {forms} from "./forms";
import {dialogs} from "./dialogs";

const rootReducer = combineReducers({
    forms,
    dialogs
});

export default rootReducer;