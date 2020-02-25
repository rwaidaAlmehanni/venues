
import {combineReducers} from "redux";
import venues from "./reducers/venues";

export default combineReducers({
  venue: venues,
});
