import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMorW, setName } from '../actions/SetupeActions';

class Parties extends Component{
 constructor (props) {
    super(props);

    this.state = {
      chooseMorW: this.props.chooseMorW,
      name:this.props.name,
      registrationNumber:'',
      address:'',
    };

  }
  
  handleChooseMorWChange = (radioGroup) => {
    this.setState({ chooseMorW: radioGroup });
    this.props.setMorW(radioGroup);
 
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
    this.props.setName(event.target.value);
    console.log(event);
  }

 
  ChangeRegistrationNumber = (event) => {
    this.setState({registrationNumber: event.target.value.replace(/\D/,'')});
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
    const {chooseMorW, name, registrationNumber, address }= this.props;

    return( 

      <div style = {{width:'48%', textAlign:'left'}}>
      <RadioGroup onChange={ this.handleChooseMorWChange } value={ chooseMorW } horizontal>
        <RadioButton value="men">Чоловік</RadioButton>
        <RadioButton value="women">Жінка</RadioButton>
      </RadioGroup>
      <p>ПІБ {this.props.foo} </p>
      
      <input type="text" value={name} onChange={this.handleNameChange} />
      <p>РНОКПП</p>
      <input type="text"  value={registrationNumber} onChange={this.ChangeRegistrationNumber} maxLength={10} pattern="[0-9]*"/>
      <p>зараєстрований за адресою </p>
      <input type="text" value={address} onChange={this.ChangeAddress}/>

      <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </div>
    )  
  }
}

Parties.propTypes = {
  setMorW:PropTypes.func.isRequired,
  chooseMorW:PropTypes.string.isRequired,
  setName:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired

}

const mapStateToProps = state => ({
    ...state.parties
});
export default connect(mapStateToProps, {setMorW, setName})(Parties)  