import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Footer from "./footer";
import about from "../../images/about1.jpg";
import logo from "../../images/logo.png"

const AboutPage=()=>{
    var sectionStyle = {
        width: "100%",
        height:"100%",
        backgroundImage: "url(" + about + ")",
        marginTop:"-50%"
        
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
        navigate(path);
      }
    return(
        <div >
           <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }} >
                <Toolbar>
                <img style={{height:'3%',width:'3%', marginRight:'0.5%'}} src={logo} alt="React Image" />

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontWeight:"900" }}>
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

            <div style={{paddingTop:'50%'}}>
            <Typography variant="h3" gutterBottom style={{color:'black',marginTop:100,marginLeft:"42%",fontWeight:'700'}}>About Us</Typography>  
            <div style={{color:'black',width:"50%", marginLeft:"30%",marginTop:50,marginBottom:'8.2%'}}>
                <b style={{fontSize:50}}>We Are Happy To Serve You!</b>
                <br/>
                <b style={{fontSize:20}}>Getting your Covid-19 vaccine safe more relaiable way through make your appointments with us.</b>
                <br/>
                <br/>
                <b style={{fontSize:20}}>Our Services</b>
                <br/>
                <b style={{fontSize:15}}>   * Give appointments for your vaccination</b>
                <br/>
                <b style={{fontSize:15}}>   * Keep your vaccination records</b>

            </div>
            <Footer/>
            </div>

            </div>
        </div>
    )
}

export default AboutPage