import { connect } from 'react-redux';
import { receiveTea } from '../actions/tea_actions';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions'

//purpose of container is to mapStateToProps and connect the objects in state to the react components via props and maybe actions if they exist. ' 
const mapStateToProps = (state) => {
    //selector function
    const selectTeasByFlavor = (teas, flavor) =>{
        const teasArray = Object.values(teas);
        return teasArray.filter((tea) => {
            return tea.flavor === flavor;
        })
    }
    return {
        //have to extract tea values from the Tea slice of state, which is an object, with keys pointing to the individual Tea objects. 
        teas: Object.values(state.teas),
        //extracts only green teas from the Tea slice of state, using the function defined above, and saves it to the greenTeas key. This gets passed down inside props. 
        greenTeas: selectTeasByFlavor(state.teas, "green")
    }
} 
// dispatch === store.dispatch 
const mapDispatchToProps = (dispatch) => {
    return {
        //the key receiveTea points to a function, that takes in a tea object as an argument. That function returns the dispatched version of receiveTea action, taking in the tea object arg.
        //this receiveTea is the one called on in handleSubmit in the teaIndex file, not the original action. THis is why we map dispatches. Names don't have to be the same, but they should be so you know wtf you're doing.  
        //connect is going to connect this to the store. *Connect Magic!*
        receiveTea: (tea) => {
            return dispatch(receiveTea(tea))
        }
    }
}


// connect takes in 2 callbacks as args. 
//the function returned from connect(cb1, cb2) takes in a presentational component. In this case, the function returned will accept Tea Index as the argument. 
// export default connect(callback2, callback2)(presentational_component)


// the first callback is mapStateToProps, the second one would be mapDispatchToProps (optional).
//connect will invoke mapStateToProps for you, no need to pass in the state yourself. *REACT MAGIC*
//same for mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex)