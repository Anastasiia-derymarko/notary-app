import React, { Component } from 'react';

class Parties extends Component{
	constructor (props) {
    super(props);

    this.state = {
      sex:'Female',
      name:'',
      registrationNumber:'',
      address:'',
    }
      this.onInputChange = this.onInputChange.bind(this);
  }
    onInputChange(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    render(){
    	return(
	    	<form>
	          <label>Name: 
              <input 
                name="name"  
                type="text"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </label>
	          <label> Registration Number: <input name="registrationNumber"  type="text"
	                               value={this.state.registrationNumber} onChange={this.onInputChange}/></label>
	          <label> Address: <input name="address"  type="text"
	                               value={this.state.address} onChange={this.onInputChange}/></label>
	          <label> Sex: <select name="sex"  value={this.state.sex} onChange={this.onInputChange}>
	              <option value="none">none</option>
	              <option value="male">Male</option>
	              <option value="female">Female</option>
	            </select>
	          </label>
	        </form>
    	);
    }
}

export default (Parties);