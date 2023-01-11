import AppointmentTableHP from './AppointmentTableHP';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const AppointmentHP = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>My Appointment</Typography>  
          <Divider />
          <div style={{width:'80%',marginLeft:'10%'}}>
          <AppointmentTableHP />

          </div>
    </div>
  );
};

export default AppointmentHP;
