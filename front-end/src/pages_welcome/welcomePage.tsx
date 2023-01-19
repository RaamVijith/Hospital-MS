import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import welcomePage from "../../images/welcome2.png";
import logo from "../../images/logo.png"
import {Button} from "@mui/material";


const WelcomePage=()=>{
    var sectionStyle = {
        width: "100%",
        height: "900px",
        backgroundImage: "url(" + welcomePage + ")",
        marginTop:'-11%'        
    };
    
let navigate = useNavigate(); 
  const routeChange = () =>{     
    let path = `/login`; 
    navigate(path);
  }
  const routeAbout = () =>{   
    let path = `/about`; 
    navigate(path);
  }  
  const routeContact = () =>{     
      let path = `/contact`; 
      navigate(path);
    }


    return(
        <div>

{/**App Bar */}
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

                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }} onClick={routeChange}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:"900",paddingLeft:2 }}>
                        LOGIN
                        </Typography>
                    </IconButton >

                </Toolbar>
             </AppBar>


            <div style={ sectionStyle }>
                <div >
                    <b style={{color:'white',fontSize:180,width:"100%",marginTop:200}}> Get Your </b>
                    <div></div>
                    <b style={{color:'white',fontSize:110,marginLeft:'15%'}}>Get Your Vaccination
                       
                    </b>
                    <div style={{marginTop:-50}}>
                    <b  style={{color:'white',fontSize:110,marginLeft:'20%'}}>Boost Your Health
                    
                    </b></div>
                    <div style={{fontSize:35,marginLeft:'35%'}}>
                        <a style={{color:'white'}}>Safe from corona virus</a>
                        <br/>
                        <div style={{marginTop:-10}}>

                        <a style={{color:'white'}}>by getting Vaccinated with us</a>
                        </div>
                        <Button onClick={routeChange} >
                        <div style={{border: '1px solid white',marginTop:20,marginLeft:50,width:340}}>
                        <a style={{color:'white',fontSize:25,marginLeft:10}}>GET YOUR VACCINATION </a>

                        </div> </Button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default WelcomePage