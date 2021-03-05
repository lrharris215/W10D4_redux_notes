import React from 'react';
import { Provider } from 'react-redux';
import App from './app'

//We wrote store instead of props here as the arg, bc that's what we want to pass down, but writing props is also fine bc the store is a prop. Can't hurt to be specific I guess? Would have to do props.store the other way. 
const Root = ({ store }) => {
    //remember that components can only return 1 thing, but that thing can contain multitudes. Provider needs to be the outer thing, because it has the store as a prop.
    return (
       <Provider store={store}>
           <App />
       </Provider>
    )
}

export default Root;

//writing a lot of this code before the base code exists yet. Just have faith that App will exist by the time the lectures over. 