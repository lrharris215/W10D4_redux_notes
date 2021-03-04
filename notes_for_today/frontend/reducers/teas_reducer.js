import { RECEIVE_TEA } from "../actions/tea_actions"

const teasReducer = (state = {}, teaAction) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state)

    switch (teaAction.type) {
        //importing it as a variable instead of just writing the string makes it return an error if there's a typo.
        case RECEIVE_TEA:
            //this will add the tea object to the state at the key of tea.id
            nextState[teaAction.tea.id] = teaAction.tea;
            return nextState;

        default: 
        //if we hit default, no changes were made to state, so we can just return the original state.
         return state;
    }
}   