import AddButton from "../../components/buttons/AddButton";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MyVaccinesTable from "./myVaccinesTable";

const Vaccines = () => {
  return (
    <div>
 

      <Typography variant="h4" gutterBottom style={{color:'gray'}}><b>MY VACCINES</b></Typography>  
          <Divider /> 

      <MyVaccinesTable/>

     
    </div>
  );
};

export default Vaccines;
