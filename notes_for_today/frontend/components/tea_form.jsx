import React from 'react';
//always import React.

class TeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //generates (semi)random ID number
            id: Math.floor(Math.random() * 100000),
            flavor: "",
            amount: "",

        }

        //don't forget to bind your functions if you ever want to use them!!

        this.updateAmount = this.updateAmount.bind(this);
        this.updateFlavor = this.updateFlavor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//The state you are setting in those update methods is the (React) state of the Form component, not the (Redux) application state that we know as store. -- Thank you to Brad for this comment
    updateFlavor(e) {
        this.setState( {
            flavor: e.target.value,
        });
    }

    updateAmount(e) {
        this.setState( {
            amount: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTea(this.state);
        //reset the state so user can enter another tea.
        this.setState(
            {
                id: Math.floor(Math.random() * 100000),
                flavor: "",
                amount: "",
            }
        );
    }
// the onChange in the inputs is to save the values to the internal state of the component. When we eventually submit the form to the database, we will be submitting straight from the state. 
    render() {
        //i think this form onSubmit part is right, he moved away too fast so i couldn't doublecheck.
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Tea</h1>
                <label>Flavor:
                    <input type="text" value={this.state.flavor} onChange={this.updateFlavor}/>
                </label>
                <label>Amount:
                    <input type="text" value={this.state.amount} onChange={this.updateAmount}/>
                </label>

                <input type="submit" value="Add Tea"/>
            </form>
        )
    }
}

export default TeaForm;