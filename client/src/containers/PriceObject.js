import React, { Component } from 'react';
import {Label, Placeholder,Row, Input} from '../styleComponents/styleComponents';
import { Mutation } from 'react-apollo';
import { UPDATE_CONTRACT } from '../api/mutation';

class PriceObject extends Component {
  constructor (props) {
    super(props);

    const p = this.props.contract;

    this.state = {
        priceObject:p.priceObject ,
        appraisalValue:p.appraisalValue ,
        conclusion:p.conclusion,
        issuedOn:p.issuedOn,
        issuedBy:p.issuedBy,
    };
  }
    onInputChange= e => {
      const value = e.target.value;
      const name = e.target.name;

      this.setState({[name]: value});
    };

    onBluer = (e, mutate) => {
        let value = e.target.value;
        let name = e.target.name;

        if (name === 'priceObject' || name === 'appraisalValue'){
            value = +value
        }

        mutate({
            variables:{
                input:{
                    price: {
                        [name]:value
                    }
                }
            }
        })

    };

  render (){
   let {priceObject, appraisalValue, conclusion, issuedOn, issuedBy} = this.state;

   return (
       <Mutation
           mutation={ UPDATE_CONTRACT }
           variables={{id:1}}
       >
           {(mutate) =>(
              <Row>

                <label size="47%">
                  <Placeholder>Ціна договору (грн.)</Placeholder>
                  <Input
                    name="priceObject"
                    value={priceObject}
                    onChange={this.onInputChange}
                    onBlur={(e) => this.onBluer(e, mutate)}
                  />
                </label>
                <Label size="47%">
                  <Placeholder>Ринкова вартість</Placeholder>
                  <Input
                    name="appraisalValue"
                    value={appraisalValue}
                    onChange={this.onInputChange}
                    onBlur={(e) => this.onBluer(e, mutate)}
                  />
                </Label>
                <Label>
                  <Placeholder>Згідно з</Placeholder>
                  <Input
                    name="conclusion"
                    value={conclusion}
                    onChange={this.onInputChange}
                    onBlur={(e) => this.onBluer(e, mutate)}
                  />
                </Label>
                <Label>
                  <Placeholder>Видавник</Placeholder>
                  <Input
                    name="issuedBy"
                    value={issuedBy}
                    onChange={this.onInputChange}
                    onBlur={(e) => this.onBluer(e, mutate)}
                  />
                </Label>
                <Label size="47%">
                <Placeholder>Дата видачі:</Placeholder>
                <Input
                    type = "date"
                    name="issuedOn"
                    value={issuedOn}
                    onChange={this.onInputChange}
                    onBlur={(e) => this.onBluer(e, mutate)}
                />
                </Label>
              </Row>
           )}
       </Mutation>
   )
  }
}

export default (PriceObject);

