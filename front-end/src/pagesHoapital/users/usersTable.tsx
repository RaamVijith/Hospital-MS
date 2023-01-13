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

{/**Druff data

function createData(
  user_id:string,
  name: string,
  gender: string,
  age:string,
  address:string,
  hospital:string

) {
  return { user_id,name,gender,age,address,hospital};
}

const rows = [
  createData('001V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('002V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('003V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('004V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('005V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('006V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('007V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),
  createData('008V','Abhay','male','21','hospital road,batticaloa','EMS hospital'),]; */}



const UsersTable=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [tableData, setTableData] = useState([])


  //fetch API Hear************************************************
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.co")
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
    <Paper sx={{  overflow: 'hidden',marginTop:'2%' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >User Id</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >First Name</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Last Name</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Email</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Mobile No</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Gender</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Age</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Address</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Hospital</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row:any) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
              <StyledTableCell >{row.first_name}</StyledTableCell>
              <StyledTableCell >{row.last_name}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell >{row.mobile_no}</StyledTableCell>
              <StyledTableCell >{row.gender}</StyledTableCell>
              <StyledTableCell >{row.age}</StyledTableCell>
              <StyledTableCell >{row.address}</StyledTableCell>
              <StyledTableCell >{row.hospital}</StyledTableCell>

        
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

export default UsersTable
