import AddButton from "../../components/buttons/AddButton";
import UserTableHP from "./usersTable";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const UserHP = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>Users</Typography>  
          <Divider /> 
     <UserTableHP/>
    </div>
  );
};

export default UserHP;
