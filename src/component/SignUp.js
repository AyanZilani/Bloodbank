import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';

import IconButton from "@material-ui/core/IconButton"; 
//import InputLabel from "@material-ui/core/InputLabel"; 
import Visibility from "@material-ui/icons/Visibility"; 
import InputAdornment from "@material-ui/core/InputAdornment"; 
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import Input from "@material-ui/core/Input";




const SignUp = () =>{

  const [values, setValues] = React.useState({ 
    password: "", 
    showPassword: false, 
  }); 
  
  const handleClickShowPassword = () => { 
    setValues({ ...values, showPassword: !values.showPassword }); 
  }; 
  
  const handleMouseDownPassword = (event) => { 
    event.preventDefault(); 
  }; 
  
  const handlePasswordChange = (prop) => (event) => { 
    setValues({ ...values, [prop]: event.target.value }); 
  }; 

  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">Let Us Know<br/>
                          About You</h1>
  
  <form>
  <h3 className="username">Username</h3>
      <input 
                className="EU"
                type="text" 
                placeholder="johndoe"/> 

<h3 className="email1">Email</h3>
      <input 
                className="EU"
                type="email" 
                placeholder="johndoe@gmail.com"/>

  <h3 className="password">Password</h3>
  <Input className="PA1"
        disableUnderline={true} 
        type={values.showPassword ? "text" : "password"} 
        onChange={handlePasswordChange("password")} 
        placeholder="* * * * *"
        value={values.password} 
        endAdornment={ 
          <InputAdornment position="end"> 
            <IconButton 
              onClick={handleClickShowPassword} 
              onMouseDown={handleMouseDownPassword} 
            > 
              {values.showPassword ? <Visibility /> : <VisibilityOff />} 
            </IconButton> 
          </InputAdornment> 
        } 
      />       
  </form>
  <Link to="/contactinfo">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting">   Provide your real name for <br/>
      your identity. Your name will <br/>
      be used for search</h1>
      
  </>
  }

export default SignUp;
  