import AddButton from "../../components/buttons/AddButton";
import VaccineTableHP from "./vaccinesTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const VaccinesHP = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Vaccines</Typography>  
          <Divider /> 

      <VaccineTableHP/>

      

     
    </div>
  );
};

export default VaccinesHP;
