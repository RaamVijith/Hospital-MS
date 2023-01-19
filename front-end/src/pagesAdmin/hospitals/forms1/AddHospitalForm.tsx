import {
  Button,
  Grid,
  TextField,
  DialogActions,
  FormControl,
  CircularProgress,
} from "@mui/material";
import * as React from 'react';
import { Formik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { IHospital } from "../../../api/clients";
import { hospitalClient } from "../../../api/hospital";
import { useGlobalContext } from "../../../context/GlobalContext";
import { Dayjs } from 'dayjs';


const initialValues = {
  _id:"",
  name: "",
  email: "",
  phone_no:"",
  address: ""
};



const AddHospitalForm = () => {
  const { setAddModalOpen, setLoading, setSnackMessage, setSnackOpen } =useGlobalContext();
  const { createHospital } = hospitalClient;
  const { isLoading, mutate } = useMutation(
    async (input: Omit<IHospital, "_id">) => await createHospital(input)
  );

  const queryClient = useQueryClient();


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {

        if (isLoading) setLoading(true);
        mutate(
          { ...values,
         
          },
          {
            onSuccess: (data) => {
              queryClient.invalidateQueries("all hospitals");

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
          <Grid container rowGap={2} columnGap={2} >
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  name="hospital_name"
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

export default AddHospitalForm;
