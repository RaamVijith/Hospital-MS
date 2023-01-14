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
  { title: "Appointment", icon: <EventNoteIcon />, to: "/appointment" },
  { title: "Hospitals", icon: <LocalHospitalIcon />, to: "/hospitals" },
  { title: "Vaccines", icon: <VaccinesIcon />, to: "/vaccines" },
  { title: "My Vaccines", icon: <VaccinesIcon />, to: "/myVaccine" },
  { title: "Setting", icon: <SettingsIcon />, to: "/setting" },
  { title: "My Account", icon: <AccountCircleIcon />, to: "/myAccount" },
 // { title: "Demo", icon: <AccountCircleIcon />, to: "/demo" },



];

const SideNav = () => {
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

{/** User photo */}
      <div style={{backgroundColor:'#d8ebf4',height:'35%',width:'100%',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
        <div style={{padding:'5%',height:'80%'}}>
            <img style={{width:"100%", height:'100%',borderRadius:'50%'}} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="React Image" />
        </div>
        <div style={{marginLeft:'20%',color:'gray'}}>
              <b style={{fontSize:25}}>User Name</b>
          
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

export default SideNav;
