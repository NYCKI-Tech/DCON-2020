import React from 'react';
import { Markup } from 'interweave';
import Moment from 'react-moment';
import SimpleDateFormat from "@riversun/simple-date-format";


export default class Day extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: null,
            day: null,
            fourthStyles: {},
            fifthStyles: {},
            sixthStyles: {},
        }    
    }

    componentDidMount = () => {
        this.getEvents();
    }


      
    getEvents(){
        let that = this;
        function start() {
            window.gapi.client.init({
                'apiKey': process.env.REACT_APP_API_KEY
            }).then(function() {
            return window.gapi.client.request({
                'path': `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events`,
            })
            }).then( (response) => {
                let events = response.result.items
                let sortedEvents = events.sort((a, b) => {
                    return (Date.parse(a.start.dateTime) - Date.parse(b.start.dateTime))
                }
                
                );
                that.setState({
                    events: sortedEvents
                }, ()=>{
                    console.log(that.state.events);
                })
            }, function(reason) {
                console.log(reason);
            });
        }
        window.gapi.load('client', start)
    }
    
    render() {
        return this.state.events && (
        <div className="dayContainer">
            <div className="dayButtonContainer">
                <button style={this.state.fourthStyles} id="dayButton" onClick={()=>{this.setState({day:'12-04', fourthStyles:{color:'lightgrey'}, fifthStyles:{color:'white'}, sixthStyles:{color:'white'}})}}>12/4</button>
                <button style={this.state.fifthStyles} id="dayButton" onClick={()=>{this.setState({day:'12-05',  fourthStyles:{color:'white'}, fifthStyles:{color:'lightgrey'}, sixthStyles:{color:'white'}})}}>12/5</button>
                <button style={this.state.sixthStyles} id="dayButton" onClick={()=>{this.setState({day:'12-06',  fourthStyles:{color:'white'}, fifthStyles:{color:'white'}, sixthStyles:{color:'lightgrey'}})}}>12/6</button>
                <button id="dayButton" onClick={()=>{this.setState({day:null,  fourthStyles:{color:'white'}, fifthStyles:{color:'white'}, sixthStyles:{color:'white'}})}}>reset</button>
            </div>
            {this.state.events.map((event)=>{
            return this.state.day? event.start.dateTime.includes(this.state.day) && (<div className="gcalEvent">
                <div className="gcalEventName" onClick={()=>{window.open(event.location)}}>{event.summary}</div>
                <div className="gcalEventdescription"><Markup content={event.description} /></div>
                <div className="gcalEventTime">Date: <Moment format="MM/DD/YYYY hh:mm a">{event.start.dateTime}</Moment> - <Moment  format="MM/DD/YYYY hh:mm a">{event.end.dateTime}</Moment></div>
            </div>) : (<div className="gcalEvent">
                <div className="gcalEventName" onClick={()=>{window.open(event.location)}}>{event.summary}</div>
                <div className="gcalEventdescription"><Markup content={event.description} /></div>
                <div className="gcalEventTime">Date: <Moment format="MM/DD/YYYY hh:mm a">{event.start.dateTime}</Moment> - <Moment  format="MM/DD/YYYY hh:mm a">{event.end.dateTime}</Moment></div>
            </div>)
        })}</div>
        );
    }
}