import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";


const drawerWidth = 200;

const listItems = [
  { title: "Appointments", icon: <EventNoteIcon />, to: "/appointmentHP" },
  { title: "Users", icon: <AccountCircleIcon />, to: "/userHP" },
  { title: "Vaccines", icon: <VaccinesIcon />, to: "/vaccinesHP" },
  { title: "Setting", icon: <SettingsIcon />, to: "/settingHP" },
  { title: "My Account", icon: <AccountCircleIcon />, to: "/myAccountHP" },


];

const SideNavHospital = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

  
{/** User photo components */}
<div style={{backgroundColor:'#d8ebf4',height:'35%',width:'100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
        <div style={{padding:'5%',height:'80%'}}>
            <img style={{width:"100%", height:'100%',borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/hospital-building-isolated-modern-medical-clinic-center-clipart_101884-663.jpg?w=2000" alt="React Image" />
        </div>
        <div style={{marginLeft:'10%',color:'gray'}}>
              <b style={{fontSize:25}}>Hospital Name</b>
          
        </div>       
      </div>
      <List>
        {listItems.map((item) => (
          <>
            <NavLink
              to={item.to}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#f27521" : "#000000",
                  textDecoration: "none",
                };
              }}
            >
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <Divider />
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNavHospital;
