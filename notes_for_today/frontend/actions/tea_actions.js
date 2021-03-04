export const RECEIVE_TEA = "RECEIVE_TEA";

// actions are just POJO's that have a key of "type";


//this one is a static action, it only does 1 thing. 
export const receiveGreenTea = {
    // type name is ALL CAPS bc convention.
    type: "RECEIVE_TEA",
    tea: {
        id: 1,
        flavor: "green",
        amount: 2.5,
    }
}

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ //

//this is an action creator. Much more dynamic and DRY, probably.

// the tea argument is a POJO
export const receiveTea = (tea) => {
    return {
        type: RECEIVE_TEA,
        // tea: tea can be rewritten as just tea.
        tea,
    }
}