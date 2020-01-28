import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

// Egy darab Form komponensből álljon.
// A komponens rendereljen ki egy .container divet, benne két testvér divvel: .form-input és .form-output.
// A .form-input-ban legyen egy form, egy text input mezővel, ami a "Name" labelt viseli.
// A végeredmény nézzen ki így:

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            person: {
                name: "Piroska",
                age: 18,
                favFood:"Lasagne"
            },
            person2: {
                name: "Béla"
            }
        }
    }

    nameChanger = event => {
        const newName={...this.state.person};
        newName.name=event.target.value;
        this.setState({
            person: newName,
        })
    }

    submitCatcher = event => {
        event.preventDefault();
        alert ("We are submitting");
        const emptyName={...this.state.person};
        emptyName.name="";
        this.setState({
            person: emptyName,
        })
    }


    render(){
        return(
            <div className="container">
                <div className="form-input">
                <h1>Form</h1>
                    <form onSubmit={this.submitCatcher}>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" name="Name" className="text" onChange={this.nameChanger} value={this.state.person.name} />
                        <input type="submit"/>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>Name: {this.state.person.name}</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));

export default Form;
