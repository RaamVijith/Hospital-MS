import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Paper,Table,TableBody,TableCell,Alert,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Data {
  _Id: string;
  name: string;
  email: string;
  address: string;

}
function createData(
  _Id: string,
  name: string,
  email: string,
  address: string
): Data {
  return {_Id,name,email,address };
}

var account = new Array();

const MyAccountTableHP=()=>{
  const [tableData, setTableData] = useState([])
  const [open, setOpen] = React.useState({ add: false, edit: false });
  const [accountList, setAccountList] = React.useState(account);

  const [formData, setFormData] = React.useState({
    _Id: "",
  name: "",
  email: "",
  address:""
  });

  const handleEditAccount = () => {
    var temp = accountList;
    temp.push(
      createData(
        formData._Id,
        formData.name,
        formData.email,
        formData.address,
       
      )
    );
    setAccountList(temp);
    console.log(accountList);
    handleClose("edit");
  };

//handle the popper open and close
const handleClickOpen = (type: String) => {
  if (type === "add") {
    setOpen({ ...open, add: true });
  } else {
    setOpen({ ...open, edit: true });
  }
};

const handleClose = (type: String) => {
  if (type === "add") {
    setOpen({ ...open, add: false });
  } else {
    setOpen({ ...open, edit: false });
  }
};


  return(
<div>

{/**Edit item Dialog */}

<Dialog open={open.edit} onClose={handleClose}>
          <DialogTitle>Edit Account </DialogTitle>
          <DialogContent>
          <TextField
              id="outlined-basic"
              label="Hospital Name"
              value={formData.name}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              value={formData.email}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          
            <br />
            <TextField
              id="outlined-basic"
              label="Address"
              value={formData.address}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <br />
           
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={handleEditAccount}
            >
              Update
            </Button>
            <Button
              onClick={() => {
                handleClose("edit");
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
    <div>


 <Paper sx={{ width: '30%', overflow: 'hidden',marginLeft:'30%',marginTop:'2%',justifySelf:'center' }}>


    <div style={{display:'flex',marginLeft:'5%',justifyContent:'space-around'}}>
          <div>
            <br/>
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Hospital Name</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Email</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Address</Typography>  
 
          <br/>

              
          </div>

          {accountList.map((data:any) => (
             <div style={{marginLeft:'5%'}} key={data.id}>
            
             <br/>
             
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.name}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.email}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.address}</Typography>  
             

             <br/>
   
             </div>
          ))}


    </div>
    <Button
              variant="contained"
             onClick={ () => { handleClickOpen("edit"); }}
             style={{alignItems:"center", marginTop:10,width:'50%',marginBottom:10,marginLeft:'25%'}}
            >
              Edit Details
            </Button>
 
</Paper>
</div>
</div>
  )
}

export default MyAccountTableHP