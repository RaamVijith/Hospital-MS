import AppbarLogin from "./appBarRegister"
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import SeperatePages from "../seperatePages";
import Layout from "../../components/layout";
import reactLogo from "./reactLogo.png";
import LoginTable from "./registerTable";

const RegisterPage=()=>{
    

    return( 
        <div>
            <div >
                <AppbarLogin/>
               
                <div style={{justifyContent:'center',width:"80%",alignContent:'center',paddingLeft:"32%",paddingTop:'2%',borderColor:'black',borderWidth:'4'}}>
                     <LoginTable/>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage