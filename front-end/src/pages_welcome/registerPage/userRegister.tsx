import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TextField,Button,FormControl} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Dayjs } from 'dayjs';

const UserRegister=()=>{
    const [value1, setValue1] = React.useState<Dayjs | null>(null);
    const initialValues:any = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

    let navigate = useNavigate(); 
const loginUserAccount = () =>{   
  let path = `/appointment`; 
  navigate(path);
}

const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  
  const validate = (values:any) => {
    const errors:any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

    return(<div>

<div style={{alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:50,paddingRight:50}}>
                <TextField id="outlined-basic" label="First Name" sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} variant="outlined" fullWidth />
                <br />
                
                <TextField id="outlined-basic" label="Last Name" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth />
                <br />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Date of Birth"
                              value={value1}
                              onChange={(newValue) => {
                                setValue1(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                </LocalizationProvider>
                <br />

                <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                      
                      </RadioGroup>
                </FormControl>

                <TextField id="outlined-basic" label="Age" sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} variant="outlined" fullWidth />
                <br />            
                <TextField id="outlined-basic" label="Phone Number" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth  />
                <br />
                <TextField id="outlined-basic" label="Address" sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} variant="outlined" fullWidth />
                <br />            
                <TextField id="outlined-basic" label="Email" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth  />
                <br />
                <TextField  id="outlined-basic" label="Password"                     
                 type="password"
                 sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth />
                <br />
                
                <Button
                  variant="contained"
                  onClick={loginUserAccount}
                style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}} >
                  Register as user
                </Button>
            </div>
         </div>
    )
}

export default UserRegister