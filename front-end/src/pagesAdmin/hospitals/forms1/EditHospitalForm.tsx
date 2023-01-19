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
import { useHospitalContext } from "../../../context/HospitalContext";
import { IHospital, apiClient } from "../../../api/clients";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const EditHospitalForm = () => {
  const [datevalue, setDateValue] = React.useState<Dayjs | null>(null);
  const [timevalue, setTimeValue] = React.useState<Dayjs | null>(null);
  const { setEditModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { selectedHospital, setSelectedHospital } = useHospitalContext();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    async (input: Partial<IHospital>) =>
      await apiClient.patch<{ hospital: IHospital; message: string }>(
        `/hospital/update/${selectedHospital?._id}`,
        { input }
      )
  );

  return (
    <Formik
      initialValues={{
        _id: selectedHospital?._id,
        name: selectedHospital?.name,
        email: selectedHospital?.email,
        phone_no: selectedHospital?.phone_no,
        address: selectedHospital?.address,
      }}
      onSubmit={(values, { resetForm }) => {
        if (isLoading) setLoading(true);
        mutate(
          { ...values },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all hospital");
              setSelectedHospital(null);
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
                  name="name"
                  label="Hospital Name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="phone_no"
                  label="Phone No"
                  fullWidth
                  value={values.phone_no}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid> 
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid> 
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="address"
                  label="Address"
                  fullWidth
                  value={values.address}
                  onChange={handleChange}
                />
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

export default EditHospitalForm;
