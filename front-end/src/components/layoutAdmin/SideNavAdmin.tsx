import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventNoteIcon from '@mui/icons-material/EventNote';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';



const drawerWidth = 200;

const listItems = [
  { title: "Users", icon: <AccountCircleIcon />, to: "/userAD" },
  { title: "Vaccines", icon: <VaccinesIcon />, to: "/vaccinesAD" },
  { title: "Hospitals", icon: <LocalHospitalIcon />, to: "/hospitalsAD" },
  { title: "Setting", icon: <VaccinesIcon />, to: "/settingAD" },
  { title: "My Account", icon:<AccountCircleIcon />, to: "/myAccountAD" },


];

const SideNavAdmin = () => {
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
            <img style={{width:"100%", height:'100%',borderRadius:'50%'}} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="React Image" />
        </div>
        <div style={{marginLeft:'10%',color:'gray'}}>
              <b style={{fontSize:25}}>Admin Name</b>
          
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

export default SideNavAdmin;
