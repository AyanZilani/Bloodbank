import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';



const Contactinfo = () =>{

 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">Contact<br/>
                          Information</h1>
  
  <form>
  <h3 className="username">Phone No</h3>
      <input 
                className="EU"
                type="tel" 
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="018"/> 

<h3 className="apn">Alternative Phone No</h3>
      <input 
                className="EU"
                type="tel" 
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="017"/>

<h3 className="social">Social(optional)</h3>
      <input 
                className="soinput"
                type="url" 
                placeholder="https:/"/>
  </form>
  <Link to="/bloodgroup">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">Please provide correct<br/>
      phone no. This information<br/>
      will be kept safe.</h1>
      
  </>
  }

export default Contactinfo;
  