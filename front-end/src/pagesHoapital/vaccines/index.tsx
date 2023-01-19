import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddVaccineModal from "./modals1/AddVaccineModal";
import EditVaccineModel from "./modals1/EditVaccineModal";
import VaccineTableHP from './vaccinesTable';
import {TextField} from "@mui/material";

const VaccinesHP = () => {
  return (
     <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Vaccines</Typography>  
          <Divider />
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 30px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
                       "& .MuiOutlinedInput-root": {"&.Mui-focused fieldset": {borderColor: "#F27405",},},}}
                        />
          <AddButton title="add new Vaccines" />
          </div>

          <div style={{height:5}}></div>


      <EditVaccineModel/>
      <AddVaccineModal/>
      <VaccineTableHP/>
    </div>
  );
};

export default VaccinesHP;
