import React from 'react';
import './App.css';
import Agent from './agent.jpg'; 
import play from './play.png';




function App() {
  return (
    <div className="Body">
      <div className="travelling">
      <h2 >where are you planing your event ?</h2>
      <p>Discover & Book a Space for your next Events</p>
      <br/>
      <div className="container">
      <div className="row">
      <div className="col-sm-3 cpt">
      <p>Cape Town</p>
      </div>
      <div className="col-sm-3 col-md-offset-1 jhb">
      <p>Gauteng</p>
      </div>
      <div className="col-sm-3 col-md-offset-1 dbn">
      <p>Durban</p>
      </div>
    </div>
      </div>
      </div>
      <br/>
      <div className="houses">
      <h2 >where are you planing your event ?</h2>
      <p>Discover & Book a Space for your next Events</p>
      <br/>
      <div className="container">
      <div className="row">
        <div className="col-sm-3 venue1">
          <p>Scenic Meeting Spots</p>
        </div>
        <div className="col-sm-3 col-md-offset-1 venue2">
         <p>Affordable Party Venues</p>
        </div>
        <div className="col-sm-3 col-md-offset-1 venue3">
         <p>Scenic Meeting Spots</p>
       </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-sm-3 venue4">
          <p>Affordable Party Venues</p>
        </div>
        <div className="col-sm-3 col-md-offset-1 venue5">
         <p>Scenic Meeting Spots</p>
        </div>
        <div className="col-sm-3 col-md-offset-1 venue6">
         <p>Affordable Party Venues</p>
       </div>
      </div>
      </div>
      <br/>
      </div>
      <br/>
       <div className="spaces">
        <h2 >where are you planing your event ?</h2>
        <p>Discover & Book a Space for your next Events</p>
       <br/>
       <div className="container">
      <div className="row">
      <div className="col-sm-1 prev">
      {/* <img src={prevImage}  className=" prev"  /> */}
      </div>
      <div className="col-sm-3  space">
      <div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
      </div>
      <div className="col-sm-3 space">
      <div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
      </div>
      <div className="col-sm-3  space">
      <div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
      </div>
      <div className="col-sm-1  next">
      {/* <img src={nextImage} className="  next" /> */}
      </div>
    </div>
      </div>
      </div>
      
    
      
      
      <br/>
       <div className="feature">
         <div className="container">
           <h2 className="protected">100% Secure and Protected</h2>
           <p className="protected">Trust and safety in our #1 Priority at Hourspace</p>
           <br/>
           <div className="row">
           <div className="col-sm-5 col-md-offset-1">
              <div className="security">
                  <p>Looking for Space</p>
                  <div id="tick-mark"></div>    Secure Merchant Transactions<br/>
                  <div id="tick-mark"></div>Authenticated Hosts<br/>
                  <div id="tick-mark"></div>Direct Messaging with Hosts<br/>
                  <div id="tick-mark"></div>Hosts Profile and Reviews<br/>
                </div>
              </div>
              <div className="col-sm-5 col-md-offset-1">
              <div className="hosting">
              <p>Hosting out a space</p>
                  <div id="tick-mark"></div>R1.000.000 Insurance Coverage<br/>
                  <div id="tick-mark"></div>Booking Management Platform Flexible<br/>
                  <div id="tick-mark"></div>Cancellation and deposit Policies<br/>
                  <div id="tick-mark"></div>24/7 Customer Support Team<br/>
                </div>
              </div>
            </div>
          </div>
       
      </div>
      <br/>
      <div className="spaces">
      <h2 >where are you planing your event ?</h2>
      <p>Discover & Book a Space for your next Events</p>
      <br/>
      <div className="container">
      <div className="row">
        <div className="col-sm-3 vid">
        <video controls poster={play} >
  <source src="commercial.mp4" type="video/mp4"/>
  <source src="commercial.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
<div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
        </div>
        <div className="col-sm-3 col-md-offset-1 vid">
        <video controls poster={play} >
  <source src="commercial.mp4" type="video/mp4"/>
  <source src="commercial.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
<div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
        </div>
        <div className="col-sm-3 col-md-offset-1 vid">
        <video controls poster={play} >
  <source src="commercial.mp4" type="video/mp4"/>
  <source src="commercial.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
<div className = "card" >
            <img src={Agent} className="image-moves" />
            <div className="card-details">
                <div className="aboutAgent">
                <h1>The Space Title</h1>
                Garden,Cape Town
            </div>
        </div>        
    </div>
       </div>
      </div>
      <br/>
   
    
      </div>
      </div>
      
    </div>
  );
}

export default App;
