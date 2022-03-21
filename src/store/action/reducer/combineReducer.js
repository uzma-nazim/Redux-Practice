import { combineReducers } from "redux";
import { Login_reducer } from "./loginreducer";
import { ReducerCounter } from "./reducerr";

const combineReducer = combineReducers(
    {
        ReducerCounter :ReducerCounter,
        Login_reducer :Login_reducer
        
    }
)
export default combineReducer
