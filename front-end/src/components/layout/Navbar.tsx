import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png"


const Navbar = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    
    let path = `/`; 
    navigate(path);
  }
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }}
    >
      <Toolbar>
      <img style={{height:'3%',width:'3%', marginRight:'0.5%'}} src={logo} alt="React Image" />

      <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontWeight:"900"}}>
                    VACLAB
                    </Typography>


        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
          <NotificationsIcon sx={{fontSize:35}}/>
        </IconButton >

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }} onClick={routeChange}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"900",paddingLeft:2 }}>
                        LOGOUT
                        </Typography>
                    </IconButton >
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
