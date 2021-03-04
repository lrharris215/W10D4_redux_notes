import { RECEIVE_TEA } from "../actions/tea_actions"

//to actually add shit to the state, we call store.dispatch(action), which will pass the state and action to the reducers.

const teasReducer = (state = {}, teaAction) => {
    // the freeze might be overkill, but it ensures that we absolutely do NOT accidentally modify the state in any way. 
    Object.freeze(state);

    //Object.assign takes in a target, and then as many change args as you want. In this case, we are modifying the empty object {} with the data inside state; 
    const nextState = Object.assign({}, state)

    switch (teaAction.type) {
        //importing it as a variable instead of just writing the string makes it return an error if there's a typo.
        case RECEIVE_TEA:
            //this will add the tea object to the state at the key of tea.id 
            // state = {tea.id : tea_object}
            nextState[teaAction.tea.id] = teaAction.tea;
            return nextState;

        default: 
        //if we hit default, no changes were made to state, so we can just return the original state.
         return state;
    }
}   

export default teasReducer;