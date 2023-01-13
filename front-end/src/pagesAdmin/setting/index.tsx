import AddButton from "../../components/buttons/AddButton";
import SettingTableAD from "./settingTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const SettingAD = () => {
  return (<div>
    <Typography variant="h4" gutterBottom style={{color:'gray'}}>Reset Password</Typography>  
          <Divider />
    <div style={{justifyContent:'center',alignSelf:'center',paddingLeft:"25%",paddingTop:"2%"}}>

     <SettingTableAD/>
    </div>
    </div>
  );
};

export default SettingAD;
