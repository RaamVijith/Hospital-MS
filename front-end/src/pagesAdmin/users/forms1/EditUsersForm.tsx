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
import { useUsersContext } from "../../../context/UsersContext";
import { IUsers, apiClient } from "../../../api/clients";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const GENDER = ["male", "female"];

const EditUsersForm = () => {
  const [datevalue, setDateValue] = React.useState<Dayjs | null>(null);
  const [timevalue, setTimeValue] = React.useState<Dayjs | null>(null);
  const { setEditModalOpen, setLoading, setSnackMessage, setSnackOpen } =
    useGlobalContext();
  const { selectedUsers, setSelectedUsers } = useUsersContext();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    async (input: Partial<IUsers>) =>
      await apiClient.patch<{ users: IUsers; message: string }>(
        `/users/update/${selectedUsers?._id}`,
        { input }
      )
  );

  return (
    <Formik
      initialValues={{
        _id: selectedUsers?._id,
        first_name: selectedUsers?.first_name,
        last_name: selectedUsers?.last_name,
        email: selectedUsers?.email,
        mobile_no: selectedUsers?.mobile_no,
        gender: selectedUsers?.gender,
        age: selectedUsers?.age,

      }}
      onSubmit={(values, { resetForm }) => {
        if (isLoading) setLoading(true);
        mutate(
          { ...values },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all users");
              setSelectedUsers(null);
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
                  name="first_name"
                  label="First Name"
                  fullWidth
                  value={values.first_name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="last_name"
                  label="Last Name"
                  fullWidth
                  value={values.last_name}
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
                  name="mobile_no"
                  label="Mobile No"
                  fullWidth
                  value={values.mobile_no}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  onChange={handleChange}
                  fullWidth
                  name="gender"
                  value={values.gender}
                >
                  {GENDER.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="age"
                  label="Age"
                  fullWidth
                  value={values.age}
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

export default EditUsersForm;
