import { createStore } from 'redux';
import rootReducer from "../reducers/root_reducer";


const configureStore = (preloadedState = {} ) => {
    //the first arg for createStore is an empty function, but there will be a reducer in there later, presumably.
    // there's a reducer there now!
    return createStore(rootReducer, preloadedState )
}

export default configureStore;