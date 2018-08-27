import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMorW, setName, setRegistrationNumber, setNameSeller } from '../actions/SetupeActions';

class Parties extends Component{
 constructor (props) {
    super(props);

    this.state = {
      chooseMorW: this.props.chooseMorW,
      name:this.props.name,
      registrationNumber:this.props.registrationNumber,
      address:'',
      nameSellers:this.props.nameSellers,
    };

  }
 
  handleChooseMorWChange = (radioGroup) => {
    this.setState({ chooseMorW: radioGroup });
    this.props.setMorW(radioGroup);
  }

    
  handleNameChange = (event) => {
    
    if (this.props.parties_type === 'Seller') {
      this.setState({nameSellers: event.target.value});
      this.props.setNameSeller(event.target.value)
    }
    else if (this.props.parties_type === 'Buyer'){
      this.props.setName(event.target.value)
      this.setState({name: event.target.value});
    }
  }

  ChangeRegistrationNumber = (event) => {
    this.setState({registrationNumber: event.target.value});
    this.props.setRegistrationNumber(event.target.value.replace(/\D/,''));   

  }

  ChangeAddress = (event) => {
     this.setState({address: event.target.value});
  }


  render () {
    const {chooseMorW, name, registrationNumber, address, parties_type }= this.props;

    return( 
      <div style = {{width:'48%', textAlign:'left'}}>    
        <p>{parties_type} </p>
        <RadioGroup onChange={ this.handleChooseMorWChange } value={ chooseMorW } horizontal style = {{width:'20%'}}>
          <RadioButton value="men">Чоловік</RadioButton>
          <RadioButton value="women">Жінка</RadioButton>
        </RadioGroup>
        <p>ПІБ</p>
        <input type="text" value={name} onChange={this.handleNameChange} />
        <p>РНОКПП</p>
        <input type="text"  value={registrationNumber} maxLength="10" onChange={this.ChangeRegistrationNumber}/>
        <p>зараєстрований за адресою </p>
        <input type="text" value={address} onChange={this.ChangeAddress}/>
      </div>
    )  
  }
}

Parties.propTypes = {
  setMorW:PropTypes.func.isRequired,
  setName:PropTypes.func.isRequired,
  setRegistrationNumber:PropTypes.func.isRequired,
  setNameSeller:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    ...state.parties
});
export default connect(mapStateToProps, {setMorW, setName, setRegistrationNumber, setNameSeller})(Parties)  