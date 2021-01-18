import React from 'react';

const Involvement = () => {
    return(<div className="pageContainer">
        <p style={{width: '50%', margin: 'auto', 'text-align':'left'}}>
            <h1 style={{'text-align':'center'}}>Team Leader Application</h1>             
            A Team Leader is one of the most important parts of any convention, NYS being no different. We're looking for people who are 
            dedicated, passionate, and enthusiastic to help lead attendees through the various aspects of NYS. Whether it be service projects,
            fellowship activities, or just checking up on your team, you'll be tasked with ensuring that attendees have a memorable NYS. Your 
            impact on your team cannot go understated, and we hope that you'll choose to apply!
        </p>
        <p style={{'margin-top': '1.2%'}}>
           <button onClick={(()=>{window.location.href="https://forms.gle/13MDzMx999cjWsXVA"})} >Apply here!</button>
        </p>
        <p>Dress Your President Form: https://docs.google.com/forms/d/1qIhBMdvH1VTTVQ6p-LNSP6EzgJleY6sMAtmGpPahV0A/edit</p>
        <p>Workshop Application: email erick.morocho@nycirclek.org</p>
        
    </div>);
}

export default Involvement;
