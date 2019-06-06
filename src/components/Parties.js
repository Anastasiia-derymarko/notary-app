import React, { Component } from 'react';
import {Row, Label, Placeholder, Input} from '../styleComponents/styleComponents';

class Parties extends Component{

  render () {
    const {name,address, handleChangeInput, registrationNumber, party }= this.props;

    return(
      <Row>
        <Label>{this.props.NameParties}</Label>
        <Label size="60%">
            <Placeholder>ПІБ</Placeholder>
              <Input
                type="text"
                name={'name'+party}
                onChange={handleChangeInput}
                value={name}
              />
        </Label>
        <Label size="30%">
            <Placeholder>РНОКПП</Placeholder>
            <Input
              maxLength="10"
              name={'registrationNumber'+party}
              value={registrationNumber}
              onChange={handleChangeInput}
             />
        </Label>
        <Label>
            <Placeholder>Зараєстрований за адресою</Placeholder>
            <Input
              name={'address'+party}
              value={address}
              onChange={handleChangeInput}
            />
        </Label>
      </Row>
    )
  }
}

export default (Parties)