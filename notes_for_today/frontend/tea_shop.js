import configureStore from "./store/store.js";
import { receiveGreenTea, receiveTea } from "./actions/tea_actions.js";


document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome!");

    const store = configureStore();
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