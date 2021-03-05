import React from 'react';
import TeaForm from './tea_form'

const TeaIndex = (props) => {
    return (
        <div>
            <h1>All Teas</h1>
            <ul>
                {
                    //iterates over the teas prop, which is apparently an array of objects. Will be converting the teas slice of state from an object later i guess.
                    props.teas.map((tea) => {
                        return <li key ={tea.id}>Flavor: {tea.flavor}</li>
                    })
                }
            </ul>
            <TeaForm />
        </div>
    )
        
}

export default TeaIndex;