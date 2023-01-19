import {
  Button,
  Grid,
  TextField,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import * as React from 'react';
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useVaccineContext } from "../../../context/VaccinesContext";
import { IVaccine, apiClient } from "../../../api/clients";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const STATUS = ["Available", "Not Available"];
const VACCINE_TYPE = ["pfizer", "sinopharm", "moderna"];

const EditVaccineForm = () => {
  const [datevalue, setDateValue] = React.useState<Dayjs | null>(null);
  const [timevalue, setTimeValue] = React.useState<Dayjs | null>(null);
  const { setEditModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { selectedVaccine, setSelectedVaccine} = useVaccineContext();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    async (input: Partial<IVaccine>) =>
      await apiClient.patch<{ vaccine: IVaccine; message: string }>(
        `/vaccine/update/${selectedVaccine?._id}`,
        { input }
      )
  );

  return (
    <Formik
      initialValues={{
        _id: selectedVaccine?._id,
        name: selectedVaccine?.name,
        status: selectedVaccine?.status,
        type: selectedVaccine?.type,
      }}
      onSubmit={(values, { resetForm }) => {
        if (isLoading) setLoading(true);
        mutate(
          { ...values },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all vaccine");
              setSelectedVaccine(null);
              setLoading(false);
              setSnackMessage(data.data.message);
              setSnackOpen(true);
            },
            onError: (error: any) => {
              console.log(error);
              setSnackMessage(error.message);
              setSnackOpen(true);
            },
            onSettled: () => {
              setLoading(false);
              setEditModalOpen(false);
              resetForm();
            },
          }
        );
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
           <Grid container rowGap={2} columnGap={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="Vaccine_Name"
                  label="Vaccine Name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Vaccine Type</InputLabel>
                <Select
                  onChange={handleChange}
                  fullWidth
                  name="type"
                  value={values.type}
                >
                  {VACCINE_TYPE.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>status</InputLabel>
                <Select
                  onChange={handleChange}
                  fullWidth
                  name="status"
                  value={values.status}
                >
                  {STATUS.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
          </Grid>
          <DialogActions>
            <Button variant="contained" type="submit">
              {isLoading ? <CircularProgress /> : "update"}
            </Button>
            <Button
              onClick={() => setEditModalOpen(false)}
              variant="outlined"
              color="error"
            >
              cancel
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};

export default EditVaccineForm;
