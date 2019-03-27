import React, { Component } from 'react';

class PopupEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoursPopupActive:false,
            minutesPopupActive: false,
            hoursAktive:9,
            minutesAktive:0,
            title:'',
            otherInfo: '',
        }
    }
    handleHoursPopupActive = (event) => {
        if (this.state.hoursPopupActive == false){
            this.setState({ hoursPopupActive: true});
        }else{
            this.setState({ hoursAktive: +event.target.innerHTML});
            this.setState({ hoursPopupActive: false});
        }
    }
    handleMinutesPopupActive = (event) => {
        if (this.state.hoursPopupActive == false){
            this.setState({ minutesPopupActive: true});
        }else{
            this.setState({ minutesAktive: event.target.innerHTML});
            this.setState({ minutesPopupActive: false});
        }
    }
    handleAddEvent = (event) => {

        let hours = this.state.hoursAktive,
            year = this.props.dateEvent.getFullYear(),
            mounth = this.props.dateEvent.getMonth(),
            day = this.props.dateEvent.getDate();

        if (hours > 12){ hours = hours - 12};

        let dateEvent = new Date (year,mounth, day,hours, this.state.minutesAktive);

        this.props.addEvent([dateEvent, dateEvent, this.state.title, this.state.otherInfo])
    }
    handleTitle = (event) => {
        this.setState({ title: event.target.value});
    }
    handleOtherInfo = (event) => {
        this.setState({ otherInfo: event.target.value});
    }
    render() {
        let hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
        let minutes = [0,10,20,30,40,50];

        const renderHours = hours.map((number) =>
            number === this.state.hoursAktive ?
                <li key={number} onClick={this.handleHoursPopupActive} style={{background: '#eaf6ff'}} >{number}</li>
                :
                <li key={number} onClick={this.handleHoursPopupActive}>{number}</li>
        );
        const renderMinutes= minutes.map((minute) =>
            minute === this.state.hoursAktive ?
                <li key={minute} onClick={this.handleMinutesPopupActive} style={{background: '#eaf6ff'}} >{minute}</li>
                :
                <li key={minute} onClick={this.handleMinutesPopupActive}>{minute}</li>
        );
        const hoursPopup = this.state.hoursPopupActive ? <ul className="hours">{renderHours}</ul> : null;
        const minutesPopup = this.state.minutesPopupActive ? <ul className="hours">{renderMinutes}</ul> : null;
        return(
            <div className="modal-Window">
                <div className="wrapper">
                    <span className="close" onClick={this.props.close}>x</span>
                    <h3>Додати договір</h3>
                    <div>
                        <input
                            type="text"
                            className="title"
                            placeholder="адреса/назва договору"
                            value={this.state.title}
                            onChange={this.handleTitle}
                        />
                        <div className="time">
                            <span className="data">{this.props.dateEvent.getDate()}/{this.props.dateEvent.getMonth()+1}/{this.props.dateEvent.getFullYear()}</span>
                            <span onClick={this.handleHoursPopupActive}>{this.state.hoursAktive}</span>
                            {hoursPopup}:
                            <span onClick={this.handleMinutesPopupActive}>{this.state.minutesAktive}</span>
                            {minutesPopup}
                        </div>
                        <textarea
                            value = {this.state.otherInfo}
                            onChange={this.handleOtherInfo}
                            placeholder="додаткова інформація">
                        </textarea>
                    </div>
                    <div onClick={this.handleAddEvent}>+ додати</div>
                </div>;
            </div>
        )
    }
}
export default PopupEvent