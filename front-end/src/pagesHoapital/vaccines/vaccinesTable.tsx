import CustomTable, { IColumn } from "../../components/tables/Table";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useVaccineContext } from "../../context/VaccinesContext";
import { useGlobalContext } from "../../context/GlobalContext";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteVaccineModel from "./modals1/DeleteVaccineModal";

const columns: IColumn[] = [
  { id: "_id", label: "Vaccine Id" },
  { id: "name", label: "Vaccine Name" },
  { id: "status", label: "status" },

];

const VaccineTableHP = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { setDeleteModalOpen, setEditModalOpen } = useGlobalContext();
  const { setSelectedVaccine, vaccines } = useVaccineContext();


  return (
    <>
    <DeleteVaccineModel /> 
      <CustomTable
        columns={columns}
        count={vaccines.length!}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      >
        {vaccines
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
                        setSelectedVaccine(row);
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
                        setSelectedVaccine(row);
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

export default VaccineTableHP;
