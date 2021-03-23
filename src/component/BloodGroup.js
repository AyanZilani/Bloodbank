import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';



const BloodGroup = () =>{

 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">What is your<br/>
                          Blood Group</h1>
  
  
    <button className="round-button1">A+</button>
    <button className="round-button2">A-</button>
    <button className="round-button3">B+</button>
    <br/>
    <button className="round-button4">B-</button>
    <button className="round-button5">O+</button>
    <button className="round-button6">O-</button>
    <br/>
    <button className="round-button7">AB+</button>
    <button className="round-button8">AB-</button>
  
  
  <Link to="/weightinfo">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">Your blood group need to be<br/>
      accurate. If you dont know<br/>
      about it please contact<br/>
      nearest clinic.</h1>
      
  </>
  }

export default BloodGroup;
  