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
  user_Id: string;
  first_name: string;
  last_name: string;
  gender: string;
  age: string;
  email:string;
  phone_no:string;
  address:string;
}
function createData(
  user_Id: string,
  first_name: string,
  last_name: string,
  gender: string,
  age: string,
  email:string,
  phone_no:string,
  address:string,
): Data {
  return {user_Id,first_name,last_name,gender,age,email,phone_no,address };
}

var account = new Array();

const MyAccountTable=()=>{
  const [tableData, setTableData] = useState([])
  const [open, setOpen] = React.useState({ add: false, edit: false });
  const [accountList, setAccountList] = React.useState(account);

  const [formData, setFormData] = React.useState({
    user_Id: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    email:"",
    phone_no:"",
    address:"",
  });

  const handleEditAccount = () => {
    var temp = accountList;
    temp.push(
      createData(
        formData.user_Id,
        formData.first_name,
        formData.last_name,
        formData.gender,
        formData.age,
        formData.email,
        formData.phone_no,
        formData.address
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
              label="First Name"
              value={formData.first_name}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
              variant="outlined"
              disabled
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Last Name"
              value={formData.last_name}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                name="gender"
                label="Gender"
                value={formData.gender}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e: any) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <MenuItem value="done">Male</MenuItem>
                <MenuItem value="cancel">Female</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              id="outlined-basic"
              label="Age"
              value={formData.age}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, age: e.target.value })
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
             <TextField
              id="outlined-basic"
              label="Phone No"
              value={formData.phone_no}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, phone_no: e.target.value })
              }
            />
             <TextField
              id="outlined-basic"
              label="Address"
              value={formData.address}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />

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
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>First Name</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Last Name</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Gender</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Age</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Email</Typography>  
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Mobile No</Typography> 
          <Typography variant="h6" gutterBottom style={{color:'gray'}}>Address</Typography>  
 
          <br/>

              
          </div>

          {accountList.map((data:any) => (
             <div style={{marginLeft:'5%'}} key={data.id}>
            
             <br/>
             
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.first_name}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.last_name}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.gender}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.age}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.email}</Typography>  
             <Typography variant="h6" gutterBottom style={{color:'gray'}}>{data.mobile_no}</Typography>  
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

export default MyAccountTable