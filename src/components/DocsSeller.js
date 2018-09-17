import React, { Component } from 'react';
import '../components/style/DocsSeller.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {docsSellerName, orderObjects} from '../data/orders.js';

import DatePicker from 'react-datepicker';
import moment from 'moment';

class DocsSeller extends Component {
  constructor (props) {
    super(props);

    this.state = {
     docName:this.props.docName,
     docObjType:this.props.docObjType,
     docDate:this.props.docDate,
     techCheck:false,
     numberDoc:this.props.numberDoc,
     issuedDoc:this.props.issuedDoc,
     numberTech:this.props.numberTech,
     techDate:this.props.techDate,
     nameTech:this.props.nameTech,
    };
  }
onInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
handleDocTypeNameChange = selectedOption => {
  this.setState({ docName: selectedOption ? selectedOption.value : null });
}

handleDocObjTypeChange = selectedOption => {
  this.setState({ docObjType: selectedOption ? selectedOption.value : null });
}

handleDocDateChange = date => {
    this.setState({ docDate:date});      
}

handleTechDateChange = date => {
    this.setState({ techDate:date});      
}

DocSellerState = state => {
  console.log(this.state);
} 

  render() {

    const {docName, docObjType, docDate, techCheck, 
      numberDoc, issuedDoc, nameTech, techDate, numberTech} = this.state 

    return (
      <div>
        <div className = "row" style = {{marginRight: "10px"}}>
        <button className = "exemplify">Приклад</button>  
        <div className = "column">
          <label>
          <span>Назва документа:</span>
           <Select 
             value={docName}
             onChange={this.handleDocTypeNameChange}
             options={docsSellerName}
           />
           </label>
           <label>
           <span>Доповнення:</span>
           <Select 
             value={docObjType}
             onChange={this.handleDocObjTypeChange}
             options={orderObjects}
           /> 
           </label>
            <div className = "row">
              <label style = {{width: "75%"}} >Дата
              <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={moment(docDate)}
              onChange = {this.handleDocDateChange}
              />
              </label>
              <label style = {{width: "25%"}} >№ 
              <input
                name = 'numberDoc'
                value={numberDoc}
                onChange={this.onInputChange || ''}
              />
              </label>
            </div>
            <label>
            <span>Ким виданий:</span>
            <input 
              name = 'issuedDoc'
              value={issuedDoc}
              onChange={this.onInputChange || ''}
            />
            </label>

            </div>
            <div className = "column">
              <div className = "DivCheckbox">
              <input
                name = 'techCheck'
                type = 'checkbox'
                checked={techCheck}
                onChange={this.onInputChange || ''}
               />
              <span>Зареєстрований в БТІ</span>
              </div> 
              <label>
              <span>Назва в БТІ:</span>
              <input 
                name = 'nameTech'
                value={nameTech}
                onChange={this.onInputChange || ''}
              />
              </label>
              <div className = "row">
                 <label style = {{width: "75%"}}>Дата
                <DatePicker 
                  dateFormat="DD/MM/YYYY"
                  selected={moment(techDate)}
                  onChange = {this.handleTechDateChange}
                />
                </label>
                <label style = {{width: "25%"}}><span>№ </span>
                <input
                name = 'numberTech'
                value={numberTech}
                onChange={this.onInputChange || ''}         
                />
                </label>
              </div>
            </div>
          </div> 
            <div className = "row" style={{marginRight: "10px"}}> 
            <button onClick = {this.DocSellerState}>+ Додати документ</button>
            </div>  
      </div>
    )
  }      
}
export default (DocsSeller);