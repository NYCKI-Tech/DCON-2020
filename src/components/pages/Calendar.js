import React, {useState} from 'react';
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = process.env.REACT_APP_API_KEY
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID


const CalendarComponent = () => {
    console.log(API_KEY)
    return(
        <div className="pageContainer">
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    );
}

export default CalendarComponent;