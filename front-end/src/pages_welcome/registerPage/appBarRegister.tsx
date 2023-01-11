import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

const AppbarRegister=()=>{

    let navigate = useNavigate(); 
const routeAbout = () =>{ 
  
  let path = `/about`; 
  navigate(path);
}
const routeContact = () =>{ 
  
    let path = `/contact`; 
    navigate(path);
  }
  const routeHome = () =>{ 
  
    let path = `/`; 
    navigate(path);
  }
    return(
        <div>
            <div style={{height:60}}>
            <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }} >
                <Toolbar>
                    
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontWeight:"900",paddingLeft:5 }}>
                    VACLAB
                    </Typography>

                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }} onClick={routeHome}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"500",paddingLeft:2 }}>
                        HOME
                        </Typography>
                    </IconButton >

                            

                </Toolbar>
            </AppBar>
            </div>
           

         

        </div>
    )
}

export default AppbarRegister