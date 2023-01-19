import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import EditVaccinesModel from "./modals1/EditVaccinesModal";
import VaccineTableAD from './vaccinesTable';
import {TextField} from "@mui/material";

const VaccinesAD = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray',marginBottom:'2%'}}>Vaccines</Typography>  
          <Divider />
          <Divider />

          <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 30px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
                       "& .MuiOutlinedInput-root": {"&.Mui-focused fieldset": {borderColor: "#F27405",},},}}
                        />

      <EditVaccinesModel/>
      <VaccineTableAD/>

    </div>
  );
};

export default VaccinesAD;
