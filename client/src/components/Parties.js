import React, { Component } from 'react';
import {Row, Label, Placeholder, Input} from '../styleComponents/styleComponents';

class Parties extends Component{
  render () {
    const {name,address, handleChangeInput, registrationNumber, handlerOnBlur}= this.props;

    return(
      <Row>
        <Label>{this.props.NameParties}</Label>
        <Label size="60%">
            <Placeholder>ПІБ</Placeholder>
              <Input
                type="text"
                name="name"
                onChange={handleChangeInput}
                onBlur={handlerOnBlur}
                value={name}
              />
        </Label>
        <Label size="30%">
            <Placeholder>РНОКПП</Placeholder>
            <Input
                maxLength="10"
                name='registrationNumber'
                value={registrationNumber}
                onChange={handleChangeInput}
                onBlur={handlerOnBlur}
            />
        </Label>
        <Label>
            <Placeholder>Зараєстрований за адресою</Placeholder>
            <Input
                name='address'
                value={address}
                onChange={handleChangeInput}
                onBlur={handlerOnBlur}
            />
        </Label>
      </Row>
    )
  }
}

export default (Parties)