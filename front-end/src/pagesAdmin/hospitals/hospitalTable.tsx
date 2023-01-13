import CustomTable, { IColumn } from "../../components/tables/Table";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppointmentContext } from "../../context/AppointmentContext";
import { useGlobalContext } from "../../context/GlobalContext";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import DeleteAppointmentModel from "./modals1/DeleteAppointmentModal";

const columns: IColumn[] = [
  { id: "_id", label: "Hospital Id" },
  { id: "name", label: "Name" },
  { id: "Location", label: "Phone" },
  { id: "email", label: "Email" },

];

const HospitalTableAD = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { setDeleteModalOpen, setEditModalOpen } = useGlobalContext();
  const { setSelectedAppointment, appointment } = useAppointmentContext();


  return (
    <>
    <DeleteAppointmentModel /> 
      <CustomTable
        columns={columns}
        count={appointment.length!}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      >
        {appointment
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, setkey) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={setkey}>
                {columns.map((col, index) => {
                  return (
                    <TableCell key={index} align={col.align}>
                      {
                        row[
                          col.id as keyof Omit<typeof row, "_id">
                        ]
                      }
                    </TableCell>
                  );
                })}
                <TableCell
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="edit">
                    <IconButton
                      onClick={() => {
                        setSelectedAppointment(row);
                        setEditModalOpen(true);
                      }}
                    >
                      <BorderColorIcon
                        color="success"
                        sx={{
                          cursor: "pointer",
                        }}
                        fontSize="medium"
                      />
                    </IconButton>
                  </Tooltip>
                  </TableCell>

                  <TableCell
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="delete">
                    <IconButton
                      onClick={() => {
                        setSelectedAppointment(row);
                        setDeleteModalOpen(true);
                      }}
                    >
                      <DeleteIcon
                        color="error"
                        sx={{ cursor: "pointer" }}
                        fontSize="medium"
                      />
                    </IconButton>
                  </Tooltip>
                  </TableCell>

              </TableRow>
            );
          })}
      </CustomTable>
    </>
  );
};

export default HospitalTableAD;
