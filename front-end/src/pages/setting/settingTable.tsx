import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";

const Setting=()=>{
    return(
        <div style={{width:"40%"}}>

            <TextField id="outlined-basic" label="User Name" sx={{ marginTop: "10px", marginBottom: "10px",justifyContent:'center' }} variant="outlined"  fullWidth
                      // onChange={(e) => setFormData({
                     //   ...formData,
                      //  appointment_Id: e.target.value,
                      //  })}   
                      />
            <br />

            <TextField id="outlined-basic" label="Old password" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />
            
            <TextField id="outlined-basic" label="New Password" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />
            
            <TextField id="outlined-basic" label="New password" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                       />
            <br />


            <Button
              variant="contained"
              sx={{ margin: "10px" }}
             // onClick={handleEditAppointment}
             style={{alignItems:"center",marginLeft:'40%'}}
            >
              Update
            </Button>
        </div>
    )
}

export default Setting;