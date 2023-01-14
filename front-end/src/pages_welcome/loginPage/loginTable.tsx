import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import {TextField,Button,Dialog,Divider} from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";


const LoginTable=()=> {
  const initialValues:any = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
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

let navigate = useNavigate(); 
let path = `/register`; 

const loginUserAccount = () =>{   
  if( Object.keys(formErrors).length === 0 && isSubmit){
     navigate(path);
  }
 

 
}
const routeRegister = () =>{ 
  let path = `/register`; 
  navigate(path);
}



  

  return (
    
    <Box sx={{ bgcolor: 'background.paper', width:"70%", borderRadius:2,marginTop:10 }}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
        <>{  navigate('/appointment')        }</>
      ) : ( <></> )}
            <form onSubmit={handleSubmit}>
            <b style={{paddingLeft:'8%',fontSize:35}}>Login to your account</b>    
             <Divider style={{marginTop:'2%'}}/>
     
            <div style={{width:'90%',alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:50,paddingRight:50}}>
                      
                      <TextField 
                      id="outlined-basic"  
                      label="Email"  sx={{ marginTop: "10px", marginBottom: "10px",alignSelf:'center' }} 
                      variant="outlined" fullWidth 
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      />
                      <br />
                       <a style={{color:'red'}}>{formErrors.email}</a>
                      <TextField 
                      id="outlined-basic" 
                      label="Password" sx={{ marginTop: "10px", marginBottom: "10px" }} 
                      variant="outlined" fullWidth 
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      />
                     <a style={{color:'red'}}>{formErrors.password}</a>

                      <br />
                      
                      <b style={{color:'#2c73d2'}}>forgotten password</b>

                      <button style={{alignItems:"center", marginTop:10,width:'100%',height:40,marginBottom:10,backgroundColor:'#2c73d2',borderRadius:5,}}>
                        <b style={{color:'white'}}>Login</b></button>
                      {/**
                       *  <Button  variant="contained" onClick={loginUserAccount} style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}}>
                        Login
                      </Button> 

                       */}
                       
                      
                      <IconButton  edge="start" color="inherit" sx={{ fontSize:16 }} onClick={routeRegister}>
                        <b style={{color:'#4b4453'}}>Don't you have account?<b style={{color:'#2c73d2'}}> Register</b></b>
                      </IconButton >

            </div>                    
            </form>
    </Box>
  );
}

export default LoginTable