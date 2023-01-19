import CustomTable, { IColumn } from "../../components/tables/Table";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHospitalContext } from "../../context/HospitalContext";
import { useGlobalContext } from "../../context/GlobalContext";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteHospitalModel from "./modals1/DeleteHospitalModal";

const columns: IColumn[] = [
  { id: "_id", label: "Hospital Id" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phone_no", label: "Phone No" },
  { id: "address", label: "address" },

];

const HospitalTableAD = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { setDeleteModalOpen, setEditModalOpen } = useGlobalContext();
  const { setSelectedHospital, hospital } = useHospitalContext();


  return (
    <>
    <DeleteHospitalModel /> 
      <CustomTable
        columns={columns}
        count={hospital.length!}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      >
        {hospital
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
                        setSelectedHospital(row);
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
                        setSelectedHospital(row);
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
