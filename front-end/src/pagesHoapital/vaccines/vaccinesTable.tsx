import React, { useEffect } from "react";
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



//initalise Column and Row
interface Column {
  id: "Appointment Id" | "Hospital" |"Status"| "Appointment Date" | "Appointment time";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: "Appointment Id", label: "Appointment Id", minWidth: 150 },
  { id: "Hospital", label: "Hospital", minWidth: 150 },
  { id: "Status", label: "Status", minWidth: 150 },
  { id: "Appointment Date", label: "Appointment Date", minWidth: 150 },
  { id: "Appointment time", label: "Appointment time", minWidth: 150 },

];
interface Data {
  appointment_Id: string;
  hospital: string;
  status: string;
  appointment_Date: any;
  appointment_Time: string;
}
function createData(
  appointment_Id: string,
  hospital: string,
  status: string,
  appointment_Date: string,
  appointment_Time: string,
): Data {
  return {appointment_Id,hospital,status,appointment_Date,appointment_Time };
}

//Data as array
var appointment = new Array();
var backupAppointment = new Array();

const AppointmentTable = () => {
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
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const [formData, setFormData] = React.useState({
    appointment_Id:"",
    hospital: "",
    status: "",
    appointment_Date:"",
    appointment_Time: "",
  });
  const handleAddNewAppointment = () => {
    var temp = appointmentList;
    temp.push(
      createData(
        formData.appointment_Id,
        formData.hospital,
        formData.status,
        formData.appointment_Date,
        formData.appointment_Time
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
        formData.hospital,
        formData.status,
        formData.appointment_Date,
        formData.appointment_Time
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
        <Button variant="contained" sx={{margin: "10px 40px 10px 0px",backgroundColor: "primay", "&:hover": {backgroundColor: "#F27405",},}}
                 onClick={() => {handleClickOpen("add");}} >
          + Add My Appointment
        </Button>
        <div >
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 30px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
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

            <TextField id="outlined-basic" label="Hospital" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hospital: e.target.value,
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
                value={formData.status}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e: any) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <MenuItem value="done">Done</MenuItem>
                <MenuItem value="cancel">Cancel</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
            <br />
          
            <TextField id="outlined-basic" label="Appointment Date" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                           // appointment_Date: e.target.value,
                          }) }  />
            <br />
            <TextField id="outlined-basic" label="Appintment Time" sx={{ marginTop: "10px", marginBottom: "10px" }} variant="outlined" fullWidth
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            appointment_Time: e.target.value,
                          }) }  />
            <br />
          
          </DialogContent>

          <DialogActions>
            <Button variant="contained" sx={{ margin: "10px" }} onClick={handleAddNewAppointment} >
              Done
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
              label="Hospital"
              value={formData.hospital}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, hospital: e.target.value })
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
                value={formData.status}
                sx={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(e: any) =>
                  setFormData({ ...formData, appointment_Date: e.target.value })
                }
              >
                <MenuItem value="done">Done</MenuItem>
                <MenuItem value="cancel">Cancel</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              id="outlined-basic"
              label="Appointment Date"
              value={formData.appointment_Date}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
              variant="outlined"
              disabled
              fullWidth
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Appointment Time"
              value={formData.hospital}
              sx={{ marginTop: "10px", marginBottom: "20px" }}
              variant="outlined"
              fullWidth
              onChange={(e: any) =>
                setFormData({ ...formData, hospital: e.target.value })
              }
            />

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
                        <TableCell align="left">{row.hospital}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">{row.appointment_Date}</TableCell>
                        <TableCell align="left">{row.appointment_Time}</TableCell>



                  
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
                                hospital: row.hospital,
                                status: row.status,
                                appointment_Date: row.appointment_Date,
                                appointment_Time: row.appointment_Time,
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

export default AppointmentTable;
