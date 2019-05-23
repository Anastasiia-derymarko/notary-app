import React, { Component } from 'react';
import {Row, Label, Placeholder, Input} from '../components/styleComponents';

class Parties extends Component{

  render () {
    const {name,address, handleChangeInput, registrationNumber }= this.props;

      // const chooseMorWRadioGroup = <RadioGroup name='chooseMorW' onChange={ handleChangeInput } value={ chooseMorW } className = "chooseMorW">
      //     <RadioButton value="0" padding={5}>Він</RadioButton>
      //     <RadioButton value="1" padding={5}>Вона</RadioButton>
      // </RadioGroup>;

    return(
      <Row>
        <Label>{this.props.NameParties}</Label>
        <Label size="60%">
            <Placeholder>ПІБ</Placeholder>
              <Input
                type="text"
                name='name'
                value={name}
                onChange={handleChangeInput}
              />
        </Label>
        <Label size="30%">
            <Placeholder>РНОКПП</Placeholder>
            <Input
              maxLength="10"
              name='registrationNumber'
              value={registrationNumber}
              onChange={handleChangeInput}
             />
        </Label>
        <Label>
            <Placeholder>Зараєстрований за адресою</Placeholder>
            <Input
              name='address'
              value={address}
              onChange={handleChangeInput}
            />
        </Label>
      </Row>
    )
  }
}

export default (Parties)