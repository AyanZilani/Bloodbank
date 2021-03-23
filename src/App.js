import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Landing from './component/Landing';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import Contactinfo from './component/contactinfo';
import BloodGroup from './component/BloodGroup';
import WeightInfo from './component/Weightinfo';
import GenderInfo from './component/GenderInfo';
import AddressInfo from './component/AddressInfo';
import AgeInfo from './component/AgeInfo';
import PhotoUpload from './component/PhotoUpload';
import Home from './component/Home';


const User = () =>{
  return (<h1>Welcocme user</h1>)
}


function App() {
  return (
   <Router>
   <div className="App">
     <Route  path="/" exact component={Landing}/>     
     <Route path="/login" exact component={LogIn}/>
     <Route path="/signup" exact component={SignUp}/>
     <Route path="/contactinfo" exact component={Contactinfo}/>
     <Route path="/bloodgroup" exact component={BloodGroup}/>
     <Route path="/weightinfo" exact component={WeightInfo}/>
     <Route path="/genderinfo" exact component={GenderInfo}/>
     <Route path="/addressinfo" exact component={AddressInfo}/>
     <Route path="/ageinfo" exact component={AgeInfo}/>
     <Route path="/photoupload" exact component={PhotoUpload}/>
     <Route path="/home" exact component={Home}/>

    </div>
    </Router>
  );
}

export default App;
