import { combineReducers } from "redux";
import teasReducer from "./teas_reducer";


// hope i got everything they move pretty fast.
const rootReducer = combineReducers( {
    // each top level key will point to a different slice of state or something Dane's covering half the screen. 
    teas: teasReducer, 
    // otherEntity: otherEntityReducer,
})

export default rootReducer;

