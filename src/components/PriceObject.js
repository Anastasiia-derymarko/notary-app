import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setPrice} from '../actions/SetupeActions';
import {Label, Placeholder,Row, Input} from '../components/styleComponents';

class PriceObject extends Component {
  constructor (props) {
    super(props);

    let price = this.props.price;

    this.state = {
        priceObject:price.priceObject ,
        appraisalValue:price.appraisalValue ,
        conclusion:price.conclusion,
        issuedOn:price.issuedOn,
        issuedBy:price.issuedBy,
    };
  }
  onInputChange= e => {
      const value = e.target.value;
      const name = e.target.name;

      this.setState({[name]: value}, () => {this.props.setPrice(this.state)});
  };

  render (){
      let {priceObject, appraisalValue, conclusion, issuedOn, issuedBy} = this.state;
   return (
          <Row>
            <label size="47%">
              <Placeholder>Ціна договору (грн.)</Placeholder>
              <Input
                name="priceObject"
                value={priceObject}
                onChange={this.onInputChange}
              />
            </label>
            <Label size="47%">
              <Placeholder>Ринкова вартість</Placeholder>
              <Input
                  name="appraisalValue"
                  value={appraisalValue}
                  onChange={this.onInputChange}
              />
            </Label>
            <Label>
              <Placeholder>Згідно з</Placeholder>
              <Input
                  name="conclusion"
                  value={conclusion}
                  onChange={this.onInputChange}
              />
            </Label>
            <Label>
              <Placeholder>Видавник</Placeholder>
              <Input
                  name="issuedBy"
                  value={issuedBy}
                  onChange={this.onInputChange}
              />
            </Label>
            <Label size="47%">
            <Placeholder>Дата видачі:</Placeholder>
            <Input
              type = "date"
              name="issuedOn"
              value={issuedOn}
              onChange={this.onInputChange}
            />
            </Label>
          </Row>
    )
  }
}

PriceObject.propTypes = {
    setPrice: PropTypes.func.isRequired,
    price:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    ...state.price,
});
export default connect(mapStateToProps, { setPrice })(PriceObject);

