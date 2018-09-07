import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Parties extends Component{
  render () {
    const {chooseMorW, handleChooseMorWChange, name, 
      address, handleNameChange, ChangeRegistrationNumber, 
      registrationNumber, ChangeAddress }= this.props;

    return( 
      <div className = "parties">    
        <p>{this.props.NameParties}</p>
        <RadioGroup onChange={ handleChooseMorWChange } value={ chooseMorW } className = "chooseMorW">
          <RadioButton value="0" padding={5}>Він</RadioButton>
          <RadioButton value="1" padding={5}>Вона</RadioButton>
        </RadioGroup>
        <div className="container">
        <label className="nameParties">ПІБ
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            
          />
        </label>
        <label className = "NumberParties">РНОКПП
        <input 
          type="text"
          maxLength="10" 
          value={registrationNumber}       
          onChange={ChangeRegistrationNumber}
         />
        </label>
        </div>
        <label className="addressParties">Зараєстрований за адресою 
        <input 
          type="text" 
          value={address} 
          onChange={ChangeAddress}
        />
        </label> 
      </div>
    )  
  }
}

export default (Parties)  