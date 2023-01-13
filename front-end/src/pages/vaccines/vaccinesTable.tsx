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

{/** 
function createData(
  _id:string,
  name: string,
  type:string,
  hospital: string,

) {
  return { _id,name,type,hospital};
}

const rows = [
  createData('001V','sinoform',"Covid-19",'Akp hospital,batti hospital'),
  createData('002V','fizer',"Covid-19",'Akp hospital,batti hospital,kalmunai hospital'),
  createData('003V','poliyo',"Covid-19",'Akp hospital,batti hospital'),

];*/}


const VaccinesTable=()=> {
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
    <Paper sx={{ width: '800px', overflow: 'hidden',marginTop:'2%',marginLeft:'10%' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Vaccine Name</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Vaccine Type</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#2c73d2'}} >Available Hospitals</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row:any) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell >{row.type}</StyledTableCell>
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

export default VaccinesTable
