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

                firstName: "Piroska",
                lastName: "Farkasi",
                age: 18,
                favFood:"Lasagne"
        }
    }

    nameChanger = event => {
        //  const newName={...this.state.person};
        //  newName.firstName=event.target.value;
        //      this.setState({
        //      [event.target.name]: event.target.value,
        //  })
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value,
        });

    }

    submitCatcher = event => {
        // event.preventDefault();
        // alert ("We are submitting");
        // const emptyData={...this.state};
        // emptyData.firstName=" ";
        // emptyData.lastName=" ";
        // emptyData.age=" ";
        // emptyData.favFood=" ";
        // this.setState({
        //     firstName: emptyData,
        //     lastName: emptyData,
        //     age: emptyData,
        //     favFood: emptyData
        // })
        event.preventDefault();
        alert('We are submitting!');
        this.setState({
          firstName: '',
          lastName: '',
          age: '',
          favFood: '',
        });
    }


    render(){
        return(
            <div className="container">
                <div className="form-input">
                <h1>Form</h1>
                    <form onSubmit={this.submitCatcher}>

                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" name="firstName" className="text" onChange={this.nameChanger} value={this.state.firstName} /><br/>
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" className="text" onChange={this.nameChanger} value={this.state.lastName} /><br/>
                        <label htmlFor="age">Age: </label>
                        <input type="text" name="age" className="text" onChange={this.nameChanger} value={this.state.age} /><br/>
                        <label htmlFor="favFood">Favourite food: </label>
                        <input type="text" name="favFood" className="text" onChange={this.nameChanger} value={this.state.favFood} /><br/>

                        <input type="submit"/>
                    </form>
                </div>
                <div className="form-output">
                    <h1>Output</h1>
                    <p>
                        <strong>First name:</strong> {this.state.firstName}
                    </p>
                    <p>
                        <strong>Last name:</strong> {this.state.lastName}
                    </p>
                    <p>
                        <strong>Age:</strong> {this.state.age}
                    </p>
                    <p>
                        <strong>Favourite Food:</strong> {this.state.favFood}
                    </p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));

export default Form;
