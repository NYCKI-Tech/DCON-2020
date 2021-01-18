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
            <p><h3>Shirt Puchase to be determined...</h3>
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="BMS5FH4NEKRUL" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form> */}
            </p>
                {/* <img className='tshirt' src={nysTshirt} alt="tshirt"/> */}
            </div>
        </div>
        <div className="register">
            <div className="registerContainer">
                <button 
                    className="registerButton" 
                >
                    Registration Coming Soon...
                </button>
            </div>
            
        </div>
        <div className="themeReveal">
            <iframe className="themeRevealIframe" src="https://www.youtube.com/embed/Cr2LmypyEIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="taglineContainer">
            <div className="tagline">
                Attend our virtual DCON! 
            </div>
            <div className="schedule">
                <div>Date/Time:</div>
                <div>Mar. 26th: TBA </div> 
                <div>Mar. 27th: TBA</div>
                <div>Mar. 28th: TBA</div>
            </div>
        </div>
        {/* <div className="involvementOpportunities">
            <div onClick={(()=>{window.location.href="/involvement"})} className="involvementHeader">Involvement Opportunities</div>
            <div className="involvementOpportunitiesImageHolder">
                <img className="dressYourPresident" src={dressYourPresident} alt="dress your president" />
                <img className="teamLeader" src={teamLeader} alt="team leader" />
            </div>
        </div> */}
            {/**https://www.facebook.com/media/set/?set=a.10157705880422778&type=3 **/}
         
        {/* <div className="recapVideo">
            <iframe className="recapVideoIframe" src="https://www.youtube.com/watch?v=M29ZVLj0oEI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}

    </div>
</div>);
}

export default Home;
