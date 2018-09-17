import React, { Component } from 'react';

class PriceObject extends Component {
  constructor (props) {
    super(props);

    this.state = {
      
    };
  }

  

  render (){
      
   return (
        <div className = "row">
        <button className = "exemplify">Приклад</button>  
          <div className = "column">
            <label>
              <span>Ціна договору</span>
              <input/>
            </label>  
          </div>
          <div className = "column">
            <label>
              <span>Ринкова вартість</span>
              <input/>
            </label>
            <label>
              <span>Згідно з</span>
              <input/>
            </label>
            <label>
              <span>Видавник</span>
              <input/>
            </label>
            <label>
            <span>Дата видачі:</span>  
            <input 
              type = "date"
            />
            </label>
          </div>
        </div>
    ) 
  }
}

export default (PriceObject);