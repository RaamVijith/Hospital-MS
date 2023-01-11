import React, { useEffect } from "react";
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";


//initalise Column and Row
interface Column {
  id: "Appointment Id" | "User Id" |"Date"| "Time" ;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: "Appointment Id", label: "Appointment Id", minWidth: 150 },
  { id: "User Id", label: "User Id", minWidth: 150 },
  { id: "Date", label: "Date", minWidth: 150 },
  { id: "Time", label: "Time", minWidth: 150 },

];
interface Data {
  appointment_Id: string;
  userId: string;
  date: string;
  time: string;
}
function createData(
  appointment_Id: string,
  userId: string,
  date: string,
  time: string,
): Data {
  return {appointment_Id,userId,date,time };
}

//Data as array
var appointment = new Array();
var backupAppointment = new Array();

const AppointmentTableHP = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [appointmentList, setAppointmentList] = React.useState(appointment);


  //handle pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Handle adding new Appointment
  const [open, setOpen] = React.useState({ add: false, edit: false });
  const [formData, setFormData] = React.useState({
    appointment_Id:"",
    userId: "",
    date: "",
    time:"",
  });
  const handleAddNewAppointment = () => {
    var temp = appointmentList;
    temp.push(
      createData(
        formData.appointment_Id,
        formData.userId,
        formData.date,
        formData.time
      )
    );
    setAppointmentList(temp);
    console.log(appointmentList);
    backupAppointment = temp;
    handleClose("add");
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

  // Handle edit Appointment
  const handleEditAppointment = () => {
    var temp = appointmentList;
    var remainingArr = temp.filter((data) => data.id != formData.appointment_Id);
    remainingArr.push(
      createData(
        formData.appointment_Id,
        formData.userId,
        formData.date,
        formData.time
      )
    );
    setAppointmentList(remainingArr);
    backupAppointment = remainingArr;
    handleClose("edit");

    //Set the values empty in setFormData
  };

  // Handle delete Appointment
  const handleDeleteAppointment = (appointment_Id: String) => {
    var remainingArr = appointmentList.filter((data) => data.id != appointment_Id);
    setAppointmentList(remainingArr);
    backupAppointment = remainingArr;
    //need to delete into Appointment database
  
  };

  // Handle search the Appointment
  const handleSearch = (e: any) => {
    var searchValue = e.target.value;
    var tempList = new Array();
    if (searchValue != "" || appointmentList.length != 0) {
      appointment.map((element) => {
        if (searchValue.includes(element.appointment)) {
          tempList.push(element);
          return element;
        }
      });
      setAppointmentList(tempList);
    } else {
      setAppointmentList(backupAppointment);
    }
  };














  return (
    <div className="majorSearch">
      <div className="search">
        <div style={{display:'flex',justifyContent:'space-between'}}>
       
        <div >
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 0px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
                       "& .MuiOutlinedInput-root": {"&.Mui-focused fieldset": {borderColor: "#F27405",},},}}
                   onChange={handleSearch}/>
        </div>
        </div>
       
       

        


{/** Add dialog Box start */}
        <Dialog open={open.add} onClose={handleClose}>
          <DialogTitle>ADD NEW APPOINTMENT </DialogTitle>
          <DialogContent>

            <TextField id="outlined-basic" label="Appointment Id" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined"  fullWidth
                       onChange={(e) => setFormData({
                        ...formData,
                        appointment_Id: e.target.value,
                        })}   />
            <br />

            <TextField id="outlined-basic" label="UserId" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            userId: e.target.value,
                          }) }  />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                name="paymentMethod"
                label="Payment Method"
                value={formData.date}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e: any) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="maintenance">Maintenance</MenuItem>
              </Select>
            </FormControl>
            <br />
            
            <TextField id="outlined-basic" label="Appointment Date" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            time: e.target.value,
                          }) }  />
            <br />
           
          
          </DialogContent>

          <DialogActions>
            <Button variant="contained" sx={{ margin: "10px" }} onClick={handleAddNewAppointment} >
              Contained
            </Button>

            <Button onClick={() => { handleClose("add"); }} >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>


{/**Edit item Dialog */}

        <Dialog open={open.edit} onClose={handleClose}>
          <DialogTitle>Edit Appointment </DialogTitle>
          <DialogContent>
            <TextField
              id="outlined-basic"
              label="Appointment Id"
              value={formData.appointment_Id}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
              variant="outlined"
              disabled
              fullWidth
            />
            <br />
            <TextField
              id="outlined-basic"
              label="userId"
              value={formData.userId}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, userId: e.target.value })
              }
            />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                name="paymentMethod"
                label="Payment Method"
                value={formData.date}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e: any) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="maintenance">Maintenance</MenuItem>
              </Select>
            </FormControl>
            <br />
          
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={handleEditAppointment}
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
      </div>



      <div className="table">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440, border: "2px " }}>
            <Table aria-label="sticky table">
              <TableHead
                sx={{
                  maxHeight: 440,
                  backgroundColor: "#F7F7F7",
                  borderRadius: "2px",
                }}
              >
                <TableRow>
                  {columns.map((column, id) => (
                    <TableCell
                      key={id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="tableCell"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, setkey) => {
                    return (
                      // @ts-ignore
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={setkey}
                      >                        
{/* ////////////////////////// ctrl+ku */}
                        <TableCell align="left">{row.appointment_Id}</TableCell>
                        <TableCell align="left">{row.userId}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.time}</TableCell>



                  
                        <TableCell>
                          <BorderColorIcon
                            sx={{
                              color: "#2AB930",
                              marginRight: "15px",
                            }}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                appointment_Id: row.appointment_Id,
                                userId: row.userId,
                                date: row.date,
                                time: row.time,
                              });
                              handleClickOpen("edit");
                            }}
                          />
                          <DeleteIcon
                            sx={{
                              color: "#E74C3C",
                              "&:hover": {
                                color: "#E74C3C",
                              },
                            }}
                            onClick={() => {
                              handleDeleteAppointment(row.id);
                            }}
                            
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={appointmentList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AppointmentTableHP;
