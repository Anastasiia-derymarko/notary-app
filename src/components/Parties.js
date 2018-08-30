import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Parties extends Component{
  render () {
    const {chooseMorW, handleChooseMorWChange, name, 
      address, handleNameChange, ChangeRegistrationNumber, 
      registrationNumber, ChangeAddress }= this.props;

    return( 
      <div style = {{width:'48%', textAlign:'left'}}>    
        <p></p>
        <RadioGroup onChange={ handleChooseMorWChange } value={ chooseMorW } horizontal style = {{width:'20%'}}>
          <RadioButton value="0">Чоловік</RadioButton>
          <RadioButton value="1">Жінка</RadioButton>
        </RadioGroup>
        <p>ПІБ</p>
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange} 
        />
        <p>РНОКПП</p>
        <input 
          type="text"
          maxLength="10" 
          value={registrationNumber}       
          onChange={ChangeRegistrationNumber}
        />
        <p>зараєстрований за адресою </p>
        <input 
          type="text" 
          value={address} 
          onChange={ChangeAddress}/>
      </div>
    )  
  }
}

export default (Parties)  