import React, { Component } from 'react';

import Parties from '../components/Parties.js';

class Statement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name:'Вашкулата Олега Юрійовича',
            registrationNumber:2805605055,
            chooseMorW:"1",
            address:'м. Київ, вул. Василя Яна, буд. 2, кв. 14',
        }
    }

    handleChangeInput = e => {
        let name = typeof(e) !== 'string' ? e.target.name : 'chooseMorW';
        let value = typeof(e) !== 'string' ? e.target.value : e;

        this.setState({[name]: value});
    }

    render(){
        const {name, registrationNumber, chooseMorW, address} = this.state;
        return(
            <div>
                <Parties
                    name={name}
                    handleNameChange={this.handleChangeInput}
                    registrationNumber={registrationNumber}
                    ChangeRegistrationNumber={this.handleChangeInput}
                    chooseMorW = {chooseMorW}
                    handleChooseMorWChange={this.handleChangeInput}
                    address={address}
                    ChangeAddress={this.handleChangeInput}
                    NameParties = "дружина покупця"
                />
            </div>
        )
    }
}
export default (Statement)