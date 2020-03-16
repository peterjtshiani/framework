import React from 'react';
import bg from './logo.png';
import './App.css';


function Header() {
  return (
    <div className="header">
        <header className="App-header">

        <li><img src={bg} className="logo" alt="logo" /></li> 
        <li>
            <form class="search">
            <li><button type="submit"><i class="fa fa-search"></i></button></li>
                <li><input type="text" placeholder="Search.." name="search"/></li>
                
            </form>
        </li>
        <li id="list"><a href="#" >List Your</a></li>
        <li id="sign"><a href="#" >Sign Up</a></li>
        <li id="log"><a href="#" >Log in</a></li>
      
          <div className="cover">

        <h2 classname="find">Find a Space</h2>
        <p classname="subtopic">Discover & Book a Space for Your Next Event</p>
        
       <li>
       <label for="Location" ></label><select id="Location">
        <option value="" disabled selected hidden>Location</option>
            <option value="Cape Town">Cape Town</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Durban">Durban</option>            
        </select>
       </li>
       <li>
       <label for="plan" ></label><select id="plan">
        <option value="" disabled selected hidden>What are you planning ?</option>
            <option value="volvo">Cape Town</option>
            <option value="saab">Gauteng</option>
            <option value="mercedes">Durban</option>            
        </select>
       </li>
       <li>
       <button id="look">Search</button>
       </li>
    </div>
      </header>
      
    </div>
  );
}

export default Header;
