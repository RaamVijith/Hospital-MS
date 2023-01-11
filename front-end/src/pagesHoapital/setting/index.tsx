import AddButton from "../../components/buttons/AddButton";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import SettingTableHP from "./settingTable";

const SettingHP = () => {
  return (<div>
    <Typography variant="h4" gutterBottom style={{color:'gray'}}>Dashboard</Typography>  
          <Divider />
    <div style={{justifyContent:'center',alignSelf:'center',paddingLeft:"25%",paddingTop:"2%"}}>

     <SettingTableHP/>
    </div>
    </div>
  );
};

export default SettingHP;
