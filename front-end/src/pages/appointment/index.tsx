import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import AppointmentTable from "./AppointmentTable";
import EditAppointmentModel from "./modals1/EditAppointmentModal";

const Appointment = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>My Appointment</Typography>  
          <Divider />
          <AddButton title="add new Appointment" />
          <div style={{height:20}}></div>
   

      <EditAppointmentModel/>
      <AddAppointmentModal/>
      <AppointmentTable/>

    </div>
  );
};

export default Appointment;
