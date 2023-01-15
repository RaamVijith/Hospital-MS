import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import AppointmentTable from "./AppointmentTable";
import EditAppointmentModel from "./modals1/EditAppointmentModal";
import {TextField} from "@mui/material";


const Appointment = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>My Appointment</Typography>  
          <Divider />
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 30px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
                       "& .MuiOutlinedInput-root": {"&.Mui-focused fieldset": {borderColor: "#F27405",},},}}
                        />
          <AddButton title="add new Appointment" />

          </div>
          <div style={{height:5}}></div>
   

      <EditAppointmentModel/>
      <AddAppointmentModal/>
      <AppointmentTable/>

    </div>
  );
};

export default Appointment;
