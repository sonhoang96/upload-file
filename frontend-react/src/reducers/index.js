import { combineReducers } from 'redux';
import ItemReducer from "./ItemReducer.js";
export default combineReducers({
    items: ItemReducer
});