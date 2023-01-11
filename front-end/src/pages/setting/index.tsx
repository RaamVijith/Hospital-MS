import AddButton from "../../components/buttons/AddButton";
import SettingTable from "./settingTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Setting = () => {
  return (<div>
    <Typography variant="h4" gutterBottom style={{color:'gray'}}>Reset Password</Typography>  
          <Divider />
    <div style={{justifyContent:'center',alignSelf:'center',paddingLeft:"25%",paddingTop:"2%"}}>

     <SettingTable/>
    </div>
    </div>
  );
};

export default Setting;
