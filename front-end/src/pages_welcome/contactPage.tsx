import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Footer from "./footer";
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";

const ContactPage=()=>{
    let navigate = useNavigate(); 
    const routeAbout = () =>{ 
      
      let path = `/about`; 
      navigate(path);
    }
    const routeContact = () =>{ 
      
        let path = `/contact`; 
        navigate(path);
      }
      const routeLogin = () =>{ 
      
        let path = `/login`; 
        navigate(path);}
    return(
        <div>
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }} >
                <Toolbar>
                    
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontWeight:"900",paddingLeft:5 }}>
                    VACLAB
                    </Typography>

                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }} onClick={routeAbout}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"500",paddingLeft:2 }}>
                        ABOUT
                        </Typography>
                    </IconButton >

                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }} onClick={routeContact}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"500",paddingLeft:2 }}>
                        CONTACT
                        </Typography>
                    </IconButton >

                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}  onClick={routeLogin}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"900",paddingLeft:2 }}>
                        LOGIN
                        </Typography>
                    </IconButton >

                </Toolbar>
            </AppBar>

            <div style={{width:'30%',marginTop:100,marginLeft:50,border: '1px solid gray',padding:40,borderRadius:10}}>

            <TextField id="outlined-basic" label="Your Name" sx={{ marginTop: "10px", marginBottom: "10px",alignSelf:'center' }} variant="outlined" fullWidth
                       />
            <br />
            
            <TextField id="outlined-basic" label="Your Email" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />
             
            <TextField id="outlined-basic" label="Subject" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />
             
            <TextField id="outlined-basic" label="Message" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />
            <Button
              variant="contained"
             // onClick={loginUserAccount}
             style={{alignItems:"center", marginTop:10,width:'100%',marginBottom:10}}
            >
              Submit
            </Button>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage