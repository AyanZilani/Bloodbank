import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import below50 from '../assets/Below 50.png'
import over50 from '../assets/Over 50.png'
import '../App.css';



const WeightInfo = () =>{

 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">How Much Do<br/>
                          You Weigh?</h1>
  
            <Link className="imglink1"><img className="below50" src={below50} alt="Logo for Below 50KG"/></Link>
            <Link className="imglink2"><img className="over50" src={over50} alt="Logo for Over 50KG"/></Link>
    
  
  
  <Link to="/genderinfo">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">Note: you can not donate<br/>
      blood if you're under weight<br/>
      Minimum weight for<br/>
      doantion required 50KG.</h1>
      
  </>
  }

export default WeightInfo;
  