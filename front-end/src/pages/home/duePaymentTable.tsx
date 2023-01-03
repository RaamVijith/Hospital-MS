import Typography from '@mui/material/Typography';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  name2: string,

  
) {
  return { name, name2};
}

const rows = [
  createData('Frozen yoghurt', 'ndsmnkd dsnmnmas iihwihiw idknsnsdm du '),
  createData('Ice cream sandwich', 'djshdjsdhjhjjds hdjsh kdjoad ad ha k'),
  createData('Eclair', 'dskjkdjksjd dskdjksd'),
  createData('Cupcake', 'skfjdkfndf fdknnknkndf'),
  createData('Gingerbread','lsdfnnmdf dfnknknewjoojds'),
];

const DuePaymentTable =()=>{
    return(
        <div style={{paddingTop:20}}>
            <Typography variant="h6" gutterBottom style={{color:'gray'}}>Recent Payments</Typography>  

{/*Table */}
            <TableContainer component={Paper}>
      <Table sx={{ maxWidth:500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Details</TableCell>

       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name2}
              </TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
};

export default DuePaymentTable;