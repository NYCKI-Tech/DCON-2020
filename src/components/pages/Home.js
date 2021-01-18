import React from 'react';
import logo from '../../media/photos/logo.png'
import dressYourPresident from '../../media/photos/dressYourPresident.png'
import teamLeader from '../../media/photos/teamLeader.png'
import nysTshirt from '../../media/photos/nysTshirt.PNG'


const Home = () => {
    return(<div className="outerContainer">
        <div className="innerContainer"> 
        <div>
            <div className="tshirtContainer">
            <p><h1>Purchase your shirt here!</h1><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="BMS5FH4NEKRUL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form></p>
                <img className='tshirt' src={nysTshirt} alt="tshirt"/>
            </div>
        </div>
        <div className="register">
            <div className="registerContainer">
                <button className="registerButton" onClick={(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfjaa4vg0xs9vsfRrawBbLVh6GkYfrgSrOLz4RX15mwhbmkfA/viewform?gxids=7757"})} >Register Now</button>
                <img className='logo' src={logo} alt="logo"/>
            </div>
        </div>
        <div className="themeReveal">
            <iframe className="themeRevealIframe" src="https://www.youtube.com/embed/TLNrT6sbz6o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="taglineContainer">
            <div className="tagline">
            Attend our virtual NYS! Participate in fun fellowship and service events! Meet Circle Kers from all around the district!  
            </div>
            <div className="schedule">
                <div>Date/Time:</div>
                <div>Dec. 4: 6-9pm </div> 
                <div>Dec. 5: 11am-2:45pm, 6-9:30pm (optional 9:30-midnight fellowship)</div>
                <div>Dec. 6: 6-8:30pm</div>
            </div>
        </div>
        <div className="involvementOpportunities">
            <div onClick={(()=>{window.location.href="/involvement"})} className="involvementHeader">Involvement Opportunities</div>
            <div className="involvementOpportunitiesImageHolder">
                <img className="dressYourPresident" src={dressYourPresident} alt="dress your president" />
                <img className="teamLeader" src={teamLeader} alt="team leader" />
            </div>
        </div>
            {/**https://www.facebook.com/media/set/?set=a.10157705880422778&type=3 **/}
         
        <div className="recapVideo">
            <iframe className="recapVideoIframe" src="https://www.youtube.com/watch?v=M29ZVLj0oEI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>
</div>);
}

export default Home;
