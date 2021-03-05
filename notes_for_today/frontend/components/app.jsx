import React from "react";
import TeaIndexContainer from "./tea_index_container";
//we import the container, not the presentational element, bc the container actaully knows what's going on with the state and it also has the presentational componant inside of it anyway. 
const App = () => {
    return (
        <div>
            <TeaIndexContainer/>
        </div>
    )
}

export default App;