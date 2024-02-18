import {createStore, compose, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";
import {playerEvents} from "../bridge/events";

const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
playerEvents(store.dispatch, store.getState);

export default store;