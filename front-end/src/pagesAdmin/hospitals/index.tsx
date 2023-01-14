import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import EditAppointmentModel from "./modals1/EditAppointmentModal";
import HospitalTableAD from './hospitalTable';

const HospitalsAD = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Hospitals</Typography>  
          <Divider />
          <AddButton title="add new Hospital" />
          <div style={{height:20}}></div>


      <EditAppointmentModel/>
      <AddAppointmentModal/>
      <HospitalTableAD/>

    </div>
  );
};

export default HospitalsAD;
