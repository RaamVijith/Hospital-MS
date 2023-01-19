import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AppointmentTableHP from "./AppointmentTableHP";
import EditAppointmentModel from "./modals1/EditAppointmentModal";

const AppointmentHP = () => {
  return (
    <div>
          <Typography variant="h4" gutterBottom style={{color:'gray',marginBottom:'2%'}}>Appointments</Typography>  
          <Divider />
          <Divider />
          <EditAppointmentModel/>
          <AppointmentTableHP/>
    </div>
  );
};

export default AppointmentHP;
