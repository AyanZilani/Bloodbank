import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'


const Landing = () =>{
    return <> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        
       
                    <img classname="welcomeScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/>
       
                        <Link to="/login">
                        
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
          
       
                            <button className="Startbttn" type="button">
                                Start Journey!
                            </button>
                        
                        </Link>
  
            </>
  }

  export default Landing;
  