import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import EditAppointmentModel from "./modals1/EditAppointmentModal";
import VaccineTableAD from './vaccinesTable';
const VaccinesAD = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray',marginBottom:'2%'}}>Vaccines</Typography>  
          <Divider />
          <Divider />

   

      <EditAppointmentModel/>
      <VaccineTableAD/>

    </div>
  );
};

export default VaccinesAD;
