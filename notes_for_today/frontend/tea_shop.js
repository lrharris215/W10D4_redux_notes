import configureStore from "./store/store.js"
import { receiveGreenTea } from "./actions/tea_actions.js"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome!");

    const store = configureStore();
    window.store = store;
    window.receiveGreenTea = receiveGreenTea;
})

//this is supposed to be the entry file. Pretend there's a bundle.js somewhere. 