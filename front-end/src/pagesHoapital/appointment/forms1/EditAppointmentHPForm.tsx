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
import { useAppointmentContext } from "../../../context/AppointmentContext";
import { IAppointment, apiClient } from "../../../api/clients";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const STATUS = ["done", "pending", "cancel"];
const VACCINE_TYPE = ["pfizer", "sinopharm", "moderna"];

const EditAppointmentHPForm = () => {
  const [datevalue, setDateValue] = React.useState<Dayjs | null>(null);
  const [timevalue, setTimeValue] = React.useState<Dayjs | null>(null);
  const { setEditModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { selectedAppointment, setSelectedAppointment } = useAppointmentContext();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    async (input: Partial<IAppointment>) =>
      await apiClient.patch<{ appointment: IAppointment; message: string }>(
        `/appointment/update/${selectedAppointment?._id}`,
        { input }
      )
  );

  return (
    <Formik
      initialValues={{
        no: selectedAppointment?.no,
        status: selectedAppointment?.status,
        date: selectedAppointment?.date,
        time: selectedAppointment?.time,
        hospital: selectedAppointment?.hospital,
        type: selectedAppointment?.type,
      }}
      onSubmit={(values, { resetForm }) => {
        if (isLoading) setLoading(true);
        mutate(
          { ...values },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all appointment");
              setSelectedAppointment(null);
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
          <Grid container rowGap={2} >
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="hospital"
                  label="Hospital"
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
            
            <Grid item xs={6}>
            <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={datevalue}
                onChange={(newValue:any) => {
                  setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </FormControl>
            </Grid>


            <Grid item xs={6}>
            <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    label="Time"
                    value={timevalue}
                    onChange={(newValue) => {
                      setTimeValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
            </LocalizationProvider>
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

export default EditAppointmentHPForm;
