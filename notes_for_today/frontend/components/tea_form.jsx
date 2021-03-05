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
    }

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

    render() {
        return (
            <form>
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