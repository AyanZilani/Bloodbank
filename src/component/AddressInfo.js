import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';



const AddressInfo = () =>{

 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">Where Do<br/>
                          You Live?</h1>
  
  <form>
  <h3 className="stadr">Street Address</h3>
      <input 
                className="EU"
                type="text" 
                placeholder="123/4, Saint Road"/> 

<h3 className="city">City</h3>
      <input 
                className="EU"
                type="text" 
                placeholder="Dhaka"/>

<h3 className="pc">Postal code</h3>
      <input 
                className="soinput"
                type="number" 
                placeholder="X X X X"/>
  </form>
  <Link to="/ageinfo">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">Please provide correct<br/>
      address. This information<br/>
      will be kept safe.</h1>
      
  </>
  }

export default AddressInfo;
  