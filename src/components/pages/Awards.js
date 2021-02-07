import React from 'react';
import awards from '../../media/photos/awards.png';

const Awards = () => {
    return(<div className="pageContainer">
        <img src={awards} style={{width: '30%'}}/>
        <p style={{width: '50%', margin: 'auto', 'text-align':'left'}}>
            <h1 style={{'text-align':'center'}}>Awards</h1>
            Get your applications in by February 24th, 2021 by 11:59 PM EST for the chance to recognize your club, your members, friends, and yourself for all the hard work you've done throughout the service year!
        </p>
        <p style={{'margin-top': '1.2%'}}>
           <button onClick={(()=>{window.location.href="https://bit.ly/DCONAwards"})} >Apply here!</button>
        </p>

    </div>);
}

export default Awards;
