import React from 'react';
import { Link} from 'react-router-dom';
import welcomeScreen from '../assets/Blood Donation Logo.png'
import '../App.css';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import 'date-fns';

const AgeInfo = () =>{

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    }
  return <>
  <img className="signupScreen" src={welcomeScreen} alt="Default logo for BloodBank app"/> 
  
  <h1 className="signup1">How Old Are<br/>
                          You?</h1>
  
 <form className="dateselect">
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Your Birthdate"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      
    </MuiPickersUtilsProvider>
    </form>
  
  <Link to="/photoupload">
  <button className="nextbttn" type="button">
          Next
  </button></Link>
  <br/>
  <br/>
  <h1 className="logowriting1">Correct birthdate gives you <br/>
      best experience with the <br/>
      community. Don't hide it.</h1>
      
  </>
  }


export default AgeInfo; 