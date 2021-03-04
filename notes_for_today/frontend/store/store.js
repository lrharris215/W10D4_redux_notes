import { createStore } from 'redux';
import teasReducer from '../reducers/teas_reducer'

const configureStore = (preloadedState = {} ) => {
    //the first arg for createStore is an empty function, but there will be a reducer in there later, presumably.
    return createStore(teasReducer, preloadedState )
}

export default configureStore;