import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Parties extends Component{
 constructor (props) {
    super(props);

    this.state = {
      chooseMorW: null,
      NameValue:'',
    };

  }
  
  handleChooseMorWChange = (radioGroup) => {
    this.setState({ chooseMorW: radioGroup });

  }


  render () {
 
    return( 

      <div>
      <RadioGroup onChange={ this.handleChooseMorWChange } value={ this.state.chooseMorW } horizontal>
        <RadioButton value="man">Чоловік</RadioButton>
        <RadioButton value="women">Жінка</RadioButton>
      </RadioGroup>
      </div>
    )  
  }
}

export default Parties  