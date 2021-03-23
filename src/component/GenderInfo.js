import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import male from '../assets/Male Avatar.png'
import female from '../assets/Female Avatar.png'
import '../App.css';



const GenderInfo = () =>{

 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">What is <br/>
                          Your Gender?</h1>
  
            <Link className="imglink1"><img className="below50" src={male} alt="Logo for Below 50KG"/></Link>
            <Link className="imglink2"><img className="over50" src={female} alt="Logo for Over 50KG"/></Link>
    
  
  
  <Link to="/addressinfo">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">Defining your gender will let<br/>
      us know bring new features<br/>
      for mother's health care<br/></h1>
      
  </>
  }

export default GenderInfo;