import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './style.css';
import moment from 'moment';
import events from './events.js';
import PopupEvent from './popupEvent.js';


const propTypes = {}

class Scheduel extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            events,
            modalOpen: false,
            dateEvent:new Date(),
        }
    }
    handleAddEvents = ([ start, end, title, resource ]) => {
            console.log(title);
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                        resource,
                    },
                ],
            })

    }
    handleOpenModalWin = (e) => {
        this.setState({modalOpen:true, dateEvent: new Date(e.slots)});
    }
    handleCloseModalWin = (e) => {
        this.setState({modalOpen:false});
    }
    render() {
        let localizer = BigCalendar.momentLocalizer(moment);

        let popup = this.state.modalOpen ? <PopupEvent addEvent = {this.handleAddEvents} dateEvent = {this.state.dateEvent} close={this.handleCloseModalWin}/> : null;
        return (
            <div>
                {popup}
                <BigCalendar
                    selectable
                    popup
                    events={this.state.events}
                    culture='uk'
                    defaultDate={new Date()}
                    localizer={localizer}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleOpenModalWin}
                />
            </div>
        )
    }
}

Scheduel.propTypes = propTypes

export default Scheduel