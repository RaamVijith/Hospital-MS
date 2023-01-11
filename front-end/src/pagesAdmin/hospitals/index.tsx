import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HospitalTableAD from './hospitalTable';
const HospitalsAD = () => {
  return (
    <div>
          <Typography variant="h4" gutterBottom style={{color:'gray'}}>Hospitals</Typography>  
          <Divider />      
          <HospitalTableAD/>
    </div>
  );
};

export default HospitalsAD;
