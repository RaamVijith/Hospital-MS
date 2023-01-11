import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import {TextField,Button,Dialog,Divider} from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";



const LoginTable=()=> {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

let navigate = useNavigate(); 
const loginUserAccount = () =>{   
  let path = `/appointment`; 
  navigate(path);
}

const routeHome = () =>{ 
  let path = `/`; 
  navigate(path);
}

const routeRegister = () =>{ 
  let path = `/register`; 
  navigate(path);
}

const loginHospitalAccount = () =>{   
    let path = `/appointmentHP`; 
    navigate(path);
  }

const loginAdminAccount = () =>{   
    let path = `/userAD`; 
    navigate(path);
  }


  const postUserApi=async()=>{
    const url="http://10.0.2.2:3100/api/user/signin";
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                
                "email": "viji",
                "password": "12345678",
                "type":"admin"
                
              }),
        });
        if(response.status !=200) {
            throw new Error("something is wrong");
        }else{ const responseText= await response.text();
        
            if(responseText==="Email is invalid"||responseText==="Password is invalid"||responseText==="error"){
                console.log("Email or Password is wrong");
  
            }else{
                console.log({responseText});
               // getUserAuth();
            }
            
        }
       
    }catch(error){
        console.log(error);
    }
  }   
  
  

  return (
    <Box sx={{ bgcolor: 'background.paper', width:"70%", borderRadius:2,marginTop:10 }}>
            <b style={{paddingLeft:'8%',fontSize:35}}>Login to your account</b>    
             <Divider style={{marginTop:'2%'}}/>
     
            <div style={{width:'90%',alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:50,paddingRight:50}}>
                      
                      <TextField id="outlined-basic"  label="Email" sx={{ marginTop: "10px", marginBottom: "10px",alignSelf:'center' }} variant="outlined" fullWidth />
                      <br />
                      
                      <TextField id="outlined-basic" label="Password" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth />
                      <br />
                      
                      <b style={{color:'#2c73d2'}}>forgotten password</b>

                      <Button variant="contained" onClick={loginUserAccount} style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}}>
                        Login
                      </Button>

                      <IconButton  edge="start" color="inherit" sx={{ fontSize:16 }} onClick={routeRegister}>
                        <b style={{color:'#4b4453'}}>Don't you have account?<b style={{color:'#2c73d2'}}> Register</b></b>
                      </IconButton >

            </div>                    
           
    </Box>
  );
}

export default LoginTable