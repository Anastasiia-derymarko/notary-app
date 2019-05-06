import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Parties extends Component{

  render () {
    const {chooseMorW, name,address, handleChangeInput, registrationNumber }= this.props;

      const chooseMorWRadioGroup = <RadioGroup name='chooseMorW' onChange={ handleChangeInput } value={ chooseMorW } className = "chooseMorW">
          <RadioButton value="0" padding={5}>Він</RadioButton>
          <RadioButton value="1" padding={5}>Вона</RadioButton>
      </RadioGroup>;

      const check = chooseMorW !== 'false' ? chooseMorWRadioGroup : "";

    return(
      <div className = "parties">
        <p>{this.props.NameParties}</p>
          {check}
          <div className="container">
        <label className="nameParties">ПІБ
          <input
            type="text"
            name='name'
            value={name}
            onChange={handleChangeInput}
          />
        </label>
        <label className = "NumberParties">РНОКПП
        <input
          maxLength="10"
          name='registrationNumber'
          value={registrationNumber}
          onChange={handleChangeInput}
         />
        </label>
        </div>
        <label className="addressParties">Зараєстрований за адресою
        <input
          name='address'
          value={address}
          onChange={handleChangeInput}
        />
        </label>
      </div>
    )
  }
}

export default (Parties)  