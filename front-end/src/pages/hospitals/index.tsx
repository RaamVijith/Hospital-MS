import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HospitalTable from './hospitalTable';

const Hospitals = () => {
  return (
    <div>
          <Typography variant="h4" gutterBottom style={{color:'gray'}}>Hospitals</Typography>  
          <Divider />      
          <HospitalTable/>
    </div>
  );
};

export default Hospitals;
