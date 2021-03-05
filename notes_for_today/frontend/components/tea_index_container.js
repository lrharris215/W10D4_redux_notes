import { connect } from 'react-redux';
import TeaIndex from './tea_index';

//purpose of container is to mapStateToProps and connect the objects in state to the react components via props and maybe actions if they exist. ' 
const mapStateToProps = (state) => {
    return {
        //have to extract tea values from the Tea slice of state, which is an object, with keys pointing to the individual Tea objects. 
        teas: Object.values(state.teas),

    }
} 



// connect takes in 2 callbacks as args. 
//the function returned from connect(cb1, cb2) takes in a presentational component. In this case, the function returned will accept Tea Index as the argument. 
// export default connect(callback2, callback2)(presentational_component)


// the first callback is mapStateToProps, the second one would be mapDispatchToProps (optional).
//connect will invoke mapStateToProps for you, no need to pass in the state yourself. *REACT MAGIC*

export default connect(mapStateToProps)(TeaIndex)