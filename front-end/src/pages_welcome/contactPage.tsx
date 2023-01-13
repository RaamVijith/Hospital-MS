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
import welcomePage from "../../images/contact.jpg";
import logo from "../../images/logo.png"

const ContactPage=()=>{

    var sectionStyle = {
        backgroundImage: "url(" + welcomePage + ")",
        
    };
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
        <div >
            <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }} >
                <Toolbar>
                <img style={{height:'3%',width:'3%', marginRight:'0.5%'}} src={logo} alt="React Image" />

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontWeight:"900"}}>
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
            <div style={ sectionStyle }>
            <div style={{width:'30%',marginTop:'4%',marginLeft:'35%',paddingBottom:'5%',paddingTop:'1.8%',borderRadius:10}}>
            <Typography variant="h4" gutterBottom style={{color:'black'}}>Contact us</Typography>  

            <TextField id="outlined-basic" label="Your Name" sx={{ marginTop: "10px", marginBottom: "10px",alignSelf:'center' }} variant="outlined" fullWidth />
            <br />            
            <TextField id="outlined-basic" label="Your Email" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth    />
            <br />             
            <TextField id="outlined-basic" label="Subject" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth  />
            <br />             
            <TextField id="outlined-basic" label="Message" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth  />
            <br />
            <Button
              variant="contained"
             // onClick={loginUserAccount}
             style={{alignItems:"center", marginTop:10,width:'100%'}}
            >
              Submit
            </Button>
            </div>
            <Footer/>
            </div>
        </div>
    )
}

export default ContactPage