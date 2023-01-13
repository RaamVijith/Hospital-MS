import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import AddAppointmentModal from "./modals1/AddAppointmentModal";
import EditAppointmentModel from "./modals1/EditAppointmentModal";
import UsersTableAD from './usersTable';

const UserAD = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray',marginBottom:'2%'}}>Users</Typography>  
          <Divider />
          <Divider />

   

      <EditAppointmentModel/>
      <UsersTableAD/>

    </div>
  );
};

export default UserAD;
