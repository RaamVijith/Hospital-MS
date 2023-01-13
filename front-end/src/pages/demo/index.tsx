import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddButton from "../../components/buttons/AddButton";
import EditShopModel from "./modals/EditShopModal";
import AddShopModal from "./modals/AddShopModal";
import ShopTable from "./DemoTable";


const Demo = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{color:'gray'}}>My Appointment</Typography>  
          <Divider />
          <AddButton title="add new Appointment" />
        <EditShopModel />
        <AddShopModal />
         <ShopTable />  

  

    </div>
  );
};

export default Demo;
