import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setPrice} from '../actions/SetupeActions';

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
        <div className = "row">
          <div className = "column">
            <label>
              <span>Ціна договору (грн.)</span>
              <input
                name="priceObject"
                value={priceObject}
                onChange={this.onInputChange}
              />
            </label>  
          </div>
          <div className = "column">
            <label>
              <span>Ринкова вартість</span>
              <input
                  name="appraisalValue"
                  value={appraisalValue}
                  onChange={this.onInputChange}
              />
            </label>
            <label>
              <span>Згідно з</span>
              <input
                  name="conclusion"
                  value={conclusion}
                  onChange={this.onInputChange}
              />
            </label>
            <label>
              <span>Видавник</span>
              <input
                  name="issuedBy"
                  value={issuedBy}
                  onChange={this.onInputChange}
              />
            </label>
            <label>
            <span>Дата видачі:</span>  
            <input 
              type = "date"
              name="issuedOn"
              value={issuedOn}
              onChange={this.onInputChange}
            />
            </label>
          </div>
        </div>
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

