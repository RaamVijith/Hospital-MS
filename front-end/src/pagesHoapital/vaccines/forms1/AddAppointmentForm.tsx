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
import { IAppointment } from "../../../api/clients";
import { appointmentClient } from "../../../api/appointment";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const initialValues = {
  no:"",
  time: "",
  status: "",
  date: "",
  hospital:"",
  type:""
};

const STATUS = ["Available", "Not Available"];
const VACCINE_TYPE = ["pfizer", "sinopharm", "moderna"];


const AddAppointmentForm = () => {
  const [datevalue, setDateValue] = React.useState<Dayjs | null>(null);
  const [timevalue, setTimeValue] = React.useState<Dayjs | null>(null);
  const { setAddModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { createAppointment } = appointmentClient;
  const { isLoading, mutate } = useMutation(
    async (input: Omit<IAppointment, "_id">) => await createAppointment(input)
  );

  const queryClient = useQueryClient();


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {

        if (isLoading) setLoading(true);
        mutate(
          { ...values,
            date: String(datevalue),
            time: String(timevalue),

          },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all appointments");

              setLoading(false);
              setSnackMessage(data.message);
              setSnackOpen(true);
            },
            onError: (error: any) => {
              console.log(error);
              setSnackMessage(error.message);
              setSnackOpen(true);
            },
            onSettled: () => {
              setLoading(false);
              setAddModalOpen(false);
              resetForm();
            },
          }
        );  console.log(mutate)

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
                  value={values.hospital}
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
              {isLoading ? <CircularProgress /> : "add"}
            </Button>
            <Button
              onClick={() => setAddModalOpen(false)}
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

export default AddAppointmentForm;
