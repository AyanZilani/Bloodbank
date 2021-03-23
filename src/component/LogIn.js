import React from 'react';
import {Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';


import IconButton from "@material-ui/core/IconButton"; 
//import InputLabel from "@material-ui/core/InputLabel"; 
import Visibility from "@material-ui/icons/Visibility"; 
import InputAdornment from "@material-ui/core/InputAdornment"; 
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import Input from "@material-ui/core/Input";



const LogIn = () =>{
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
    
    <img className="loginScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
    <h1 className="login">Sign In</h1>
    
    <form>
    <h3 className="email">Email or Username</h3>
        <input 
                  className="EU"
                  type="eamilusername" 
                  placeholder="johndoe@gmail.com"/> 

    <h3 className="password">Password</h3>
        <Input className="PA"
        disableUnderline={true} 
        type={values.showPassword ? "text" : "password"} 
        onChange={handlePasswordChange("password")} 
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
    <Link to="/home">
    <button className="loginbttn" type="button">
            Login
    </button></Link>
    <br/>
    <br/>
    
    <Link className="foPass">Forgot Password?</Link>
    <h4 className="qoa">Don't have an account?   <Link to="/signup" className="su">Sign Up</Link></h4>
    </>
  }

  export default LogIn;