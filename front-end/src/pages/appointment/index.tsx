import AppointmentTable from "./AppointmentTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Appointment = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>My Appointment</Typography>  
          <Divider />
      <AppointmentTable />
    </div>
  );
};

export default Appointment;
