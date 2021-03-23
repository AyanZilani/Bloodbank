import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
//import upload from '../assets/up.png';

import '../App.css';

import ImageUploader from 'react-images-upload';


class PhotoUpload extends React.Component {

  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
};

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
render(){
  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">You're almost <br/>
                          done</h1>
  
  <form className="dateselect">                       
             <ImageUploader
                withIcon={false}
                buttonText='Upload a photo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            ></ImageUploader>
    </form>
  
  
  <Link to="/home">
  <button className="nextbttn1" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting2">Please do not use a model<br/>
      or doll avatar. Please keep<br/>
      faith on youself, you're<br/>
      beautiful too.</h1>
      
  </>
  }
}
export default PhotoUpload;