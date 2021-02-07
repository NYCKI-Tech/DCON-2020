import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Calendar from './pages/Calendar';
  import Schedule from './pages/Schedule';
  import Contact from './pages/Contact';
  import Home from './pages/Home';
  import Awards from './pages/Awards'
  import Involvement from './pages/Involvement';
  import Elections from './pages/Elections';
  import banner from '../media/photos/banner.png';
  import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
  import Countdown from 'react-countdown';
  import { Instagram, Facebook } from 'react-feather';

  const linkStyles = { textDecoration: 'none', color: 'black' };

  const AppRouter = () => {
    return (
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">DCON 2021</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/calendar">Calendar</Nav.Link>
                  <Nav.Link href="/schedule">Schedule</Nav.Link>
                  <Nav.Link href="/involvement">Involvement Opportunities</Nav.Link>
                  <Nav.Link href="/awards">Awards</Nav.Link>
                  <Nav.Link href="/elections">Elections</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="bannerContainer">
              <img src={banner} style={{width: '100%'}}/>
              <div className="countdown"><Countdown date={new Date('3/26/2021')} /> Days till DCON 2021</div>
            </div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/calendar">
                <Calendar />
              </Route>
              <Route path="/schedule">
                <Schedule />
              </Route>
              <Route path="/involvement">
                <Involvement />
              </Route>
              <Route path="/elections">
                <Elections />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/awards">
                <Awards />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Instagram onClick={()=>{window.open('https://www.instagram.com/nycirclek')}} color="white" size={70}/>
            <Facebook onClick={()=>{window.open('https://www.facebook.com/nycirclek')}} color="white" size={70}/>
          </div>
        </Router>

      );
  }

  export default AppRouter;
