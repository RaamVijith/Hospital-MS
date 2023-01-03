import React from "react";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HomeBoxes from "./homeBoxes";
import RecentPaymentTable from "./recentPaymentTable";
import DuePaymentTable from "./duePaymentTable";


const Home = () => {
  return (
    <div>
          <Typography variant="h4" gutterBottom style={{color:'gray'}}>Dashboard</Typography>  
          <Divider />
          <HomeBoxes/>


          <div style={{display:'flex',paddingTop:50}} >
            <div style={{paddingRight:100}}>
                 <RecentPaymentTable/>
            </div>
            <div style={{paddingRight:100}}>
                 <DuePaymentTable/>
            </div>

          </div>
 
     </div>
)};

export default Home;
