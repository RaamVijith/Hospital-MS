import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {TextField} from "@mui/material";


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

function createData(
  _id:string,
  name: string,
  email:string,
  address: string,
  available_vaccine: string,
) {
  return { _id,name,email,address,available_vaccine};
}

{/**
const rows = [
  createData('001','Akp Hospital','kalmunai road, akkaraipattu','fizer, sinoform,polio'),
  createData('002','Batti Hospital','Batti road, akkaraipattu','fizer, sinoform,polio'),
  createData('003','Batti Hospital','Batti road, akkaraipattu','fizer, sinoform,polio'),
  createData('004','Batti Hospital','Batti road, akkaraipattu','fizer, sinoform,polio'),
];
 */}


const HospitalTable=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [tableData, setTableData] = useState([])


  //fetch API Hear************************************************
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
    console.log(tableData)


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  


  return (
    <Paper sx={{ width: '70%', overflow: 'hidden',marginLeft:'10%',marginTop:'2%' }}>
     {/**
      * <TextField id="outlined-basic" label="Search" variant="outlined" size="small" 
                   sx={{margin: "10px 0px 10px 30px",backgroundColor: "white","& label.Mui-focused": {color: "#F27405",}, 
                       "& .MuiOutlinedInput-root": {"&.Mui-focused fieldset": {borderColor: "#F27405",},},}}
                        />
      */}  
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Hospital Name</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} align="right">Location</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} align="right">Available Vaccines</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row:any) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.available_vaccine}</StyledTableCell>
        
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <TablePagination
     rowsPerPageOptions={[10, 25, 100]}
     component="div"
     count={tableData.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
   />
   </Paper>
    
  );
}

export default HospitalTable
