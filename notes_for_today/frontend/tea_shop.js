import configureStore from "./store/store.js";
import { receiveGreenTea, receiveTea } from "./actions/tea_actions.js";

import React from "react";
import ReactDOM from 'react-dom';

import Root from './components/root';

//stuff inside will only fire once the entire document is loaded to the webpage. Prevents scripts from running before the elements exist. 
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome!");

    //creates Redux store
    const store = configureStore();

    //grabs root element from index.html
    
    const root = document.getElementById("root")

    //renders root on webpage. store prop is equal to the store we created above.
    ReactDOM.render(<Root store={store}></Root>, root)

  
    window.store = store;
    window.receiveGreenTea = receiveGreenTea;
    window.receiveTea = receiveTea;
})

//this is supposed to be the entry file. Pretend there's a bundle.js somewhere. 


//window!! pretend this is the console. 

const britishBlend = { id: 2, flavor: "British Blend", amount: 5};
const taroMilk = { id: 3, flavor: "Taro Milk", amount: 4};
store.dispatch(receiveTea(britishBlend));
store.dispatch(receiveTea(taroMilk));
store.getState() // will return an obj with a key of 2 pointing to the britishBlend tea object, and a key of 3 pointing to the taroMilk object. 

//endWindow