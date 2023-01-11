import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow,TextField,Button,Dialog,DialogTitle,DialogContent,DialogActions,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";
import { Outlet } from "react-router-dom";
import Layout from "../components/layout";


const SeperatePages=(props:any)=>{
    let { seperate } = props;

  if (seperate=="1") {
    return (
                <Outlet/>
            );

  }if (seperate=="2") {
    return (
      <Layout>
          <Outlet/>
      </Layout>   );

  }else{
    return <button>hemat</button>;
  }
}

export default SeperatePages