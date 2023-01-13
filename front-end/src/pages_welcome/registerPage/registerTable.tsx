import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
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


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);


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

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 550, borderRadius:2,marginTop:-2 }}>

         <b style={{paddingLeft:'10%',fontSize:35}}>Register your new account</b>
{/* App Bar */}
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="User" {...a11yProps(0)} />
              <Tab label="Hospital" {...a11yProps(1)} />
              <Tab label="Admin" {...a11yProps(2)} />
            </Tabs>
          </AppBar>


          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
             > 

{/**user pannel */}
        <TabPanel  value={value} index={0} dir={theme.direction} >

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
                <TextField id="outlined-basic" label="Password" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth />
                <br />
                
                <Button
                  variant="contained"
                  onClick={loginUserAccount}
                style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}} >
                  Register as user
                </Button>
            </div>
        </TabPanel>





{/**Hospitl pannel */}
        <TabPanel value={value} index={1} dir={theme.direction}>
            <div style={{alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center',paddingLeft:50,paddingRight:50}}>
                    <TextField id="outlined-basic" label="Hospital Registation Number" sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} variant="outlined" fullWidth  />
                    <br />
                      
                    <TextField id="outlined-basic" label="Hospital Name" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth  />     
                    <br />

                    <TextField id="outlined-basic" label="Location" sx={{ marginTop: "10px", marginBottom: "2px",alignSelf:'center' }} variant="outlined" fullWidth  />
                    <br />
                      
                    <TextField id="outlined-basic" label="Email" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth />
                    <br />

                    <TextField id="outlined-basic" label="Password" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth />
                    <br />

                    

                    <Button
                        variant="contained"
                        onClick={loginHospitalAccount}
                        style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}} >
                        Register as Hospital
                      </Button>

                </div>
            </TabPanel>


{/**Admin pannel */}

                <TabPanel value={value} index={2} dir={theme.direction}>
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
                            
                        <TextField id="outlined-basic" label="Email" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth/>
                        <br />

                        <TextField id="outlined-basic" label="Password" sx={{ marginTop: "10px", marginBottom: "2px" }} variant="outlined" fullWidth />
                        <br />          
                            
                        <Button
                              variant="contained"
                              onClick={loginAdminAccount}
                              style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}} >
                              Register as Admin
                        </Button>

                    </div>      
        </TabPanel>
       </SwipeableViews> 
    </Box>
  );
}