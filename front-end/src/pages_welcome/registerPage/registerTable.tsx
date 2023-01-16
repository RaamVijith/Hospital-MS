import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminRegister from './adminRegister';
import UserRegister from './userRegister';
import HospitalRegister from './hospitalRegister';

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
           <UserRegister/>           
        </TabPanel>

{/**Hospitl pannel */}
        <TabPanel value={value} index={1} dir={theme.direction}>
           <HospitalRegister/>
        </TabPanel>

{/**Admin pannel */}

        <TabPanel value={value} index={2} dir={theme.direction}>
            <AdminRegister/> 
        </TabPanel>

       </SwipeableViews> 
    </Box>
  );
}