import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setPrice} from '../store/actions/SetupeActions';
import {Label, Placeholder,Row, Input} from '../styleComponents/styleComponents';

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

      this.setState({[name]: value}, () => {this.props.setPrice({[name]: value})});
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

const mapStateToProps = state => ({
    ...state.price,
});
export default connect(mapStateToProps, { setPrice })(PriceObject);

