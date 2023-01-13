import AddButton from "../../components/buttons/AddButton";
import VaccinesTable from "./vaccinesTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const MyVaccines = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}><b>VACCINES</b></Typography>  
          <Divider /> 

      <VaccinesTable/>

     


     
    </div>
  );
};

export default MyVaccines;
