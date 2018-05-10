import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Parties extends Component{
 constructor (props) {
    super(props);

    this.state = {
      chooseMorW: null,
      name:'',
      registrationNumber:'',
      address:'',
    };

  }
  
  handleChooseMorWChange = (radioGroup) => {
    this.setState({ chooseMorW: radioGroup });
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

 
  ChangeRegistrationNumber = (event) => {
    this.setState({registrationNumber: event.target.value});
  }

  ChangeAddress = (event) => {
     this.setState({address: event.target.value});
  }

  handleSubmit = () => {
    console.log('name: '+this.state.name);
    console.log('registrationNumber: '+this.state.registrationNumber);
    console.log('address: '+this.state.address);

  }

  render () {
    const {chooseMorW, name, registrationNumber, address }= this.state;

    return( 

      <div style = {{width:'48%', textAlign:'left'}}>
      <RadioGroup onChange={ this.handleChooseMorWChange } value={ chooseMorW } horizontal>
        <RadioButton value="man">Чоловік</RadioButton>
        <RadioButton value="women">Жінка</RadioButton>
      </RadioGroup>
      <p>ПІБ </p>
      
      <input type="text" value={name} onChange={this.handleNameChange} />
      <p>РНОКПП</p>
      <input type="text"  value={registrationNumber} onChange={this.ChangeRegistrationNumber}/>
      <p>зараєстрований за адресою </p>
      <input type="text" value={address} onChange={this.ChangeAddress}/>

      <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </div>
    )  
  }
}

export default Parties  