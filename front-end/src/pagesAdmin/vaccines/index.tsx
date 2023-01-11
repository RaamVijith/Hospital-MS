import AddButton from "../../components/buttons/AddButton";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import VaccineTableAD from "./vaccinesTable";

const VaccinesAD = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Vaccines</Typography>  
          <Divider /> 

      <VaccineTableAD/>

     
     
    </div>
  );
};

export default VaccinesAD;
