import React, { useState, useEffect } from 'react'
import {TextField,Button,FormControl} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const HospitalRegister=()=>{
  const initialValues:any = { registation_number:"",name:"",address:"",email:"",password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

let navigate = useNavigate(); 

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

//Error Handeling  
  const validate = (values:any) => {
    const errors:any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.registration_number) {
      errors.registration_number = "Registration Number is required!";
    }
    if (!values.name) {
      errors.name = "Hospital Name is required!";
    }    
    if (!values.address) {
      errors.address = "Address is required!";
    }
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

    return(
    <div>
      {/**Page Navigation */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
               <>{  navigate('/appointmentHP')}</>
                  ) : ( <></> )}
    <form onSubmit={handleSubmit}>

    <div style={{alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:50,paddingRight:50}}>
                <TextField id="outlined-basic" label="Hospital Registration Number" 
                sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} 
                variant="outlined" fullWidth
                name="registration_number"
                value={formValues.registration_number}
                onChange={handleChange} />
               <a style={{color:'red'}}>{formErrors.registration_number}</a>

                <TextField id="outlined-basic" label="Hospital Name" 
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                variant="outlined" fullWidth
                name="name"
                value={formValues.name}
                onChange={handleChange} />
               <a style={{color:'red'}}>{formErrors.name}</a>
                
                <TextField id="outlined-basic" label="Address" 
                sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} 
                variant="outlined" fullWidth
                name="address"
                value={formValues.address}
                onChange={handleChange} />
                <a style={{color:'red'}}>{formErrors.address}</a>
               
                <TextField id="outlined-basic" label="Email" 
                  sx={{ marginTop: "10px", marginBottom: "2px" }} 
                  variant="outlined" fullWidth
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}  />
               <a style={{color:'red'}}>{formErrors.email}</a>

                <TextField  id="outlined-basic" label="Password"                     
                 type="password"
                 sx={{ marginTop: "10px", marginBottom: "2px" }} 
                 variant="outlined" fullWidth
                 name="password"
                 value={formValues.password}
                 onChange={handleChange} />
                <a style={{color:'red'}}>{formErrors.password}</a>

                <br />
                
                <button style={{alignItems:"center", marginTop:10,width:'100%',height:40,marginBottom:10,backgroundColor:'#2c73d2',borderRadius:5,}}>
                <b style={{color:'white'}}>Register As User</b></button>
             
            </div>
            </form>

         </div>
    )
}

export default HospitalRegister