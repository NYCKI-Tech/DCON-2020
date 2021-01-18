import React, { useState } from 'react';
import '../../styles/DayItem.css';

const DayItem = (timeFrame, name, types, details) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    return(
        <div className="">
            <div className="eventContainer">
                <div className="timeContainer">
                    {timeFrame}
                </div>
                <div className="middleContainer">
                    <div className="nameContainer">
                        {name}
                    </div>
                    <div className="typeContainer">
                        {types}
                    </div>
                </div>
                <div onClick={handleClick}>
                    details
                </div>
            </div>
            <div>
                {open && details}
            </div>
        </div>
    )
}

export default DayItem;