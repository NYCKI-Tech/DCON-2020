import React from 'react';

const Involvement = () => {
    return(<div className="pageContainer">
        <p style={{width: '50%', margin: 'auto', 'text-align':'left'}}>
            <h1 style={{'text-align':'center'}}>Team Leader Application</h1>
            A Team Leader is one of the most important parts of any convention, DCON being no different. We're looking for people who are
            dedicated, passionate, and enthusiastic to help lead attendees through the various aspects of  DCON. Whether it be service projects,
            fellowship activities, or just checking up on your team, you'll be tasked with ensuring that attendees have a memorable DCON. Your
            impact on your team cannot go understated, and we can't wait for you to apply! Apply by 11:59 PM EST on Sunday, February 28th.
        </p>
        <p style={{'margin-top': '1.2%'}}>
           <button onClick={(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSdyLNQxMa1YMIJoDfz8xUV82zv2_6_SBgBoXL_u5ep1trOrpQ/viewform"})} >Apply here!</button>
        </p>
        <p>
          <h1 style={{'text-align':'center'}}>Lip Sync Battle Signup</h1>
          Want to snatch the spirit bear? Submit a video showcasing your club's spirit!. Signup by 11:59 PM EST on Friday, March 26th.
        </p>
        <p style={{'margin-top': '1.2%'}}>
           <button onClick={(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLScPfI6xYPRgyLA5ppvzfoFljvhWb87T6hEcAhdbcd8ZKoRCnQ/viewform"})} >Signup here!</button>
        </p>
        <p style={{width: '50%', margin: 'auto', 'text-align':'left'}}>
          <h1 style={{'text-align':'center'}}>Workshop Application</h1>
          Are you interested in sharing your unique experience and skills with others? Host a workshop at DCON 2021!
Hosting a workshop at DCON is a fantastic opportunity to train and share useful ideas, techniques, tools, mindsets, etc. The active engagement of the workshop facilitator can empower our members to gain confidence in their abilities while developing useful actions that can be implemented onto their clubs.
Apply by 11:59 PM EST on Saturday, February 20th.</p>
        <p style={{'margin-top': '1.2%'}}>
           <button onClick={(()=>{window.location.href="https://bit.ly/DCONAwards"})}>Apply here!</button>
        </p>
    </div>);
}

export default Involvement;
