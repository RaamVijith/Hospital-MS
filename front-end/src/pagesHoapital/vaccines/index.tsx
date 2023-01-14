import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import EditAppointmentModel from "./modals1/EditAppointmentModal";
import VaccineTableHP from './vaccinesTable';

const VaccinesHP = () => {
  return (
     <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Vaccines</Typography>  
          <Divider />
          <AddButton title="add new Vaccines" />
          <div style={{height:20}}></div>


      <EditAppointmentModel/>
      <AddAppointmentModal/>
      <VaccineTableHP/>
    </div>
  );
};

export default VaccinesHP;
